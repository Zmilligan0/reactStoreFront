import styled from 'styled-components';

const Container = styled.div`
padding: 10rem 20rem;
background-color: #f7f7f7;
a {
    display: block;
    padding: 1rem;
    color: white;
    text-align: center;
}
p{
    color: grey;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
}
aside p {
    color: black;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5rem;
}
`;

const InnerContainer = styled.div`
align-items: center;
background-color: red;
margin: 0rem 10rem;
border-radius: 1rem;
`;

const Heading = styled.h2`
    color: black;
    font-size: 6rem;
    text-align: center;
`;

const BrandingName = styled.h1`
    color: blue;
    background-color: #f7f7f7;
    font-size: 3rem;
    text-align: right;
    margin-right: 1rem;
`;


export {Container, Heading, InnerContainer, BrandingName}