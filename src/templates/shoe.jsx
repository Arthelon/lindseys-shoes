import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import styled from "react-emotion";
import Img from "gatsby-image";
import { Flex, Box } from "grid-emotion";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import config from "../../config/website";
import Navbar from "../components/Navbar";

const Button = styled.a`
    margin-top: 1em;
    display: block;
    text-decoration: none;
    cursor: pointer;
    padding: 1.5em 3em;
    background: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.5px;
    width: 300px;
    color: ${props => props.theme.colors.textInvert};
    transition: all 500ms ease 0s;
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        margin: 2em auto;
        width: 100%;
    }
    :hover {
        color: ${props => props.theme.colors.textInvert};
        background: ${props => props.theme.colors.primaryDark};
    }
`;

const Image = styled(Img)``;

const Wrapper = styled(Flex)`
    width: 100%;
    min-height: ${props => props.theme.minContentHeight};
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        flex-direction: column;
    }
`;

const ImageWrapper = styled(Box)`
    width: 50%;
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        width: 100%;
        margin-bottom: 1em;
    }
`;

const ContentWrapper = styled(Box)`
    width: 50%;
    padding: 1em 3em;
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        width: 100%;
    }
    @media (max-width: ${props => props.theme.breakpoint.s}) {
        padding: 1em 1.5em;
    }
`;

const TitleWrapper = styled(Flex)`
    margin-bottom: 2em;
`;

const Title = styled.h2`
    color: ${props => props.theme.colors.text};
    max-width: ${props => props.theme.maxWidthText};
    text-align: left;
    margin-right: 0.5em;
    margin-bottom: 0;
`;

const SubTitle = styled.h3`
    color: ${props => props.theme.colors.text};
    max-width: ${props => props.theme.maxWidthText};
    margin: 0;
    text-align: center;
`;

const Content = styled.main`
    p {
        text-align: justify;
    }
    p,
    ul,
    ol,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    blockquote {
        max-width: ${props => props.theme.maxWidthText};
        margin-left: auto;
        margin-right: auto;
    }
    li {
        margin-left: 1.45rem;
    }
    .block-img {
        max-width: 100%;
        margin-top: 6rem;
        margin-bottom: 6rem;
        text-align: center;
    }
`;

const ShoeTemplate = ({ data: { prismicShoe: shoeNode } }) => {
    const { data } = shoeNode;
    return (
        <Layout>
            <Helmet title={`${data.name.text} | ${config.siteTitle}`} />
            <SEO caseNode={shoeNode} casePath={shoeNode.uid} caseSEO />
            <Navbar />
            <Wrapper
                flexDirection="row"
                justifyContent="center"
                flexWrap="wrap"
            >
                <ImageWrapper>
                    <Image
                        fluid={
                            data.header_image.localFile.childImageSharp.fluid
                        }
                    />
                </ImageWrapper>
                <ContentWrapper>
                    <TitleWrapper
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <Title>{data.name.text}</Title>
                        <SubTitle>${data.price}</SubTitle>
                    </TitleWrapper>
                    <Content
                        dangerouslySetInnerHTML={{
                            __html: data.description.html
                        }}
                    />
                    <Button href={data.purchase_link.url}>Buy Now</Button>
                </ContentWrapper>
            </Wrapper>
            <Footer isCase />
        </Layout>
    );
};

export default ShoeTemplate;

ShoeTemplate.propTypes = {
    data: PropTypes.shape({
        prismicShoe: PropTypes.object.isRequired
    }).isRequired
};

export const pageQuery = graphql`
    query ShoeBySlug($uid: String!) {
        prismicShoe(uid: { eq: $uid }) {
            uid
            first_publication_date
            last_publication_date
            data {
                header_image {
                    localFile {
                        childImageSharp {
                            fluid(
                                maxWidth: 1920
                                quality: 90
                                traceSVG: { color: "#021212" }
                            ) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                            resize(width: 800) {
                                src
                            }
                        }
                    }
                }
                name {
                    text
                }
                price
                purchase_link {
                    url
                }
                description {
                    html
                }
            }
        }
    }
`;
