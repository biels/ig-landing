import React, {useState, useEffect, useContext} from "react";
import Link from 'next/link'
import styled from 'styled-components'
import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import logoImg from "../assets/Alef-Tav-Logo-Web.svg";
import {useInView} from "react-intersection-observer";
import {FormattedMessage} from "react-intl";


const Container = styled.div`
  display: grid;
  background-color: rgba(255, 255, 255, 0);
  //filter: blur(2px);
  //feGaussianBlur: 15;
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
const LogoContainer = styled.div`
  display: grid;
  padding-left: 16px;
  padding-right: 8px;
`

export interface NavBarProps {
}

export const NavBar = (props: NavBarProps) => {

    const {ref: ref, inView: inView, entry: navEntry} = useInView({threshold: 0,});

    const controls = useAnimation()

    useEffect(() => {
        if (!inView) controls.start(i => ({
            y: [-56, 0],
            transition: {ease: 'anticipate', duration: 0.5}
        }))
    }, [inView])

    return <Container ref={ref}>
        {!inView && <div style={{height: '56px'}}/>}
        <motion.nav custom={0} className={`navbar has-shadow ${!inView ? 'is-fixed-top' : ''}`}
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(2px)'}} role="navigation"
                    aria-label="main navigation"
                    animate={controls}
        >
            <div className="navbar-brand">
                <LogoContainer>
                    <Image src={logoImg}/>
                </LogoContainer>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href="#about" passHref>
                        <a className="navbar-item">
                            <FormattedMessage defaultMessage="About"/>
                        </a>
                    </Link>
                    <Link href="#product" passHref>
                        <a className="navbar-item">
                            <FormattedMessage defaultMessage="Product"/>
                        </a>
                    </Link>
                    <Link href="#integrations" passHref>
                        <a className="navbar-item">
                            <FormattedMessage defaultMessage="Integrations"/>
                        </a>
                    </Link>
                    <Link href="https://www.medicalione.com/es/clientes/" passHref>
                        <a className="navbar-item">
                            <FormattedMessage defaultMessage="Clients"/>
                        </a>
                    </Link>
                    <Link href="https://www.medicalione.com/es/contactar/" passHref>
                        <a className="navbar-item">
                            <FormattedMessage defaultMessage="Contact us"/>
                        </a>
                    </Link>
                    <div className="navbar-item">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Languages
                            </a>

                            <div className="navbar-dropdown">
                                <Link href="" locale="en" passHref>
                                    <a className="navbar-item">
                                        <span>English</span>
                                    </a>
                                </Link>
                                <Link href="" locale="es" passHref>
                                    <a className="navbar-item">
                                        <span>Español</span>
                                    </a>
                                </Link>
                                <Link href="" locale="ca" passHref>
                                    <a className="navbar-item">
                                        <span>Català</span>
                                    </a>
                                </Link>
                                <Link href="" locale="sv" passHref>
                                    <a className="navbar-item">
                                        <span>Svenska</span>
                                    </a>
                                </Link>
                                {/*<hr className="navbar-divider"/>*/}
                            </div>
                        </div>
                    </div>

                    {/*<div className="navbar-item has-dropdown is-hoverable">*/}
                    {/*    <a className="navbar-link">More</a>*/}

                    {/*    <div className="navbar-dropdown">*/}
                    {/*        <a className="navbar-item">About</a>*/}
                    {/*        <a className="navbar-item">Jobs</a>*/}
                    {/*        <a className="navbar-item">Contact</a>*/}
                    {/*        <hr className="navbar-divider"/>*/}
                    {/*        <a className="navbar-item">Report an issue</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link href={'https://www.medicalione.com/es/contactar/'}>
                                <ButtonContainer className="button is-primary"><strong>Contact
                                    us</strong></ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    </Container>
}
