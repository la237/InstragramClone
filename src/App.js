import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import "./App.css";
import Header from "./components/Header";

import {
  arraial,
  sophia,
  Boiadeira, 
  Duquesa,
  Layany,    
  curu2,
  cabofrio,
  Portela,
  Duda,
  Don,
  Duque,
  rodizio,
  Laryssa
} from "./Imgs";


function App() {

  const posts = [
    {
      user: "Portela",
      img: arraial,
      profile: Portela,
      caption: "Paraíso encontrado 🏝️"
    },
    {
      user: "juriki.juridico",
      img: sophia,
      profile: sophia,
      caption: "Juriki a justiça que fala sua língua!"
    },
    {
      user: "Duquesa",
      img: Duque,
      profile: Duquesa,
      caption: "Swag"
    },
    {
      user: "Laryssa",
      img: rodizio ,
      profile: Laryssa,
      caption: "s2"
    },
   
    {
      user: "duda",
      img: Boiadeira,  
      profile: Duda,
      caption: "De volta as raízes"
    },
    {
      user: "laiany",
      img: Layany,     
      profile: Layany, 
      caption: "Just the Best!"
    },
    
    {
      user: "Don",
      img: Don,
      profile: Don,
      caption: "Listen my new albun!"
    },
    {
      user: "laryssa",
      img: cabofrio,   
      profile: Laryssa,
      caption: "Explorando o RJ 🌍"
    }
  ];

  return (
    <div className="layout">

      <Header />

      <Sidebar />

      <div className="feed">
        <Stories />

        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}

      </div>

      <RightSidebar />

    </div>
  );
}

export default App;