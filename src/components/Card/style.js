import styled from 'styled-components';

const colors = {
    Work: {background: '#ff8c66'},
    Exercise: {background: '#4acf81'},
    Play: {background: '#56c2e6'},
    Study: {background: '#ff5c7c'},
    Social: {background: '#7536d3'},
    SelfCare: {background: '#f1c65b'}
}

export const Card = styled.div`
    width: 300px;
    height: 260px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    padding-bottom: 0;
    margin-bottom: 0;
    @media(max-width: 540px){
        width: 90vw;
        height: 20vh;
    }
`;

export const Title = styled.h3``;

export const PrCurrent = styled.p`
    font-size: 50px;
    @media(max-width: 540px){
        font-size: 35px;
    }
`;

export const PrPrevious = styled.p`
    font-size: 15px;
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    position: absolute;
    margin-top: 45px;
    padding-left: 25px;
    width: 300px;
    border-radius: 25px;
    height: 175px;
    background: #1c1f4a;
    color: #fff;
    @media(max-width: 540px){
        width: 90vw;
        margin-left: 0;
        height: 150px;
        margin-top: 50px;
    }
`;

export const ImgBackg = styled.div`
     ${props => {
         switch(props.styleIndex){
            case 0:
                return colors.Work;
            case 1:
                return colors.Exercise;
            case 2:
                return colors.Play;
            case 3:
                return colors.Study;
            case 4:
                return colors.Social;
            default:
                return colors.SelfCare;
         }
    }};
    width: 100%;
    height: 70px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
`;

export const Img = styled.img`
    width: 50px;
`;