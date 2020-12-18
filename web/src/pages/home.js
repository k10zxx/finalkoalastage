import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'


export const query = graphql`
query MyQuery {
  allSanityMyimg {
    edges {
      node {
        title
        image {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}`;

const HomePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ textAlign: "center" }}>Bienvenue!</h1>
    <ul style={{ marginLeft: "250px" }}>
      {data.allSanityMyimg.edges.map(({node: project }) =>(
      <li style={{ listStyleType: "none"}}>
        <h3 style = {{ textTransform: "uppercase" }}> {project.title} </h3>
        <img src={project.image.asset.fluid.src} alt='' />
        <p> Bienvenue je vou laisse regarder cette fantastic Koala qui dort! </p>
      </li>
      ))}
    </ul>
  </Layout>
)

export default HomePage