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
        height: 300px;
        width: 300px;
    }

    @media ${device.mobileM} {
        margin: 0 auto;
        height: 500px;
        width: 350px;
    }

    @media ${device.mobileL} {      
        margin: 0 auto;
        height: 600px;
        width: 350px;
    }

    @media ${device.tablet} { 
        margin: 0 auto;
        height: 700px;
        width: 800px;
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
            top: -30px;
            left: -5px;
        }

        @media ${device.mobileM} {
            width: 13px;
            height: 100%;
            top: -30px;
            left: -7px;
        }

        @media ${device.mobileL} {      
            width: 20px;
            height: 100%;
            top: -30px;
            left: -10px;
        }

        @media ${device.tablet} { 
            width: 40px;
            height: 100%;
            top: -30px;
            left: -20px;
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
            top: 20px;
            right: -5px;
        }

        @media ${device.mobileM} {
            width: 13px;
            height: 100%;
            top: 20px;
            right: -7px;
        }

        @media ${device.mobileL} {      
            width: 20px;
            height: 100%;
            top: 20px;
            right: -10px;
        }

        @media ${device.tablet} { 
            width: 40px;
            height: 100%;
            top: 20px;
            right: -20px;
        }
    }
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 350px;
    height: 400px;
    padding-top: 20px;
    padding-left: 20px;
    border-radius: 5%;

    @media ${device.mobileS} { 
        height: 50px;
        width: 70px;
    }

    @media ${device.mobileM} {
        height: 160px;
        width: 100px;
    }

    @media ${device.mobileL} {      
        height: 200px;
        width: 130px;  
    }

    @media ${device.tablet} { 
        height: 280px;
        width: 300px;
    }

`
    
const Parrafo = styled.p`
    color: #000;
    font-family: cursive;
    font-size: 1.3em;

    @media ${device.mobileS} { 
        font-size: 0.4em;
    }

    @media ${device.mobileM} {
        font-size: .5em;   
    }

    @media ${device.mobileL} {      
        font-size: .7em;
    }

    @media ${device.tablet} { 
        font-size: 1em;
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
            font-size: .5em;
            bottom: 50px;
        }

        @media ${device.mobileM} {
            font-size: .7em;
            bottom: 70px;    
        }

        @media ${device.mobileL} {
            font-size: .9em;      
            bottom: 100px;  
        }

        @media ${device.tablet} {
            font-size: 1em; 
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
