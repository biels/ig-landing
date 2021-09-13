import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../assets/logo.png'
import profilePic from '../assets/img.png'
import aboutImg from '../assets/about_img.png'
import integrationsImg from '../assets/integrations_img.png'
import clientsImg from '../assets/clients_img.png'
import heroImg from '../assets/hero_img.png'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer";
import React, {useEffect} from "react";
import {NavBar} from "../components/NavBar";
import {AppStore} from "../AppStore";
import {Section} from "../components/Section";
import {Hero} from "../components/Hero";
import {Footer} from '../components/Footer'
import {useStore} from "../utils/utils";
import {FormattedMessage, useIntl, injectIntl} from "react-intl";
import Head from 'next/head'
import {useRouter} from "next/router";


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
    let store = useStore()
    let intl = useIntl()
    let router = useRouter()
    return <div>
        <Head>
            <title>Alef-Tav ({router.locale})</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar/>
        <Hero/>
        <Section id={'about'} store={props.store}
                 title={<FormattedMessage
                     description={'section 1 title'}
                     defaultMessage={`
                     <p>
                        Alef Tav Soft, the new generation management software for Hospitals and HealthCare Centers
                    </p>
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />}
                 direction={1}
                 img={<Image src={aboutImg} width="3824" height="1900"/>}
                 description={<FormattedMessage
                     description={'section 1 description'}
                     defaultMessage={`
                     <p>
        Alef Tav Soft is the advanced solution that adapts to all your needs for you to easily manage your patients  administrative and healthcare information – anytime, anywhere.
    </p>
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />}/>
        <Section id={'product'} store={props.store}
                 title={<FormattedMessage
                     description={'section 2 title'}
                     defaultMessage={`
                     <p>
                        Current base of 700 Hospitals and Health Centers; and some partners such as Nestlé Spain, BBraun Medical, Hospital Universitario Infantil Niño Jesús (Madrid), Hospital Universitario Gregorio Marañón (Madrid), Hospital Universitario Central Asturias (Oviedo), Hospital Médica Sur (México).
                    </p>
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />}
                 direction={-1} img={<Image src={profilePic} width="3824" height="1900"/>}
                 description={<FormattedMessage
                     description={'section 2 description'}
                     defaultMessage={`
                        <p>
                            Alef Tav Soft is an advanced next generation Software implemented in Hospital Pharmacy, Diagnostic Imaging Centers, and preparing for Cardiology Services, and Clinical Nutrition.
                        </p>
                        <p>
                            It arises from a current base with more than 700 Hospitals and Health Centers distributed throughout Europe and Latin America, and some partners such as Nestlé Spain, BBraun Medical and some of the most important Hospitals in Spain such as Hospital Universitario Infantil Niño Jesús, Hospital Universitario Gregorio Marañón, Central Asturias University Hospital, or Southern Medical Hospital in Mexico, among others.
                        </p>
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />}/>
        <Section id={'integrations'} store={props.store} title={<FormattedMessage
            description={'section 3 title'}
            defaultMessage={`
                     <p>
                        Alef Tav Soft is fully integrable and interconnectable with existing computer systems in Hospitals or Health Centers
                     </p>
`}
            values={{
                p: name => <p>{name}</p>,
            }}
        />} direction={1}

                 description={<FormattedMessage
                     description={'section 3 description'}
                     defaultMessage={`
                     <p>
                        Fully developed to be accessed by browsers, and accessible by multiple mobile devices, it is fully integrable and interconnectable with existing computer systems in Hospitals or Health Centers.
                     </p>
                     <p>
                        Alef Tav Soft is totally created to work with a unified, multi-company, multi-language, multi-context, and multi-resource database, and accessing either through cloud servers or within the hospital itself.
                     </p>
    
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />} img={<Image src={integrationsImg} width="3824" height="1900"/>}/>
        <Section id={'clients'} store={props.store} title={<FormattedMessage
            description={'section 4 title'}
            defaultMessage={`
                     <p>
                        Alef Tav Soft is designed to be Modular and fully Adaptable for any type of Hospital and Health Center
                     </p>
`}
            values={{
                p: name => <p>{name}</p>,
            }}
        />} direction={-1}
                 description={<FormattedMessage
                     description={'section 4 description'}
                     defaultMessage={`
                     <p>
                        As it is totally modular, it can be adapted to all types of Hospitals and Health Centers, regardless of size or internal structure.
                     </p>
                     <p>
                        Alef Tav Soft is incorporating new modules and functionalities in a very agile way that are providing the constant needs of the sector and users.
                     </p>
`}
                     values={{
                         p: name => <p>{name}</p>,
                     }}
                 />} img={<Image src={clientsImg} width="3824" height="1900"/>}/>
        <Section id={'contact-us'} store={props.store} title={<FormattedMessage
            description={'section 5 title'}
            defaultMessage={`
                     <p>
                        Some of the existing modules:
                     </p>
`}
            values={{
                p: name => <p>{name}</p>,
            }}
        />} direction={1}
                 description={<FormattedMessage
                     description={'section 5 description'}
                     defaultMessage={`
                     <ul>
                        <li>- Patient Management</li>
                        <li>- Adaptable clinical history</li>
                        <li>- Administrative and Medical Image Manager</li>
                        <li>- Resource Planning Agenda</li>
                        <li>- Billing of multiple resources and services</li>
                        <li>- Connection with various accounting platforms</li>
                     </ul>
`}
                     values={{
                         p: name => <p>{name}</p>,
                         ul: name => <ul>{name}</ul>,
                         li: name => <li>{name}</li>,
                     }}
                 />} img={<Image src={profilePic} width="3824" height="1900"/>}/>
        <Footer/>
    </div>
}
