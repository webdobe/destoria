import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useEffect, useRef } from "react";

interface PropsType {
  width?: string;
  height?: string;
  wrapperClassName?: string;
  mtlPath: string;
  objPath: string;
  texturePath?: string;
}

const ThreeD = ({ width, height, wrapperClassName, mtlPath, objPath, texturePath }: PropsType) => {
  let scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer, frameId: any, pivot: THREE.Object3D;
  const mountEl = useRef<any>();
  useEffect(() => {
    (async () => {
      const clientWidth = mountEl.current.clientWidth;
      const clientHeight = mountEl.current.clientHeight;
  
      //Add Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setClearColor("white", 0);

      renderer.setSize(clientWidth, clientHeight);
      mountEl.current.appendChild(renderer.domElement);
  
      //add Camera
      camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 100);
      camera.position.z = 20;
      camera.position.y = 0;
  
      //Camera Controls
      const controls = new OrbitControls(camera, renderer.domElement);
  
      //Simple Box with WireFrame
      await addModels();
  
      renderScene();
      //start animation
      start();
    })();
    return () => {
      stop();
      mountEl.current.removeChild(renderer.domElement);
    }
  }, []);

  const addModels = () => (
    new Promise((resolve, reject) => {
      //Loading 3d Models
      //Loading Material First
      const mtlLoader = new MTLLoader();
      mtlLoader.load(mtlPath, async (materials) => {
        materials.preload();
        console.log("=== Material loaded ===");
        //Load Object Now and Set Material
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials).load(
          objPath,
          (object) => {
            const logo = object;
            var texture = new THREE.TextureLoader().load(texturePath || '');

            logo.traverse(function (child) {   // aka setTexture
              if (child instanceof THREE.Mesh) {
                  child.material.map = texture;
              }
            });
            logo.position.set(-10, -12, 0);
            logo.scale.set(8, 8, 8);
            pivot = new THREE.Object3D();
            pivot.add(logo);
            scene = new THREE.Scene();
            scene.add(pivot);
            addLight();
            console.log('=== object loaded ===');
            resolve(scene);
          },
          xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          error => {
            console.log("An error happened" + error);
            reject(error);
          }
        )
      });
    })
  );

  const addLight = () => {
    //LIGHTS
    const light = new THREE.PointLight();
    light.position.set(0, 0, 100);
    scene.add(light);
  }

  const start = () => {
    if (!frameId) {
      frameId = window.requestAnimationFrame(animate);
    }
  };

  const stop = () => {
    cancelAnimationFrame(frameId);
  };

  const animate = () => {
    //Rotate Models
    if (pivot) pivot.rotation.y += 0.02;

    renderScene();
    frameId = window.requestAnimationFrame(animate);
  };

  const renderScene = () => {
    if (renderer) renderer.render(scene, camera);
  };

  return (
    <div
      className={wrapperClassName}
      style={{ width, height }}
      ref={mountEl}
    />
  );
}

ThreeD.defaultProps = {
  width: '295px',
  height: '170px',
  wrapperClassName: '',
}

export default ThreeD;
