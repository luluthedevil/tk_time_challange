import styled from 'styled-components';

export const Profile = styled.div`
    height: 475px;
    width: 250px;
    display: flex;
    border-radius: 25px;
    background: #1c1f4a;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #ddd;
    margin-left: 50px;
    @media(max-width: 540px){
        height: 200px;
        width: 50vh;
        margin-left: 0px;
        margin-top: 20px;
    }
`;

export const Info = styled.div`
    height: 100%;
    width: 100%;
    padding-left: 20px;
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    background: #5847eb;
    border-radius: 25px;
    @media(max-width: 540px){
        flex-direction: row;
        height: 100%;
        width: 100%;
        display: flex;
    }
`;

export const Img = styled.img`
    padding-bottom: 25px;
    width: 90px;
`;

export const Report = styled.p`
    margin-left: 20px;
`;

export const Name = styled.h2`
    font-size: 45px;
    @media(max-width: 540px){
        font-size: 25px;
        margin-left: 20px;
    }
`;

export const UserInfo = styled.div`
    @media(max-width: 540px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 15px;
    }
`;