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

const AproposPage = ({data}) => (
    <Layout>
        
      <SEO title="about" />
      <h1 style={{ textAlign: "center" }}>About Me!</h1>
      <p style={{ marginLeft: "250px" }}>Une "web developer" portugais qui essaye de reussir sa certif!</p>
    </Layout>
  )
  
  export default AproposPage