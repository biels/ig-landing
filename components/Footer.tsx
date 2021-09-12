import React, {useState, useEffect, useContext} from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    
`

export interface FooterProps {

}

export const Footer = ((props: FooterProps) => {
    return <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <strong>AlefTav Platform</strong> by <a href="https://medicalione.com">MedicalOne</a>. Copyright (c) MedicalOne 2021. All Rights Reserved.
            </p>
        </div>
    </footer>
})
