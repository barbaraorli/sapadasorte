import React from 'react'
import contentImg from '../../assets/clover.png'
import '../Content/style.css'

const Content = () => {
    return(
        <div className='imgStyle'>
        <img className='contentstyle' src={contentImg} alt='Trevo'></img>
        </div>
    )
}

export default Content