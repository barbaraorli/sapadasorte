import React from 'react'
import imgLogo from '../../assets/Sapa da sorte.png'
import '../Logo/style.css'

const Logo = () => {
    return (
        <div className='logostyle'>
            <img className='imgstyle' src={imgLogo} alt='Logo' />
            <p>Sapa da Sorte</p>
        </div>
    )
}

export default Logo