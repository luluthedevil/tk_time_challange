import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background: #1c1f4a;
    color: #bdc1ff;
    height: 180px;
    width: 250px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    @media(max-width: 540px){
        height: 50px;
        width: 50vh;
        justify-content: center;
        padding-right: 140px;
    }
`;

export const UlLinks = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    list-style: none;
    @media(max-width: 540px){
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const LiLinks = styled.li`
    margin: 10px;
    color: #cccccc;
`;

export const ALinks = styled.a`
    text-decoration: none;
    cursor: pointer;
`;