import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  query {
    allStrapiExhibitions {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <StaticQuery
      query = {query} 
      render = {data => (
        <ul>
          {data.allStrapiExhibitions.edges.map(exhibitions => (
            <div>
              <li>{exhibitions.node.title} </li>
              <li>{exhibitions.node.description}</li>
            </div>
          ))}
        </ul>
      )}
    />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
