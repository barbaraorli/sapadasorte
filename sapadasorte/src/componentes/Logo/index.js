import React from 'react'
import imgLogo from '../../assets/Sapa da sorte.png'
import '../Logo/style.css'

const Logo = () => {
    return (
        <div className='logostyle'>
            <img className='imgstyle' src={imgLogo} alt='Logo' />
        </div>
    )
}

export default Logo