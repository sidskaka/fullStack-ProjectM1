import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class post extends Component {
   constructor(props) {
      super(props)  
   }

   render() {
      const getId = this.props.location.search.substr(6, this.props.location.search.length)
      const dataRow = this.props.data.allMarkdownRemark.edges
      console.log(dataRow.length)
      console.log(getId)
      var donnee = ""

      dataRow.forEach(element => {
         if (element.node.id == getId) {
               donnee = element.node
               //console.log(donnee)
         }
      });
      return (
         <Layout>
         <SEO title="Home" />
            <div>
                  {
                     <div>
                        <h1>
                              { donnee.frontmatter.title }
                        </h1>
                        <img src={ donnee.frontmatter.image } alt={donnee.frontmatter.title} />
                        <h3>
                              { donnee.frontmatter.resume }
                        </h3>
                        <h5>
                              { donnee.frontmatter.textcomplet }
                        </h5>
                     </div>
                  }
            </div>
         </Layout>
      )
   }
}

export const query = graphql`
   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogs/"}}) {
         edges {
            node {
               frontmatter {
                  image
                  resume
                  textcomplet
                  title
               }
               id
            }
         }
      }
   }
`

export default post
