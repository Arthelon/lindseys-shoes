import React from "react";
import styled from "react-emotion";
import HeroImageSrc from "../images/hero.jpg";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 900px;
    background-image: url(${HeroImageSrc});
    background-size: cover;
    @media (max-width: ${props => props.theme.breakpoint.s}) {
        height: 700px;
    }
`;

const Logo = styled.h2`
    font-style: italic;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 0 1.75rem;
    margin-top: 50px;
`;

const Title = styled.div`
    max-width: ${props => props.theme.maxWidthText};
    height: fit-content;
    padding: 2rem;
    display: flex;
    alignitems: center;
    margin-top: 10em;
    text-align: center;
    background: white;
    border-radius: 5px;
    h1 {
        letter-spacing: 0.2rem;
        line-height: 4.5rem;
        font-size: 3.5rem;
    }
    h3 {
        font-family: ${props => props.theme.fontFamily.body};
        margin-top: 2rem;
        font-size: 1.85rem;
        font-weight: 400;
    }
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        h1 {
            line-height: 3.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
    @media (max-width: ${props => props.theme.breakpoint.s}) {
        h1 {
            line-height: 3rem;
        }
        h3 {
            font-size: 1.3rem;
        }
    }
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo>Lindsey's Shoes</Logo>
                <Title
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <h1>
                        Hand-made Shoes for the <br /> Enlightened Customer
                    </h1>
                </Title>
            </HeaderWrapper>
        );
    }
}
