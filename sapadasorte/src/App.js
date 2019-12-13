import React from 'react';

import Logo from '../src/componentes/Logo/index'
import Text from '../src/componentes/Text/index'
import Sorte from '../src/componentes/Sorte/index'
import Footer from '../src/componentes/Footer/index'

import './App.css';

function App() {
  return (
    <div className='landingpagestyle container'>
      <section>
        <div className='navstyle'>
          <h1>Sapa da Sorte</h1>
        </div>
      </section>
      <section>
        <Logo />
        <Text />
      </section>
      <section>
        <Sorte />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App;
