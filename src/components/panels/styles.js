import styled from 'styled-components';

const MainPanelStyles = styled.div`
    width: 75%;
    padding: 5rem;
    padding-bottom: 0;
    background-color: #f7f7f7;
`;

const MainPanelItem = styled.h1`
    font-size: 1.75rem;
`;

const MainPanelInnerTitle = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 1rem 1rem 0 0;
    background-color: white;
`;

const MainPanelInnerBody = styled.div`
    padding: 1rem;
    border: 1px solid grey;
    border-top: none;
    height: 600px;
    border-radius: 0 0 1rem 1rem;
    background-color: white;
`;



export {MainPanelStyles, MainPanelItem, MainPanelInnerTitle, MainPanelInnerBody};