import React from 'react'
import '../Sorte/style.css'


const Sorte = (props) => {
    return (
       
    <button onClick={props.handleClick} src={props.imagem}>{props.nome}</button>
        
    )
}

export default Sorte