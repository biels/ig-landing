import React, {useState, useEffect, useContext} from "react";
import styled from 'styled-components'
import Image from "next/image";
import heroImg from "../assets/hero_img.png";
import {FormattedMessage} from "react-intl";

const Container = styled.div`
    display: grid;
    
`
const InnerHeroContainer = styled.div`
  display: grid;
  height: 100%;
  padding-top: 170px;
  padding-bottom: 170px;
  padding-left: 40px;
  padding-right: 40px;
  grid-template-columns: auto auto;
  background-image: linear-gradient(80.9deg,rgba(210,229,248,.3) 23.12%,rgba(249,201,184,.3) 91.44%),linear-gradient(102.49deg,rgba(115,175,225,.37) 0%,rgba(249,205,188,.37) 49.38%,rgba(191,235,200,.5) 100.86%);
`

export interface HeroProps {

}

export const Hero = (props: HeroProps) => {
    return <Container>
        <section className="hero has-background-white-ter">
            <InnerHeroContainer>
                <div>
                    <div className="hero-body">
                        <p className="title is-2">
                            <FormattedMessage
                                description={'hero title'}
                                defaultMessage={`
                                                 <p>Alef-Tav Soft, the new generation management software for Hospitals and HealthCare</p>
`}
                                values={{
                                    p: name => <p>{name}</p>,
                                }}
                            />
                        </p>
                        <p className="subtitle is-4">
                            <FormattedMessage
                                description={'hero subtitle'}
                                defaultMessage={`
                                                 <p>Alef-Tav Soft is the advanced solution that adapts to all your needs for you to easily manage your patients and healthcare information – anytime, anywhere.</p>
`}
                                values={{
                                    p: name => <p>{name}</p>,
                                }}
                            />

                        </p>
                    </div>
                </div>
                <Image src={heroImg} width="2687" height="1335"/>
            </InnerHeroContainer>
        </section>
    </Container>
}
