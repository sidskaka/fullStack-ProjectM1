import React, { Component } from 'react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class Button extends Component {
    componentDidMount() {
        this.stripe = window.Stripe('pk_test_KwCvsMRqmT5yJmzsICxgSsdP0089Uf4fPQ')
    }

    render() {
        return (
            <form onSubmit= { event => {
                event.preventDefault();
                
                this.stripe.redirectToCheckout({
                  items: [{sku: 'sku_HDA4rViQy1McBM', quantity: 1}],
            
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
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer.
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                  }
                });
            }}>
                <button type="submit">Acheter</button>
            </form>
        )
    }
}

const CheckoutStripe = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Vente de produits</h1>
            <Button />
        </Layout> 
    )
}

export default CheckoutStripe