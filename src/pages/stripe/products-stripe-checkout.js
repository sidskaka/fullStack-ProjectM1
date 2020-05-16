import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
// require('dotenv').config();

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ProductStripeCheckout extends Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    
    componentDidMount() {
        // this.stripe = window.Stripe(process.env.STRIPE_PUBLIC_KEY)
        this.stripe = window.Stripe('pk_test_KwCvsMRqmT5yJmzsICxgSsdP0089Uf4fPQ')
    }

    handleSubmit(sku) {
        return event => {
            event.preventDefault();

            this.stripe.redirectToCheckout({
                items: [{ sku, quantity: 1 }],
          
                // Do not rely on the redirect to the successUrl for fulfilling
                // purchases, customers may not always reach the success_url after
                // a successful payment.
                // Instead use one of the strategies described in
                // https://stripe.com/docs/payments/checkout/fulfillment
                successUrl: 'http://localhost:8000/stripe/success',
                cancelUrl: 'http://localhost:8000/stripe/canceled',
            })
            .then(function (result) {
                if (result.error) {
                    // console.log(result.error.message);
                }
            });
        }
    }

    render() {
        const { id, currency, price, name, image } = this.props;
        console.log(this.props)
        const priceFloat = (price/100).toFixed(2)
        const formattedPrice = Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(priceFloat);

        return (
            <div>
                <form onSubmit={this.handleSubmit(id)}>
                    {/* <h2> { name } ({ formattedPrice }) </h2> */}
                    <button type="submit">Acheter maintenent</button>
                    <button className="buy-button snipcart-add-item" 
                    data-item-id={id} 
                    data-item-price={price}
                    data-item-url="/"
                    data-item-name={name}
                    data-item-image={image}>Ajouter au panier</button>
                </form>
            </div> 
            
        )
    }
}

export default () => (
    <StaticQuery 
        query = {
            graphql`
            { 
                allStripeSku {
                    edges {
                        node {
                            id
                            currency
                            price
                            attributes {
                                name
                            }
                            image
                        }
                    }
                }
            }
            `
        }
        render = { data => (
            <Layout>
                <SEO title="Home" />
                {/* {console.log(data)} */}
                <div>
                    {   
                        data.allStripeSku.edges.map(({ node: sku }) => (
                            <div>
                                <ProductStripeCheckout 
                                    id = { sku.id }
                                    currency = { sku.currency }
                                    price = { sku.price }
                                    name = { sku.attributes.name }
                                    image = { sku.image }
                                />
                                {/* <img src={ sku.image } alt={sku.name} /> */}

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4" >
                                                <div class="item-box-blog">
                                                    <div className="item-box-blog-image">

                                                        <figure> 
                                                            <img src={ sku.image } alt={sku.name} /> 
                                                        </figure>
                                                    
                                                    </div>
                                                    <div className="item-box-blog-body">
                                                
                                                        <div className="item-box-blog-heading">
                                                            
                                                            <h5>{ sku.attributes.name }</h5>
                                                            
                                                        </div>
                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>  
            </Layout>
        ) }
    />
)
