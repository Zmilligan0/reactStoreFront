import styled from 'styled-components';

const SideBarStyles = styled.div`
    width: 25%;
    border: 1px solid grey;
    border-top: none;
    border-bottom: none;
`;

const SideBarItems = styled.ul`
    align-items: center;
   
`;

const SideBarItem = styled.li`
    display: block;
    border-bottom: 1px solid grey;
    padding: 0.5rem 0rem;
    text-align: center;
    color: black;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export {SideBarStyles, SideBarItem, SideBarItems};