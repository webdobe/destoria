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
}

const ThreeD = ({ width, height, wrapperClassName, mtlPath, objPath }: PropsType) => {
  let scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer, frameId: any, freedomMesh: THREE.Group;
  const mountEl = useRef<any>();
  useEffect(() => {
    (async () => {
      const clientWidth = mountEl.current.clientWidth;
      const clientHeight = mountEl.current.clientHeight;
      scene = new THREE.Scene();
  
      //Add Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setSize(clientWidth, clientHeight);
      mountEl.current.appendChild(renderer.domElement);
  
      //add Camera
      camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 3000);
      camera.position.z = 20;
      camera.position.y = 0;
  
      //Camera Controls
      const controls = new OrbitControls(camera, renderer.domElement);
  
      //LIGHTS
      const lights = [];
      lights[0] = new THREE.PointLight(0x304ffe, 1000, 0);
      lights[1] = new THREE.PointLight(0xffffff, 1000, 0);
      lights[2] = new THREE.PointLight(0xffffff, 1000, 0);
      lights[0].position.set(0, 200, 0);
      lights[1].position.set(100, 200, 100);
      lights[2].position.set(-100, -200, -100);
      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);
  
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
    mtlLoader.load(mtlPath, materials => {
      materials.preload();
      console.log("Material loaded");
      //Load Object Now and Set Material
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        objPath,
        object => {
          freedomMesh = object;
          freedomMesh.position.setY(-15); //or  this
          freedomMesh.scale.set(0.1, 0.09, 0.1);
          scene.add(freedomMesh);
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
      );
    });
    })
  );

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
    if (freedomMesh) freedomMesh.rotation.y += 0.03;

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
