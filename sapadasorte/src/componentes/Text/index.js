import React from 'react'
import '../Text/style.css'
import Ferradura from '../Ferradura/index'

const Text = () => {
    return(
        <div className='textStyle'>
            <h2>Bem vinda ao Sapa da Sorte!</h2>
            <p>A gente sabe que a vida de sapatão não é la das mais facéis. O objetivo aqui é tirar um conselhinho do dia para ajudar a manter o equilibrio</p>
            <Ferradura />
            <p>Entenda, a gente nunca vai falar para voce ligar para sua ex. Queremos ajudar, não fazer voce se afundar num brejo de arrependimento e vergonha.</p>
        </div>
    )
}

export default Text