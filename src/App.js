import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import './App.css';
import Invitacion from './Components/Invitacion';
import LogoTikTok from './Components/LogoTikTok';
import { device } from './Config/ConfigQuery';
import LogoT from './Images/logoTikTok.jpg'

function App() {

  const [mostrar, setMostrar] = useState("none");
  const [ocultar, setOcultar] = useState("block");

  const el = useRef(null)

  const typed = useRef(null)

  useEffect(() => {
    const option = {
      strings: [
        'TikTok',
        '',
        'Hola!!!',
        'Te invito a festejar mi cumpleaños',
        ''
      ],
      typeSpeed: 150,
      showCursor: false,
      loop: false
    }
    typed.current = new Typed(el.current, option)
    return () => {
      typed.current.destroy()
    };
}, []);

setTimeout(() => {
  setMostrar("block")
}, 14000);

setTimeout(() => {
  setOcultar("none")
}, 2000);

const LogoI = styled.img`
  width: 100px;
  height: 100px;
  display: none;

  @media ${device.mobileS} { 
      display: ${ocultar};
  }

  @media ${device.mobileXS} { 
      display: ${ocultar};
  }

  @media ${device.mobileXM} {
      display: ${ocultar};
  }
  @media ${device.mobileM} {
      display: ${ocultar};
  }

  @media ${device.mobileL} {
      display: ${ocultar};
  }
  
  @media ${device.tablet} {
      display: ${ocultar};
  }
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  display: none;

  @media ${device.mobileS} { 
      display: ${mostrar};
  }
  @media ${device.mobileXS} { 
      display: ${mostrar};
  }
  @media ${device.mobileXM} {
      display: ${mostrar};
  }
  @media ${device.mobileM} { 
      display: ${mostrar};
  }

  @media ${device.mobileL} {
      display: ${mostrar};
  }
  
  @media ${device.tablet} {
      display: ${mostrar};
  }
`
  return (
    <div className="App">
      <header className="App-header">
          <LogoTikTok ocultar={ocultar} arriba="100px" izquierda="-100px" derecha="0" abajo="100px"/>
          <LogoI src={LogoT} />
          <h1><span ref={el} /></h1>
          <LogoTikTok ocultar={mostrar} arriba="-100px" abajo="200px" izquierda="70%" derecha="0"/>
          <LogoTikTok ocultar={mostrar} arriba="-100px" izquierda="0" derecha="72%" abajo="200px"/>
          <Logo src={LogoT}/>
          <Invitacion ocultar={mostrar}/>
          <Logo src={LogoT}/>
      </header>
    
    </div>
  );
}

export default App;
