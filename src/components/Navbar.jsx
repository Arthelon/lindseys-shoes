import React from "react";
import { navigate } from "gatsby";
import styled from "react-emotion";

const Wrapper = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    padding: 1rem 0;
    margin: 1rem 0;
    @media (max-width: ${props => props.theme.breakpoint.s}) {
        margin: 0;
    }
`;

const Logo = styled.h2`
    font-style: italic;
    font-size: 2.3rem;
    margin-bottom: 0;
    cursor: pointer;
`;

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        navigate("/");
    }

    render() {
        return (
            <Wrapper>
                <Logo onClick={this.handleClick}>Lindsey's Shoes</Logo>
            </Wrapper>
        );
    }
}
