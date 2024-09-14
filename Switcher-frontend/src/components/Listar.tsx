import axios from "axios";
import { useState } from "react";

function Listar() {
  const [info, setInfo] = useState(""); // Estado para almacenar la información

  const mostrarinfo = () => {
    axios.get(`http://127.0.0.1:8000/`)
      .then((response) => {
        setInfo(response.data.message); // Almacenar el mensaje en el estado
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  return (
    <div>
      <h1>Se puede obtener info del back</h1>
      <button onClick={mostrarinfo}>Back</button>
      {info && <p>{info}</p>} {/* Muestra el mensaje si existe */}
    </div>
  );
}

export default Listar;