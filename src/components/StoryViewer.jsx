import { useEffect, useState } from "react";

export default function StoryViewer({ stories, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < stories.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        onClose();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [index, stories.length, onClose]);

  function next() {
    if (index < stories.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  }

  function prev() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="storyModal">

      <img src={stories[index].img} alt="" />

      <button className="close" onClick={onClose}>✕</button>

      <div className="click-left" onClick={prev}></div>
      <div className="click-right" onClick={next}></div>

    </div>
  );
}