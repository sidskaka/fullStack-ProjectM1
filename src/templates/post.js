import React from 'react'
//import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Template = ({ data }) => {
   const { markdownRemark: post } = data;

   return (
      <Layout>
         <SEO title="Home" />
         <div style={{width: '88%', marginLeft: '7%'}}>
            <h2>{ post.frontmatter.title }</h2>
            <h5>
               { post.frontmatter.resume }
            </h5>
            <div>
               <img style={{width: '97%'}} src={post.frontmatter.image} alt={ post.frontmatter.title } />
            </div>
            <p>
               { post.frontmatter.textcomplet }
            </p>

            <div>
               <div className="container">

                  <h3 className="text-center">Laisser un commentaire</h3><br />

                  <div className="row">
                     <div className="col-md-8" style={{marginLeft: '16%'}}>
                           <form action="/post" method="post">
                           <input className="form-control" name="name" placeholder="Name..." /><br />
                           <input className="form-control" name="phone" placeholder="Phone..." /><br />
                           <input className="form-control" name="email" placeholder="E-mail..." /><br />
                           <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height: '150px'}}></textarea><br />
                           <input className="btn btn-primary" type="submit" value="Send" /><br /><br />
                           </form>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </Layout>
   )
}

export const postQuery = graphql`
   query BlogPostByPath($path: String!){
      markdownRemark(frontmatter: { path: { eq: $path }}){
         html,
         frontmatter {
            path
            title
            resume
            textcomplet
            image
         }
      }
   }
`
export default Template
