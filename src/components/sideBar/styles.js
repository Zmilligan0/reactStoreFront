import styled from 'styled-components';

const SideBarStyles = styled.div`
    width: 15%;
    border: 1px solid grey;
    border-top: none;
    border-bottom: none;
    background-color: white;
`;

const SideBarItems = styled.ul`
    align-items: center;
   
`;

const SideBarItem = styled.li`
    display: block;
    border-bottom: 1px solid lightgrey;
    line-height: 3rem;
    text-align: center;
    color: black;

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
  a{
    display:block;
    text-decoration: none;
    color: black;
  }
`;

export {SideBarStyles, SideBarItem, SideBarItems};