export default function MinhaLista() {
  const MinhaLista = [
    { id: "1", Nome: "Ana", idade: "22", sexo: " F" },
    { id: "2", Nome: "Pedro", idade: "2 ", sexo: "M " },
    { id: "3", Nome: "Luna", idade: "16 ", sexo: "F " },
  ];
  
  return MinhaLista.map((item) => {
    return (
      <div key={item.id}>
        <h4>{`Cliente: Nome:${item.Nome}`}</h4>
      </div>
    );
  });
}
