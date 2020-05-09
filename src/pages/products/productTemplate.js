import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ProductTemplate extends Component {
   constructor(props) {
      super(props)
      console.log(props)
   }

   render() {
      const getId = this.props.location.search.substr(6, this.props.location.search.length)
      const dataRow = this.props.data.allMarkdownRemark.edges
      //console.log(dataRow.length)
      //console.log(getId);
      var donnee = "";

      dataRow.forEach(element => {
         //console.log(element.node.id)
         if (element.node.id == getId) {
               donnee = element.node
               console.log(donnee)
         }
      });
      return (
         <Layout>
            <SEO title="Home" />
         <div>
            {
               <div>
                  <h2>
                     { donnee.frontmatter.title }
                  </h2>
                  <h2>
                     { donnee.frontmatter.description }
                  </h2>
                  <h2>
                     { donnee.frontmatter.couleur }
                  </h2>
                  <h2>
                     { donnee.frontmatter.price }
                  </h2>
                  <h2>
                     { donnee.frontmatter.taille }
                  </h2>
                  <img src={ donnee.frontmatter.image } alt={ donnee.frontmatter.title } />
                  <h2>
                     { donnee.frontmatter.categorie }
                  </h2>
               </div>
            }
         </div>
         </Layout>   
      )
   }
}

export const query = graphql`
   query detailProduct {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
         edges {
            node {
                  frontmatter {
                     categorie
                     couleur
                     description
                     image
                     path
                     price
                     taille
                     title
                  }
                  id
            }
         }
      }
   }
`

export default ProductTemplate
