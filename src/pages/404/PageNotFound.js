import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../libs/firebase'
import { Container, Heading, InnerContainer, BrandingName } from "./styles";

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true)
        }
        else {
            setIsUser(false)
        }
    })

    return (
        <>
            <aside>
                <header>
                    <BrandingName>Zach's Knives</BrandingName>
                    <Container>
                        <Heading>Oopsies!</Heading>
                        <p>Couldn't find the page you're looking for</p>
                        <aside>
                            <p>Error: 404</p>
                        </aside>
                        {
                            isUser ? <InnerContainer><Link to='/dashboard'>back to dashboard</Link></InnerContainer> : <InnerContainer><Link to='/'>back to login</Link></InnerContainer>
                        }
                    </Container>

                </header>
            </aside>
        </>
    )
}

export default PageNotFound;