import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../Config/ConfigQuery';
import Imagen from '../Images/fotoCumple.jpg'


const Invitacion = (props) => {
    const palpitar = keyframes`
    0%{
        transform:  scale(0.7);
    }
    50%{
        transform:  scale(0.9);
    }
    100%{
        transform:  scale(0.7);
    }
`

const Card = styled.div`
    position: relative;
    margin: -80vh auto;
    height: 800px;
    width: 1000px;
    background-color: #fff;
    border-radius: 10px;
    display: ${props.ocultar};

    &::after{
        content: '';
        position: absolute;
        width: 5%;
        height: 100%;
        background-color: #0ff;
        top: -4%;
        left: -5%;
    }

    &::before{
        content: '';
        position: absolute;
        width: 5%;
        height: 100%;
        background-color: #f00;
        top: 4%;
        right: -5%;
    }

    @media ${device.mobileS} { 
        margin: 0 auto;
        height: 80px;
        width: 60px;
    }

    @media ${device.mobileXS} { 
        margin: 0 auto;
        height: 60px;
        width: 90px;
    }

    @media ${device.mobileM} {
        margin: 0 auto;
        height: 90px;
        width: 120px;
    }

    @media ${device.mobileXM} {
        margin: 0 auto;
        height: 100px;
        width: 160px;
    }

    @media ${device.mobileL} {      
        margin: 0 auto;
        height: 140px;
        width: 190px;
    }

    @media ${device.tablet} { 
        margin: 0 auto;
        height: 200px;
        width: 290px;
    }

  
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 40%;
    padding-top: 5%;
    padding-left: 5%;
    border-radius: 5%;
`
    
const Parrafo = styled.p`
    color: #000;
    font-family: cursive;
    font-size: 1.3em;

    @media ${device.mobileS} { 
        font-size: 0.3em;
    }
    @media ${device.mobileXS} { 
        font-size: 0.5em;
    }

    @media ${device.mobileM} {
        font-size: 0.7em;   
    }

    @media ${device.mobileXM} {
        font-size: 0.8em;   
    }

    @media ${device.mobileL} {      
        font-size: 0.8em;
    }

    @media ${device.tablet} { 
        font-size: 1em;
    }
    @media ${device.laptop} { 
        font-size: 1em;
    }
`

const Parrafo2 = styled.p`
    display: ${props.ocultar};
    margin-top: 10%;
    text-align: center;
    width: 100%;
    color: #fff;
    font-family: cursive;
    font-size: 2.2em;
    animation: ${palpitar} 2s linear infinite alternate;
    will-change: transform;
        
        @media ${device.mobileS} { 
            font-size: 0.8em;
        }

        @media ${device.mobileXS} { 
            font-size: 0.8em;
        }

        @media ${device.mobileM} {
            font-size: 1em;
        }

        @media ${device.mobileXM} {
            font-size: 1.1em;   
        }

        @media ${device.mobileL} {
            font-size: 1.2em;      
        }

        @media ${device.tablet} {
            font-size: 1.5em; 
        }
        @media ${device.laptop} {
            font-size: 2em; 
        }

`

const ContenidoFoto = styled.div`
    position: absolute;
    left: 0;
    width: 40%;
    height: 100%;
`

const ContenidoLetra = styled.div`
    position: absolute;
    right: 0;
    width: 60%;
    height: 100%;
`

    return (
        <div>
            <Card>
                <ContenidoFoto>
                    <Image src={Imagen}/>
                </ContenidoFoto>
                <ContenidoLetra>
                    <Parrafo>Este <strong>Sábado 18 de junio</strong> <br />
                        cumpliré 10 años y quisiera que estes festejándolo conmigo <br />
                        Nos divertiremos mucho!!!
                        <br />
                        <br />
                        La fiesta sera en <strong>Zona Puerto Mejillones, Calle 2, Nro 368  (Detrás del Colegio Marcelo Quiroga Santa Cruz)</strong> 
                        <br /> 
                    </Parrafo>   
                </ContenidoLetra>
            </Card>
            <Parrafo2>
                Te estaré esperando desde las 14:30 PM 
            </Parrafo2>
        </div>
    );
}

export default Invitacion;
