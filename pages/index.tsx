import styled from 'styled-components'
import Image from 'next/image'
import logoImg from '../assets/logo.png'
import profilePic from '../assets/img.png'
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {NavBar} from "./components/NavBar";

const HeroContainer = styled.div`
  display: grid;
  padding: 8px;
  grid-template-columns: auto auto;
`
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

export default function Home() {

    const { ref: navRef, inView: navInView, entry: navEntry } = useInView({threshold: 0,});
    const { ref: aboutRef, inView: inView, entry: entry } = useInView({threshold: 0,});
    const { ref: productSectionRef, inView: productSectionInView, entry: productSectionEntry } = useInView({threshold: 0,});
    const { ref: integrationsSectionRef, inView: integrationsSectionInView, entry: integrationsSectionEntry } = useInView({threshold: 0,});
    const { ref: clientsSectionRef, inView: clientsSectionInView, entry: clientsSectionEntry } = useInView({threshold: 0,});
    const { ref: contactUsSectionRef, inView: contactUsSectionInView, entry: contactUsSectionEntry } = useInView({threshold: 0,});
    const { ref: languagesSectionRef, inView: languagesSectionInView, entry: languagesSectionEntry } = useInView({threshold: 0,});


    let getSectionAnimation = (direction) => {
        return {x: [window?.innerWidth * direction, 0], opacity: [0, 1]}
    }
    return <div>
        <NavBar navRef={navRef} inView={navInView}/>

        <section className="hero has-background-white-ter">
            <HeroContainer>
                <div>
                    <div className="hero-body">
                        <p className="title is-1">
                            MedicalOne RIS
                        </p>
                        <p className="subtitle is-4">
                            Optimize your radiology center
                        </p>
                    </div>
                </div>
                <img className="hero_absolute"
                     src="https://assets.website-files.com/5e997428d0f2eb13a90aec8c/611bb155313faf953b1238a0_Header_banner.png"
                     width="743" alt="Aragon Project Mockup" sizes="(max-width: 991px) 100vw, 73vw"
                     data-w-id="caadfaae-8c47-fb7c-0941-8aa15cfefa08"
                     loading="lazy"
                     srcSet="https://assets.website-files.com/5e997428d0f2eb13a90aec8c/611bb155313faf953b1238a0_Header_banner-p-800.png 800w, https://assets.website-files.com/5e997428d0f2eb13a90aec8c/611bb155313faf953b1238a0_Header_banner.png 1534w"/>
            </HeroContainer>
        </section>
        <section ref={aboutRef} style={{minHeight: '440px'}} className="section">
            {inView && <motion.div className="columns"
                         animate={getSectionAnimation(1)}
                         transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <div>
                        <h1 className="title">About</h1>
                        <h2 className="subtitle">
                            Descripció 1
                        </h2>
                    </div>
                </div>
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
            </motion.div>}
        </section>
        <section ref={productSectionRef} className="section">
            {productSectionInView && <motion.div className="columns"
                                                 animate={getSectionAnimation(-1)}
                                                 transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
                <div className="column">
                    <div>
                        <h1 className="title">Product</h1>
                        <h2 className="subtitle">
                            Descripció 2
                        </h2>
                    </div>
                </div>
            </motion.div>}
        </section>
        <section ref={integrationsSectionRef} className="section">
            {integrationsSectionInView && <motion.div className="columns"
                                                      animate={getSectionAnimation(1)}
                                                      transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <div>
                        <h1 className="title">Integrations</h1>
                        <h2 className="subtitle">
                            Descripció 3
                        </h2>
                    </div>
                </div>
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
            </motion.div>}
        </section>
        <section ref={clientsSectionRef} className="section">
            {clientsSectionInView && <motion.div className="columns"
                                                 animate={getSectionAnimation(-1)}
                                                 transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
                <div className="column">
                    <div>
                        <h1 className="title">Clients</h1>
                        <h2 className="subtitle">
                            Descripció 4
                        </h2>
                    </div>
                </div>
            </motion.div>}
        </section>
        <section ref={contactUsSectionRef} className="section">
            {contactUsSectionInView && <motion.div className="columns"
                                                   animate={getSectionAnimation(1)}
                                                   transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <div>
                        <h1 className="title">Contact us</h1>
                        <h2 className="subtitle">
                            Descripció 5
                        </h2>
                    </div>
                </div>
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
            </motion.div>}
        </section>
        <section ref={languagesSectionRef} className="section">
            {languagesSectionInView && <motion.div className="columns"
                                                   animate={getSectionAnimation(-1)}
                                                   transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className="column">
                    <Image src={profilePic} width="3824" height="1900"/>
                </div>
                <div className="column">
                    <div>
                        <h1 className="title">Languages</h1>
                        <h2 className="subtitle">
                            Descripció 6
                        </h2>
                    </div>
                </div>
            </motion.div>}
        </section>
    </div>
}
