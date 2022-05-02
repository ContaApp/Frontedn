import { Container, Row, Col , Button} from 'react-bootstrap';
import Image from 'next/image';
import {useRouter} from 'next/router';

import imageZero from '../public/assets/images/landing/00-img-landing.svg'
import imageOne from '../public/assets/images/landing/01-img-landing.svg';
import imageTwo from '../public/assets/images/landing/02-img-landing.svg';
import imageThree from '../public/assets/images/landing/03-img-landing.svg'
import imageFour from '../public/assets/images/landing/04-img-landing.svg'


import Layout from '../components/utilities/Layout';
import LogoWhite from '../components/utilities/LogoWhite';
import LogoBlack from '../components/utilities/LogoBlack';

import Hero from '../components/landing/Hero-landing';
import WhiteCardLanding from '../components/landing/WhiteCard-landing';
import BlackCardLanding from '../components/landing/BlackCard-landing';
import ButtonLanding from "../components/landing/Button-landing";
import LottieLanding from "../components/landing/Lottie-landing";

export default function Home() {
  const router = useRouter();
  return (
    <Layout >
      <div className="div-container">
      <Container >
        <Row>
          <section className="section-hero"> <Hero>
            <Row>
              <Col sm={12} md={6}>
                <div className="hero">
                  <h2 className="text-hero">Realiza el <span className="span-primary-hero">cálculo </span> de tus impuestos</h2>
                  <p className="text-hero-span"><span className="span-secundary-hero">¡Con precisión y autonomía!, </span><br></br><span className="span-secundary-hero">Calculos para personas fisicas con actividad profesional y empresarial.</span></p>
                  <div className="container-hero-button-landing"><Button className="btn-landing" onClick={()=> router.push('/register')}><span className="text-btn-landing">UNETE A tuContapp</span></Button></div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="div-lottie-landing">
                  <LottieLanding id="lottieLanding"  alt="Unete a tuContapp" /></div>
              </Col></Row>
          </Hero>
          </section>
        </Row>
        <Row className="section-one">

           
          <Col sm={12} md={6}>
            <div className="div-imagen-num" >
              <Image id="imageOne" src={imageOne} alt="Imagen tuContapp" />
            </div >
          </Col>
          <Col sm={12} md={6} >
            <div className="div-card-text">
              <WhiteCardLanding>
                <p className="text-card-landing">
                  <span className="span-primary-card-landing">Registrate,</span>
                  <span className="span-secundary-card-landing"> solo necesitas tu nombre, RFC, correo y crear tu contraseña. </span>
                </p>
              </WhiteCardLanding>
            </div>
          </Col>
         
        </Row>
        <Row className="section-two">
         
            <Col sm={12} md={6} >
            <div className="div-card-text">
              <WhiteCardLanding>
                <p className="text-card-landing">
                  <span className="span-primary-card-landing">Ingresa</span>
                  <span className="span-secundary-card-landing"> tus números, cobranza y gastos, así como tus desgloces de IVA. </span>
                </p>
              </WhiteCardLanding>
              </div>
            </Col>
            <Col sm={12} md={6} >
            <div className="div-imagen-num">
              <Image id="imageTwo" src={imageTwo} alt="Imagen tuContapp" />
              </div>
            </Col>
     
        </Row>
        <Row className="section-three">
          
            <Col sm={12} md={6} >
            <div className="div-imagen-num">
              <Image id="imageThree" src={imageThree} alt="Imagen tuContapp" />
              </div >
            </Col>
            <Col sm={12} md={6} >
              <div className="div-card-text">
                <WhiteCardLanding>
                  <p className="text-card-landing">
                    <span className="span-primary-card-landing">Declara</span>
                    <span className="span-secundary-card-landing"> paso a paso te ayudaremos a que tu mismo puedas presentar de manera correcta tu declaración. </span>
                  </p>
                </WhiteCardLanding>
              </div>
            </Col>
         
        </Row>
     
      </Container>
      <Row className="row-container-black-card">
          <section className="section-four">
            <BlackCardLanding>
              <Row>
                <Col sm={12} md={6} >
                  <div className ="div-datos-blackcard"> 
                    <LogoWhite />
                    <p className="text-span"><span className="span-primary-blackcard">Autonomía </span> 
                    <span className="span-secundary-blackcard">en tus declaraciones</span></p>
                    <p className="text-p">¡Presenta tus declaraciones de manera correcta!</p>
                    <Button className="btn-landing" onClick={()=> router.push('/register')}>
                      <span className="text-btn-landing">UNETE A tuContapp</span>
                    </Button>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div>
                    <Image id="imageFour" src={imageFour} alt="Unete a tuContapp" /></div>
                </Col></Row>
            </BlackCardLanding>
          </section >
        </Row>
      </div>
    </Layout>
  )
}
