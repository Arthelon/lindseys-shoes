import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "react-emotion";

const Wrapper = styled.div`
    text-align: center;
    margin-top: 6rem;
    p {
        margin-top: 3rem;
        font-size: 2rem;
    }
    a {
        font-size: 1.5rem;
    }
`;

const NotFoundPage = () => (
    <Layout>
        <Wrapper>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist. </p>
            <Link to="/">Return Home</Link>
        </Wrapper>
    </Layout>
);

export default NotFoundPage;
