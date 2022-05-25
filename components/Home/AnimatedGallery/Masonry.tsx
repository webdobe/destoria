import React, { useState, useEffect, useMemo, useCallback } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import ImageViewer from "react-simple-image-viewer";
import useMedia from "hooks/useMedia";
import data from "./data";

function Masonry() {
  const columns = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
    [5, 4, 3],
    2
  );
  const [ref, { width }] = useMeasure();
  const [items, set] = useState(data);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => set(shuffle), 5000);
    return () => clearInterval(t);
  }, []);

  const openImageViewer = useCallback((item) => {
    const index = data.findIndex((el) => el.css == item.css);
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const transitions = useTransition(gridItems, {
    key: (item: { css: string; height: number }) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <>
      <div ref={ref} className="list mt-10" style={{ height: Math.max(...heights), cursor: 'pointer' }}>
        {transitions((style, item) => (
          <a.div style={style}>
            <div
              style={{
                backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
              }}
              onClick={() => openImageViewer(item)}
            />
          </a.div>
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={data.map((i) => i.css)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
}

export default function App() {
  return <Masonry />;
}
