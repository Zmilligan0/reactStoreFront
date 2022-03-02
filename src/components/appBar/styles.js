import styled from 'styled-components';

const AppBarStyles = styled.nav`
    border: 1px solid grey;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: right;
    align-items: center;
`;

const AppBarItem = styled.li`

`;

const BrandingName = styled.h1`
    color: blue;
    font-size: 2rem;
`;

export {AppBarStyles, AppBarItem, AppBarItems, BrandingName};