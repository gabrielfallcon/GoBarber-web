import styled, { keyframes } from 'styled-components'
import { shade } from 'polished';

import backgorundImage from '../../assets/register-background.png';
import backMobile from '../../assets/register-mobile.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: center;

    width: 100%;
    max-width: 700px;

    @media(max-width: 700px) {
        background: url(${backMobile}) no-repeat center;
        background-size: cover;
        max-height: 100vh;
    }
`;

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to{
        opacity: 1;
        transform: translateX(0)
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: center;

    animation: ${appearFromRight} 1s;

    form {
        margin: 80px 0px;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        > a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color .2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color: #FF9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color .2s;
        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#FF9000')}
        }

        svg {
            margin-right: 16px;
        }
    }

    @media(max-width: 700px) {

        form {
            margin: 30px 0px;
        }

        > a {
            margin-top: 0;
        }
    }
`;


export const Background = styled.div`
    flex: 1;
    background: url(${backgorundImage}) no-repeat center;
    background-size: cover;
`;

