import React from 'react';

import Logo from '../src/componentes/Logo/index'
import Text from '../src/componentes/Text/index'
import Content from '../src/componentes/Content/index'
import Sorte from '../src/componentes/Sorte/index'
import Footer from '../src/componentes/Footer/index'

import './App.css';

function App() {
  return (
    <div className='landingpagestyle'>
      <section>
        <div>
          <h1>Sapa da Sorte</h1>
        </div>
      </section>
      <section>
        <Logo />
        <Text />
      </section>
      <section>
        <Content />
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
