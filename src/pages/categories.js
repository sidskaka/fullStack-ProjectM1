import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Categories = ({ data }) => {
   console.log(data)
   return (
      <Layout>
         <SEO title="Home" />
         {
            data.allMarkdownRemark.edges.map(({ node }, index) =>
               <div>
                  <h3>
                     { node.frontmatter.title }
                  </h3>
                  <h5>
                     { node.frontmatter.description }
                  </h5>
                  <h5>
                     { node.frontmatter.path }
                  </h5>
               </div>
            )
         }
      </Layout>
   )
}

export const query = graphql`
   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/categorie/"}}) {
         edges {
            node {
               frontmatter {
                  title
                  description
                  path
               }
            }
         }
      }
   }
`

export default Categories
