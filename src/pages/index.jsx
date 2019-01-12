import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "react-emotion";
import { Flex } from "grid-emotion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";

import Header from "../components/Header";

const Wrapper = styled(Flex)`
    max-width: ${props => props.theme.maxWidth};
`;

const Contact = styled(Flex)`
    width: 100%;
    background: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.colors.textInvert};
    margin: 0 auto;
    h1,
    h2,
    h3 {
        color: ${props => props.theme.colors.textInvert};
    }
    h3 {
        font-family: ${props => props.theme.fontFamily.body};
        margin-top: 1rem;
        font-size: 1.85rem;
        font-weight: 400;
    }
    a:hover {
        color: ${props => props.theme.colors.primaryLight};
    }
    @media (max-width: ${props => props.theme.breakpoint.m}) {
        font-size: 1.5rem;
    }
`;

const IndexPage = ({
    data: {
        shoes: { edges },
        site: {
            siteMetadata: { siteEmail: email }
        },
        heroImage
    }
}) => (
    <Layout>
        <Header image={heroImage.childImageSharp.fluid} />
        <Wrapper
            p={4}
            mb={[4, 4, 7]}
            mx="auto"
            justifyContent="space-between"
            flexWrap="wrap"
        >
            {edges.map(c => (
                <GridItem
                    uid={c.node.uid}
                    key={c.node.uid}
                    image={
                        c.node.data.header_image.localFile.childImageSharp.fluid
                    }
                    alt={c.node.data.name.text}
                    title={c.node.data.name.text}
                />
            ))}
        </Wrapper>
        <Contact
            px={4}
            py={6}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <h1>
                <b>Have questions?</b>
            </h1>
            <h3 style={{ textAlign: "center" }}>
                Reach out to us at <a href={`mailto: ${email}`}>{email}</a>
            </h3>
        </Contact>
        <Footer />
    </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
    data: PropTypes.shape({
        shoes: PropTypes.shape({
            edges: PropTypes.array.isRequired
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteEmail: PropTypes.string.isRequired
            })
        }),
        heroImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired
            })
        })
    }).isRequired
};

export const pageQuery = graphql`
    query IndexQuery {
        heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1920, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        site {
            siteMetadata {
                siteEmail
            }
        }
        shoes: allPrismicShoe(
            sort: { fields: [last_publication_date], order: DESC }
        ) {
            edges {
                node {
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
                        description {
                            html
                        }
                    }
                }
            }
        }
    }
`;
