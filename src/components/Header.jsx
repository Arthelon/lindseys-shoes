import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Img from "gatsby-image";

const HeaderImage = styled(Img)`
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 900px;
    img {
        object-fit: cover !important;
        object-position: center top !important;
    }

    @media (max-width: ${props => props.theme.breakpoint.s}) {
        height: 700px;
    }
`;

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 900px;
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

const Header = ({ image }) => (
    <HeaderWrapper>
        <HeaderImage fluid={image} />
        <Logo image={image}>Lindsey's Shoes</Logo>
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

Header.propTypes = {
    image: PropTypes.object.isRequired
};

export default Header;
