function Titulo({nome, paragrafo}) {
    return (
    <div>
        <h1>Oi eu sou {nome ? nome : "Fulano"} </h1>
        <p>Lorem Ipsum Dolor</p>
         {
            paragrafo ?
            <p> My names</p>
            :
            <p>Nada</p>
         }
         
        
    </div>
    )
}

export default Titulo