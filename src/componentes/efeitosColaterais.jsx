import { useEffect, useState } from "react";

export default function EfeitosColaterais() {
  const MinhaLista = [
    { id: "1", Nome: "Ana", idade: "22", sexo: " F" },
    { id: "2", Nome: "Pedro", idade: "2 ", sexo: "M " },
    { id: "3", Nome: "Luna", idade: "16 ", sexo: "F " },
  ];

  const [clientes, setClientes] = useState(MinhaLista);
  const [pesquisa, setPesquisa] = useState("");
  useEffect(() => {
    const NovaLista = MinhaLista.filter((item) => {return [item.id, item.Nome].includes(pesquisa)})
    setClientes(NovaLista) 
  });

  return (
    <div>
      <h1>Clientes: efeitos colaterais:</h1>
      <input
        type="text" placeholder="Digite o Id ou o Nome"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      {clientes.map((item) => {
        return (
          <div key={item.id}>
            <h4>{`Cliente: Nome: ${item.Nome}, Idade: ${item.idade}, Genero: ${item.sexo}.`}</h4>
          </div>
        );
      })}
    </div>
  );
}
