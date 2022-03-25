import styled from 'styled-components';

const LoginPageStyles = styled.section`
max-width: 50%;
background-color: white;
padding: 1rem;

border: 0.25rem solid black;
border-radius: 0.45rem;
header{
    margin-bottom: 2rem;
}
h1{
    font-size:2rem;
}
.Toastify__toast {
    background-color: red;
    color:white;
}
.Toastify__progress-bar--error {
    background-color: #7d0c2c;
}
`

const Container = styled.div`
    min-height: calc(100vh - 64px); 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 70rem;
    padding: 0rem auto;
    background-color: #f7f7f7;
    
`;



const GraphicStyles = styled.section`
    max-width: 50%;
    position: relative;
    text-align: center;
    color: blue;
    font-size: 3rem;
    
    img {
        border: 0.25rem solid black;
        border-radius: 0.45rem;
        height: 50rem;
    }
    div {
        position: absolute;
        top: 8px;
        right: 16px;
    }
`;

const FormControl = styled.div`
margin-bottom: 1.5rem;

`

export {LoginPageStyles, FormControl, Container, GraphicStyles}