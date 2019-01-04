const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const pages = await graphql(`
        {
            allPrismicShoe {
                edges {
                    node {
                        id
                        uid
                    }
                }
            }
        }
    `);

    const caseTemplate = path.resolve("src/templates/shoe.jsx");
    console.log(pages.data.allPrismicShoe.edges);

    pages.data.allPrismicShoe.edges.forEach(edge => {
        createPage({
            path: `/${edge.node.uid}`,
            component: caseTemplate,
            context: {
                uid: edge.node.uid
            }
        });
    });
};
