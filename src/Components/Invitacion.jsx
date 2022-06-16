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
    margin: 0 auto;
    height: 800px;
    width: 1000px;
    background-color: #fff;
    border-radius: 10px;
    display: ${props.ocultar};

    @media ${device.mobileS} { 
        margin: 0 auto;
        height: 100px;
        width: 130px;
    }

    @media ${device.mobileXS} { 
        margin: 0 auto;
        height: 150px;
        width: 210px;
    }

    @media ${device.mobileM} {
        margin: 0 auto;
        height: 250px;
        width: 280px;
    }

    @media ${device.mobileXM} {
        margin: 0 auto;
        height: 250px;
        width: 300px;
    }

    @media ${device.mobileL} {      
        margin: 0 auto;
        height: 270px;
        width: 360px;
    }

    @media ${device.tablet} { 
        margin: 0 auto;
        height: 400px;
        width: 650px;
    }

    &::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 100%;
        background-color: #0ff;
        top: -30px;
        left: -20px;

        @media ${device.mobileS} { 
            width: 4px;
            height: 100%;
            top: -10px;
            left: -4px;
        }

        @media ${device.mobileXS} { 
            width: 10px;
            height: 100%;
            top: -10px;
            left: -5px;
        }

        @media ${device.mobileM} {
            width: 12px;
            height: 100%;
            top: -12px;
            left: -8px;
        }

        @media ${device.mobileXM} {
            width: 15px;
            height: 100%;
            top: -15px;
            left: -10px;
        }

        @media ${device.mobileL} {      
            width: 20px;
            height: 100%;
            top: -15px;
            left: -10px;
        }

        @media ${device.tablet} { 
            width: 20px;
            height: 100%;
            top: -20px;
            left: -15px;
        }

    }

    &::before{
        content: '';
        position: absolute;
        width: 40px;
        height: 100%;
        background-color: #f00;
        top: 20px;
        right: -20px;

        @media ${device.mobileS} { 
            width: 4px;
            height: 100%;
            top: -10px;
            left: -4px;
        }

        @media ${device.mobileXS} { 
            width: 10px;
            height: 100%;
            top: -10px;
            right: -5px;
        }

        @media ${device.mobileM} {
            width: 12px;
            height: 100%;
            top: -12px;
            right: -8px;
        }

        @media ${device.mobileXM} {
            width: 15px;
            height: 100%;
            top: -15px;
            right: -10px;
        }

        @media ${device.mobileL} {      
            width: 20px;
            height: 100%;
            top: -15px;
            right: -10px;
        }

        @media ${device.tablet} { 
            width: 20px;
            height: 100%;
            top: -20px;
            right: -15px;
        }
    }
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    padding-top: 20px;
    padding-left: 20px;
    border-radius: 5%;

`
    
const Parrafo = styled.p`
    color: #000;
    font-family: cursive;
    font-size: 1.3em;

    @media ${device.mobileS} { 
        font-size: 0.7em;
    }
    @media ${device.mobileXS} { 
        font-size: 0.9em;
    }

    @media ${device.mobileM} {
        font-size: 1em;   
    }

    @media ${device.mobileXM} {
        font-size: 1.2em;   
    }

    @media ${device.mobileL} {      
        font-size: 1.5em;
    }

    @media ${device.tablet} { 
        font-size: 1.8em;
    }
`

const Parrafo2 = styled.p`
    position: absolute;
    text-align: center;
    width: 100%;
    color: #000;
    font-family: cursive;
    font-size: 2.2em;
    bottom: 10px;
    animation: ${palpitar} 2s linear infinite alternate;
    will-change: transform;
        
        @media ${device.mobileS} { 
            font-size: 0.8em;
            bottom: 50px;
        }

        @media ${device.mobileXS} { 
            font-size: 1em;
            bottom: 50px;
        }

        @media ${device.mobileM} {
            font-size: 1.2em;
            bottom: 70px;    
        }

        @media ${device.mobileXM} {
            font-size: 1.5em;
            bottom: 70px;    
        }

        @media ${device.mobileL} {
            font-size: 1.9em;      
            bottom: 100px;  
        }

        @media ${device.tablet} {
            font-size: 2.2em; 
            bottom: 100px;   
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
                <Parrafo2>
                Te estaré esperando desde las 14:30 PM 
                </Parrafo2>
            </Card>
        </div>
    );
}

export default Invitacion;
