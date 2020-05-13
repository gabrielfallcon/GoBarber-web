import styled from 'styled-components'
import { shade } from 'polished';

import backgorundImage from '../../assets/sign-in-background.png';
import backMobile from '../../assets/sign-in-background-mobile.png';

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

    form {
        margin: 80px 0px;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;
            color: #F4EDE8;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        button {
            background: #FF9000;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #312e38;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color .2s;

            &:hover {
                background: ${shade(0.2, '#ff9000')}
            }
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
        background: url(${backMobile}) no-repeat center;
        background-size: cover;
        max-height: 100vh;

        form {
            input {
                width: 90%;
            }
            button {
                width: 90%;
            }
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

