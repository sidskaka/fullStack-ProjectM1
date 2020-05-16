import React, { Component } from 'react'
import { graphql } from 'gatsby'
import '../../style/product-style.css'

import Layout from "../../components/layout"
import SEO from "../../components/seo"


class Products extends Component{
   constructor(props) {
      super(props)
      console.log(props.data);
   }

   componentDidMount() {
      // this.stripe = window.Stripe(process.env.STRIPE_PUBLIC_KEY)
      this.stripe = window.Stripe('pk_test_KwCvsMRqmT5yJmzsICxgSsdP0089Uf4fPQ')
   }

   // const stripe = require('stripe')('sk_test_ajhZPBXq4neLcM2f61RMC1b000tUiL0rVt');
   
   handleSubmit(sku) {
      return event => {
         event.preventDefault();
         console.log(sku)

         var stripe = require('stripe')('sk_test_ajhZPBXq4neLcM2f61RMC1b000tUiL0rVt');

         console.log(stripe)

         const order = stripe.skus.create(
            {
              attributes: {
                size: 'Medium',
                gender: 'Unisex',
              },
              price: 1500,
              currency: 'eur',
              inventory: {type: 'finite', quantity: 500},
              product: 'prod_HHh2eUxE6qOzgL',
            },
            function(err, sku) {
              // asynchronously called
            }
         );

         console.log(order)
      }
   }
   
   render() {

      return (
         <Layout>
            <SEO title="Home" />
            
            {
               <div className="container">
                  <div className="row" id="ads">
                     {
                        this.props.data.allMarkdownRemark.edges.map(({ node }, index) => 
                           <div className="col-md-4">
                              <div className="card rounded">
                                 <div className="card-image">
                                    <span className="card-notify-badge">{ node.frontmatter.couleur }</span>
                                    <span className="card-notify-year" style={{ width: '26%' }}>{ node.frontmatter.categorie }</span>
                                    <img src={ node.frontmatter.image } alt="product" style={{ width: '100%' }}/>
                                 </div>
                                 <div className="card-image-overlay m-auto">
                                    <span className="card-detail-badge">{ node.frontmatter.price }€</span>
                                 </div>
                                 <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                       <h5>{ node.frontmatter.name }</h5>
                                    </div>
                                    <form onSubmit={this.handleSubmit(node.frontmatter.sku)}>
                                       <button type="submit">Coup d'oeil</button>
                                    </form>
                                    {/* <a className="ad-btn" href="#">Coup d'oeil</a> */}
                                 </div>
                              </div>
                           </div>
                        )
                     } 
                  </div>
               </div>
            }
         </Layout>
      )
   }
}

export const query = graphql`
   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
         edges {
            node {
               frontmatter {
                  name
                  price
                  currency
                  couleur
                  image
                  path
                  sku
                  taille
                  categorie
               }
               id
            }
         }
      }
   }
`

export default Products
