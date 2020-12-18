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

const HomePage = ({data}) => (
  <Layout>
    <SEO title="home" />
    <h1 style={{ textAlign: "center" }}>Bienvenue!</h1>
 
  </Layout>
)

export default HomePage