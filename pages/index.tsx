import styled from 'styled-components'
import Image from 'next/image'
import logoImg from '../assets/logo.png'
import profilePic from '../assets/img.png'
import aboutImg from '../assets/about_img.png'
import heroImg from '../assets/hero_img.png'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import {NavBar} from "../components/NavBar";
import {AppStore} from "../AppStore";
import {Section} from "../components/Section";
import {Hero} from "../components/Hero";

const SectionContainer = styled.div`
  display: grid;
  //padding: 8px;
  grid-gap: 8px;
  grid-template-columns: auto auto;
`

const ButtonContainer = styled.div`
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding: 14px 20px;
  border-radius: 6px;
  background-image: linear-gradient(119deg, #00c2ff, #01e8f7);
  box-shadow: 0 2px 2px 0 rgb(32 35 44 / 15%);
  -webkit-transition: .3s cubic-bezier(.409, .237, .25, 1);
  transition: .3s cubic-bezier(.409, .237, .25, 1);
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
`

export interface HomeProps {
    store: AppStore
}

export default function Home(props: HomeProps) {
    return <div>
        <NavBar/>

        <Hero/>
        <Section store={props.store}
                 title={'700 Hospitals and HealthCare Centers. Nestlé, BBraun one of the Us Partners..'}
                 direction={1}
                 img={<Image src={aboutImg} width="3824" height="1900"/>}
                 description={<div>
                     Alef-Tav Soft es un Software avanzado de última generación implementado en Farmacia Hospitalaria, Centros de Diagnóstico por la Imagen, y preparándose para Servicios de Cardiología, y Nutrición Clínica.
                     <p/>
                     Surge de una base actual con más de 700 Hospitales y Centros de HealthCare distribuidos por diferentes continentes, y partners como Nestlé, BBraun Medical y de los más importantes Hospitales en España como Hospital Universitario Niño Jesus, o MedicaSur en Mexico, entre otros.

                 </div>}/>
        <Section store={props.store} title={'Totalmente integrable e interconectable con los sistemas ya existentes en cada Centro.'} direction={-1} img={<Image src={profilePic} width="3824" height="1900"/>}
                 description={<div>
                     Totalmente desarrollado para ser accedido por navegadores, y accesible por los múltiples dispositivos móviles, es completamente integrable e interconectable con los sistemas informáticos ya existentes en los Hospitales o Centros de Médicos o de HealthCare.
                     <p/>
                     Alef-Tav Soft está creado totalmente para ser multiempresa, multidioma, multicontexto, y multirecursos.

                     {/*<div>*/}
            {/*    As it is totally modular, it can be adapted to all types of Hospitals and health centers, regardless of their size or internal structure.*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    We develop and adapt to the particular needs of each client, making every wish come true. Everything is possible in the hands of Alef Tav Software!*/}
            {/*    You should not adapt to the Software, it is Alef-Tav and the entire development team that fully adapts to your needs in an agile and efficient way.*/}
            {/*</div>*/}

            {/*<div>Alef-Tav is constantly integrating and adding new modules that provide us with the needs of users, including:</div>*/}
            {/*<ul>*/}
            {/*    <li>- Patient Management</li>*/}
            {/*    <li>- Clinic history</li>*/}
            {/*    <li>- Administrative and Medical Image Manager</li>*/}
            {/*    <li>- Resource Planning Agenda</li>*/}
            {/*    <li>- Connection with various accounting platforms</li>*/}
            {/*</ul>*/}
        </div>}/>
        {/*<Section store={props.store} title={'Integrations'} direction={1} description={'Description 3'} img={null}/>*/}
        {/*<Section store={props.store} title={'clients'} direction={-1} description={'Description 4'}/>*/}
        {/*<Section store={props.store} title={'Contact Us'} direction={1} description={'Description 5'}/>*/}
        {/*<Section store={props.store} title={'Languages'} direction={-1} description={'Description 6'}/>*/}
    </div>
}
