import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../Config/ConfigQuery';

const LogoTikTok = (props) => {

const tiktok = keyframes`
  0%, 100%{
    text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
  }
  25%{
    text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
  }
  50%{
    text-shadow: 1.5px -1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
  }
  75%{
    text-shadow: -1.5px 1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
  }
`

const TikTok = styled.div`
    display: ${props.ocultar};
    margin: ${props.arriba} ${props.izquierda} ${props.abajo} ${props.derecha};
    width: 37px;
    height: 218px;
    background-color: #fff;
    box-shadow: 11px 10px 0 0 #f00;
    filter: drop-shadow(-10px -10px 0 #0ff);
    position: relative;
    animation: ${tiktok} 0.5s linear infinite;
    cursor: pointer;

    @media ${device.mobileS} { 
      display: none;
   }
   @media ${device.mobileXS} { 
      display: none;
   }

    @media ${device.mobileM} {
      display: none;
    }

    @media ${device.mobileXM} {
      display: none;
    }

    @media ${device.mobileL} {
      display: none;
    }

    @media ${device.tablet} { 
      display: none;
    }

    &::after{
        content: '';
        position: absolute;
        border: 37px solid #fff;
        border-top-color: transparent;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transform: rotate(45deg);
        filter: drop-shadow(16px 0 0 #f00);
        top: 123px;
        left: -137px;
    }

    &::before{
        content: '';
        position: absolute;
        border: 30px solid transparent;
        border-bottom-color: #fff;
        width: 140px;
        height: 140px;
        border-radius: 100%;
        transform: rotate(45deg);
        filter: drop-shadow(14px 0 0 #f00);
        top: -100px;
        right: -175;
    }
`
    return (
        <TikTok />
    );
}

export default LogoTikTok;
