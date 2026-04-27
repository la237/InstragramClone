import MarinaSena from "../Imgs/MarinaSena.png";
import Marisa from "../Imgs/MarisaMonte.png";
import Duquesa from "../Imgs/Duquesa.png";
import Rita from "../Imgs/ritalee.png";
import Don from "../Imgs/Dontoliver.png";
import duda from "../Imgs/duda.png";
import portela from "../Imgs/portela.png";
import lary from "../Imgs/laryssa.png";




export default function RightSidebar() {
  return (
    <div className="rightSidebar">

      <div className="profile">
        <img src="https://i.pravatar.cc/50" alt="" />
        <div>
          <strong>ana.dev</strong>
          <p>Ana Carolina</p>
        </div>
      </div>

      <h4>Sugestões para você</h4>

      <div className="suggestion">
        <span>joao.dev</span>
        <button>Seguir</button>
      </div>

      <div className="suggestion">
        <span>maria.dev</span>
        <button>Seguir</button>
      </div>

      <div className="suggestion">
        <span>lucas.dev</span>
        <button>Seguir</button>
      </div>

    </div>
  );
}