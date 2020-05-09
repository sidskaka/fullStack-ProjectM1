import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ProductStripeCheckout extends Component {
    // constructor (props) {
    //     super(props)

    //     this.state = {
    //         id : ''
    //     }
    // }
    
    componentDidMount() {
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
                    console.log(result.error.message);
                }
            });
        }
    }

    submitPanier(t) {
        //this.preventDefault();
        alert(t);
        // document.getElementById('id_div').style.visibility='hidden';
        // $("#id_div").attr("class", "hidden");

    }

    // componentDidMount() {
    //     document.getElementById('id_div').style.visibility='hidden';
    // }

    render() {
        const { id, currency, price, name } = this.props;
        const priceFloat = (price/100).toFixed(2)
        const formattedPrice = Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(priceFloat);

        return (
            <div>
                <form onSubmit={ this.handleSubmit(id) }>
                    {/* <h2> { name } ({ formattedPrice }) </h2> */}
                    <button type="submit">Acheter maintenent</button>
                    <input type="button" value="Ajouter au panier" onClick={() => this.submitPanier(id)}/>
                </form>
                {/* <div id="id_div" className="hidden">
                    <form>
                        <select>
                            <option>Choisir</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button>Ajouter</button>
                    </form>
                </div> */}
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
                {console.log(data)}
                <div>
                    {   
                        data.allStripeSku.edges.map(({ node: sku }) => (
                            <div>
                                <ProductStripeCheckout 
                                    id = { sku.id }
                                    currency = { sku.currency }
                                    price = { sku.price }
                                    name = { sku.attributes.name }
                                />
                                {/* <img src={ sku.image } alt={sku.name} /> */}

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4" >
                                                <div class="item-box-blog">
                                                    <div className="item-box-blog-image">
                                                    
                                                        {/* <div className="item-box-blog-date bg-blue-ui white"> 
                                                            <span class="mon">Augu 01</span> 
                                                        </div> */}
                                                    
                                                        <figure> 
                                                            <img src={ sku.image } alt={sku.name} /> 
                                                        </figure>
                                                    
                                                    </div>
                                                    <div className="item-box-blog-body">
                                                
                                                        <div className="item-box-blog-heading">
                                                            
                                                            <h5>{ sku.attributes.name }</h5>
                                                            
                                                        </div>
                                                        <div className="item-box-blog-data" style={{ padding: 'px 15px'}}>
                                                            <p>
                                                                <i className="fa fa-user-o"></i> 
                                                                Admin, 
                                                                <i className="fa fa-comments-o"></i> 
                                                                Comments(3)
                                                            </p>
                                                        </div>
                                                        {/* <div className="mt"> 
                                                            <a href="#" tabindex="0" className="btn bg-blue-ui white read">
                                                                read more
                                                            </a>
                                                        </div> */}
                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="id_div" className="hidden">
                                    <form>
                                        <select>
                                            <option>Choisir</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <button>Ajouter</button>
                                    </form>
                                </div>
                            </div>
                        ))
                    }
                </div>  
            </Layout>
        ) }
    />
)
