import React from 'react';
import Nav from '../src/componentes/Nav/index'
import Logo from '../src/componentes/Logo/index'
import Text from '../src/componentes/Text/index'
import Content from '../src/componentes/Content/index'
import Sorte from '../src/componentes/Sorte/index'
import Footer from '../src/componentes/Footer/index'

import './App.css';

function App() {
  return (
    <div className='landingpagestyle'>
      <Nav />
      <Logo/>
      <Text/>
      <Content />
      <Sorte/>
      <Footer/>
    </div>
  )
}

export default App;
