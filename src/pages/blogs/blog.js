import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../../style/styles.scss'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { nonExecutableDefinitionMessage } from 'graphql/validation/rules/ExecutableDefinitions'

const listeBlog = ({ data }) => {
   console.log(data)

   return (
      <Layout>
         <SEO title="Home" />
         {/* <div>
            { 
                  data.allMarkdownRemark.edges.map(({ node }, index) => (
                     <div className="product__item" key={index}>
                           <h3>
                              <a href={`${node.frontmatter.path}`} style={{textDecoration: 'none'}}>
                                 { node.frontmatter.title }
                              </a>
                           </h3>
                           <h5>
                              { node.frontmatter.resume }
                           </h5>
                           <h5>
                              { node.frontmatter.date }
                           </h5>
                           <br/> 
                           <br/>
                     </div>  
                  ))
            }
         </div> */}
         {
            data.allMarkdownRemark.edges.map(({ node }, index) => (
               <div className="blog-card">
                  <div className="meta">
                     <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg'}}></div>
                     <ul className="details">
                        <li className="author"><a href="#">John Doe</a></li>
                        <li className="date">{node.frontmatter.date}</li>
                        <li className="tags">
                           <ul>
                              <li><a href="#">Learn</a></li>
                              <li><a href="#">Code</a></li>
                              <li><a href="#">HTML</a></li>
                              <li><a href="#">CSS</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div className="description">
                     <h1>{node.frontmatter.title}</h1>
                     <h2>{node.frontmatter.resume}</h2>
                     {/* <p>{node.frontmatter.textcomplet}</p> */}
                     <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                     <p className="read-more">
                        <a href={`${node.frontmatter.path}`}>Read More</a>
                     </p>
                  </div>
               </div>
            ))
         }
      </Layout>
   )
}

export const query = graphql`
   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogs/"}}) {
         edges {
            node {
               html
               frontmatter {
                  path
                  title
                  resume
                  textcomplet
                  image
                  date
               }
            }
         }
      }
   }
`

export default listeBlog
