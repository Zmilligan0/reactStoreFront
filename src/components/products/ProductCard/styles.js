import styled from 'styled-components';


const ProductOuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    align-self: stretch;
    padding-top: 0rem;
    background-color: #e4f7f4;
    border-radius: 2rem;
    border: 0.2rem black solid;
`;

const ProductMid  = styled.div`
    max-width: 360px;
    align-self: stretch;    
    background-color: #e4f7f4; 
`;
//might have to add back
//width: 300px
const ProductImage = styled.div`
    margin: 0rem auto 0;
    
    img{
        width: 100%;
        height: auto;
    }
`;

const ProductTop = styled.div`
    background-color: #8ae6ff;   
    border-radius: 1.8rem 1.8rem 0 0;
    padding: 1rem;
    border-bottom: 0.2rem black solid;
`;

const ProductBot = styled.div`
    flex-grow : 1;  
    background-color: #fafafa;
    border-radius: 0 0 1.8rem 1.8rem;
    padding: 1rem;
    border-top: 0.2rem black solid;
    font-weight:600;
    
`;

const ProductName = styled.h2`    
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: -0.5px;
    word-wrap: break-word;
    
`;

const ProductPrice = styled.p`
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: -1px;
    color:green;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
    text-align: right;

`;

const ProductDescription = styled.p`
    font-size: 13px;
    color:black;

`;

const HoverP = styled.div`
    display: inline;
    margin-right: 0.2rem;
    &:hover {
        
        svg{
            fill: white;
        }
        cursor: pointer;
      }
`;

export {ProductMid, HoverP, ProductBot, ProductOuterContainer, ProductImage, ProductDescription, ProductPrice, ProductName, ProductTop}