import { useEffect, useState } from "react";
export default function BuscandoDados() {
  const [tarefas, setTarefas] = useState([]);
  useEffect(() => {
    async function buscar() {
      const resultado = await fetch(
        "https://guibranco.github.io/BancosBrasileiros/data/bancos.json"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscar().then((res) => setTarefas(res));
  });

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa.id}>{tarefa.LongName}</li>;
        })}
      </ol>
    </div>
  );
}
