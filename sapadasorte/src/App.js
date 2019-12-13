import React from 'react';

import Logo from '../src/componentes/Logo/index'
import Text from '../src/componentes/Text/index'
import Sorte from '../src/componentes/Sorte/index'
import Footer from '../src/componentes/Footer/index'
import  listaFrases  from '../src/service/listaFrases'
import Content from '../src/componentes/Content/index'

import imgTrevo from '../src/assets/clover.png'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      sorte: []
    }
  }



  tiraSorte = () => {
    this.setState({
      sorte: (parseInt(Math.random() * listaFrases.length))
    })
  }




  render() {
console.log(listaFrases);

    return (
      <div className='landingpagestyle container'>
        <section>
          <div className='navstyle'>
            <h1>Sapa da Sorte</h1>
          </div>
        </section>
        <section>
          <Logo/>
        </section>
        <section>
          <Text />
          <Content />
        </section>
        <section>
          <div className='sortestyle'>
            <h2>Sorte do dia</h2>
            <p>Aperta o botão sem medo de ser feliz</p>
            <Sorte

              handleClick={this.tiraSorte}
              imagem={imgTrevo}
              nome='Sorteie'
            />
            <div>
              <h3>{listaFrases[this.state.sorte]}</h3>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    )
  }
}

export default App;
