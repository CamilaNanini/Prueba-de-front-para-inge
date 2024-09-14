import { Link } from "react-router-dom";
import gameLogo from "../assets/logo-juego.jpg"

const Home: React.FC = () => {
    return (
      <div>
        <p><Link className="redirigir" to='/que_es_esto'><button>Hola</button></Link></p>
        <h1>Bienvenido a el juego "El Switcher"</h1>
        <Link to="https://drive.google.com/file/d/1NUPVsKq70hufAcZ-rBdqREBWOaAFtopx/view" target="_blank">
          <img src={gameLogo} className="game logo" alt="Game logo" />
        </Link>
      </div>
    );
  };
  
  export default Home;