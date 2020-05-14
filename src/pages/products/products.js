import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../../style/product-style.css'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Products = ({ data }) => {
   console.log(data);
   return (
      <Layout>
         <SEO title="Home" />
         {/* {
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
         } */}
         {
            <div className="container">
               <div className="row" id="ads">
                  <div className="col-md-4">
                     {
                        data.allMarkdownRemark.edges.map(({ node }, index) => 
                           <div className="card rounded">
                              <div className="card-image">
                                 <span className="card-notify-badge">{node.frontmatter.couleur}</span>
                                 <span className="card-notify-year">2018</span>
                                 <img src={node.frontmatter.image} alt={node.frontmatter.title}/>
                              </div>
                              <div className="card-image-overlay m-auto">
                                 <span className="card-detail-badge">{node.frontmatter.price}€</span>
                              </div>
                              <div className="card-body text-center">
                                 <div className="ad-title m-auto">
                                    <h5>{node.frontmatter.title}</h5>
                                 </div>
                                 <a className="ad-btn" href="#">Coup d'oeil</a>
                              </div>
                           </div>
                        )
                     }
                  </div>
               </div>
            </div>
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
                  price
               }
               id
            }
         }
      }
   }
`

export default Products
