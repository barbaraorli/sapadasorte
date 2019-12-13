import React from 'react'
import '../Sorte/style.css'
import imgTrevo from '../../assets/clover.png'

const Sorte = () => {
    return (
        <div className='sortestyle'>
            <h2>Sorte do dia</h2>
            <p>Aperta o botão sem medo de ser feliz</p>
            <button>{imgTrevo}</button>
        </div>
    )
}

export default Sorte