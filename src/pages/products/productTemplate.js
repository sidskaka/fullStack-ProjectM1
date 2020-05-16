import React, { Component } from 'react'

class productTemplate extends Component {
   // componentDidMount() {
   //    this.stripe = window.Stripe('pk_test_KwCvsMRqmT5yJmzsICxgSsdP0089Uf4fPQ')
   // }
   handleSubmit(sku) {
      var stripe = require('stripe')('sk_test_ajhZPBXq4neLcM2f61RMC1b000tUiL0rVt');
      stripe.products.create(
         {
           name: 'T-shirt',
           type: 'good',
           description: 'Comfortable cotton t-shirt',
           attributes: ['size', 'gender'],
         },
         function(err, product) {
           // asynchronously called
         }
       );
   }

   render() {
      const id = "HE_des"
      return (
         <div>
            <div>
               <form onSubmit={ this.handleSubmit(id) }>
                  <button type="submit">Ajouter</button>
               </form>
            </div>
         </div>
      )
   }
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

export default productTemplate


// import React, { Component } from 'react'
// import { graphql } from "gatsby"

// const productTemplate = ({ data }) => {
//    console.log(data)
//    return (
//       <div>
//          { data.markdownRemark.frontmatter.title }
//       </div>
//    )

// }

// export const query = graphql`
//    query($path: String!)
//    {
//       markdownRemark(frontmatter: {path: {eq: $path}}) {
//          frontmatter {
//             title
//          }
//       }
//    }
// `

// export default productTemplate



// // const productTemplate = ({ pageContext }) => {
// //    console.log(pageContext)
// //    return (
// //      <div>
// //        Name: 
// //        Price: 
// //        Description: 
// //      </div>
// //    )
// //  }

// // export default productTemplate