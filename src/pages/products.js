import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Products = ({ data }) => {
   console.log(data);
   return (
      <Layout>
         <SEO title="Home" />
         {
            data.allMarkdownRemark.edges.map(({ node }, index) => 
               <div>
                  <img src={node.frontmatter.image} alt={node.frontmatter.title}/>
                  <h3>
                     { node.frontmatter.title }
                  </h3>
                  <h5>
                     { node.frontmatter.couleur }
                  </h5>
                  <h5>
                     { node.frontmatter.categorie }
                  </h5>
                  <h5>
                     { node.frontmatter.taille }
                  </h5>
               </div>
            )
         }
      </Layout>
   )

}

export const query = graphql`
   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
         edges {
            node {
               frontmatter {
                  taille
                  couleur
                  categorie
                  image
                  title
               }
            }
         }
      }
   }
`

export default Products
