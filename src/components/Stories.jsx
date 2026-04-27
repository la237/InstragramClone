import MarinaSena from "../Imgs/MarinaSena.png";
import Marisa from "../Imgs/MarisaMonte.png";
import Duquesa from "../Imgs/Duquesa.png";
import Rita from "../Imgs/ritalee.png";
import Don from "../Imgs/Dontoliver.png";
import { useState } from "react";
import StoryViewer from "./StoryViewer";






export default function Stories() {
  const [open, setOpen] = useState(false);
  const stories = [
    { name: "MarinaSena", img: MarinaSena },
    { name: "MarisaMonte", img: Marisa },
    { name: "Duquesa", img: Duquesa },
    { name: "RitaLee", img: Rita },
    { name: "DonToliver", img: Don },
  ];

   return (
    <>
      <div className="stories">
        {stories.map((story, i) => (
          <div key={i} className="story" onClick={() => setOpen(true)}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>

      
    </>
  );
}
   