import { useParams } from "react-router-dom";

function Espera () {
  let { id_partida } = useParams<{id_partida:string}>();  
  return (
    <div>
      <h1>Esperando a otros jugadores de la sala {id_partida}</h1>
    </div>
  );
};

export default Espera;
