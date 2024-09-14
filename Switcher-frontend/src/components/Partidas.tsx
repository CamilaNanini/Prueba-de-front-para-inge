import { Link } from "react-router-dom";

type Partida = {
  id: number;
  nombre: string;
};


function crearPartidas(cantidadPartidas:any) {
    const partidas: Partida[] = [];
  
    for (let i = 1; i <= cantidadPartidas; i++) {
      partidas.push({
        id: i,
        nombre: `Partida ${i}`
      });
    }
  
    return partidas;
  }

function Partidas () {
    const partidas: Partida[] = crearPartidas(9)
  return (
    <div>
      <h2>Unirse a una partida</h2>
      <ul>
        {partidas.map((partida) => (
          <li key={partida.id}>
            <Link className="redirigir" to={`/espera/${partida.id}`}> 
            <button> {partida.nombre} </button> 
            </Link>
          </li>
        
        ))}
      </ul>
    </div>
  );
};

export default Partidas;
