import { useEffect, useState } from "react"

export default function Bd() {

    const [bancos, setBancos] = useState([])
    const [find, setFind] = useState('')


    useEffect(()=> {
        async function buscarDados(){ 
        const resultado = await fetch('https://guibranco.github.io/BancosBrasileiros/data/bancos.json')
        const resultadoFinal = await resultado.json()
        return resultadoFinal
      }   
        buscarDados().then( res => setBancos(res))
    })

    return(
        <div>
            <input type="text" value={find} onChange={ (e) => setFind(e.target.value)} />
            <h1>Buscando dados</h1>
            {bancos.map((bancos)=> {
                return(
                    <p key={bancos.id}>
                       {bancos.id} {bancos.LongName}
                    </p>
                )
            })}
        </div>
    )   
}
