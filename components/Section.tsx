import {motion, useAnimation} from "framer-motion";
import React, {useEffect} from "react";
import Image from "next/image";
import logoImg from "../assets/logo.png";
import styled from "styled-components";
import profilePic from "../assets/img.png";
import {useInView} from "react-intersection-observer";

const Container = styled.div`
  display: grid;
  background-color: rgba(255, 255, 255, 0);
  //filter: blur(2px);
  //feGaussianBlur: 15;
`

export interface SectionProps {
    store
    title
    description?
    direction?
    img?
}

export const Section = (props: SectionProps) => {

    const {ref: ref, inView: inView, entry: entry} = useInView({threshold: 0,});

    let getSectionAnimation = (direction) => {
        console.log(`getSectionAnimation`);
        return {x: [window?.innerWidth * direction, 0], opacity: [0, 1]}
    }

    let controls = useAnimation()

    let animDurationMS = 500

    useEffect(() => {
        if (inView) {
            if (!props.store.animated.sections[props.title])
                controls.start(getSectionAnimation(props.direction), {
                ease: "easeOut",
                duration: animDurationMS / 1000
            })
            setTimeout(() => props.store.animated.sections[props.title] = true, animDurationMS)

        }
    }, [inView])

    let contentElements = [<div key={1} className="column">
        <div>
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.description}</h2>
        </div>
    </div>, <div key={2} className="column">
        {props.img}
    </div>];

    return <Container ref={ref}>
        <section ref={ref} style={{minHeight: '440px'}} className="section">
            <motion.div className="columns"
                        animate={controls}
                        onAnimationStart={() => {
                            console.log(`onAnimationStart`);
                            // console.log(`props.store.animated.sections.about`, props.store.animated.sections.about);
                            // props.store.animated.sections.about = true
                            // setTimeout(() => props.store.animated.sections.about = true, 700)
                        }}
                        onAnimationComplete={definition => {
                            // props.store.animated.sections.about = true
                            console.log('onAnimationComplete', definition)
                        }}
                // initial={false}
                        transition={{ease: "easeOut", duration: animDurationMS / 1000}}
            >
                {props.direction == 1 ? contentElements : contentElements.reverse()}
            </motion.div>
        </section>
    </Container>
}
