import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "react-emotion";
import { Flex } from "grid-emotion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";
import BeTheHero from "../images/be_the_hero.svg";
import DataReport from "../images/data_report.svg";
import MayTheForce from "../images/may_the_force.svg";
import Header from "../components/Header";

const Wrapper = styled(Flex)`
    max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
    background: ${props => props.theme.colors.primaryDark};
    color: ${props => props.theme.colors.textInvert};
    h1,
    h2,
    h3,
    h4 {
        color: ${props => props.theme.colors.textInvert};
    }
`;

const ServiceImage = styled.div`
    flex-basis: calc(99.9% * 4 / 7 - 5rem);
    max-width: calc(99.9% * 4 / 7 - 5rem);
    width: calc(99.9% * 4 / 7 - 5rem);
    text-align: center;
    img {
        width: 90%;
        margin-bottom: 2rem;
    }
    @media (max-width: ${props => props.theme.breakpoint.l}) {
        flex-basis: 100%;
        max-width: 100%;
        width: 100%;
        img {
            width: 50%;
        }
    }
    @media (max-width: ${props => props.theme.breakpoint.s}) {
        img {
            width: 75%;
        }
    }
`;

const ServiceText = styled.div`
    flex-basis: calc(99.9% * 3 / 7 - 5rem);
    max-width: calc(99.9% * 3 / 7 - 5rem);
    width: calc(99.9% * 3 / 7 - 5rem);
    @media (max-width: ${props => props.theme.breakpoint.l}) {
        flex-basis: 100%;
        max-width: 100%;
        width: 100%;
    }
    ol,
    ul {
        list-style: none;
        margin-left: 0;
    }
    li:before {
        content: "－";
        padding-right: 8px;
    }
`;

const Contact = styled(Wrapper)`
    margin: 0 auto;
    h1,
    h2,
    h3 {
        color: ${props => props.theme.colors.text};
    }
    h3 {
        font-family: ${props => props.theme.fontFamily.body};
        margin-top: 1rem;
        font-size: 1.85rem;
        font-weight: 400;
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
        }
    }
}) => (
    <Layout>
        <Header />
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
                    subtitle={c.node.data.description.text}
                />
            ))}
        </Wrapper>
        <PrimaryBG>
            <Wrapper flexDirection="column" p={4} mx="auto">
                <Flex
                    w={1}
                    py={5}
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <ServiceImage>
                        <img src={BeTheHero} alt="Be The Hero" />
                    </ServiceImage>
                    <ServiceText>
                        <h2>TITLE 1</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?
                        </p>
                        <ul>
                            <li>ATTR 1</li>
                            <li>ATTR 2</li>
                            <li>ATTR 3</li>
                        </ul>
                    </ServiceText>
                </Flex>
                <Flex
                    w={1}
                    py={5}
                    justifyContent="space-between"
                    flexDirection="row-reverse"
                    flexWrap="wrap"
                >
                    <ServiceImage>
                        <img src={DataReport} alt="Data Report" />
                    </ServiceImage>
                    <ServiceText>
                        <h2>TITLE 2</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?
                        </p>
                    </ServiceText>
                </Flex>
                <Flex
                    w={1}
                    py={5}
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    <ServiceImage>
                        <img src={MayTheForce} alt="May the Force" />
                    </ServiceImage>
                    <ServiceText>
                        <h2>TITLE 3</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?
                        </p>
                    </ServiceText>
                </Flex>
            </Wrapper>
        </PrimaryBG>
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
            <h3>
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
        })
    }).isRequired
};

export const pageQuery = graphql`
    query IndexQuery {
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
