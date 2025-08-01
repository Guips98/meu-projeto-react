import { useState } from "react";
import  styles  from "/src/button.module.css";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  if (contador >= 20) {
    return (
      <div className="container">
        <h1>Meu Contador</h1>
        <h3>DANI E GAY</h3>
        <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      </div>
    );
  } else if(contador <= -20) {
    return (
      <div className="container">
        <h1>Meu Contador</h1>
        <h3>Valor minimo atingido -20</h3>
        <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Meu Contador</h1>
        <h3>{contador}</h3>
        <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
        <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
      </div>
 ) }
}
