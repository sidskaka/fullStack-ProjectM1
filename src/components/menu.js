//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
// mon style
import '../style/style.css'

const Header = () => {
  
    return (
        <header
            style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
            }}
        >
            <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                height: 78
            }}
            >
            
            <nav>
                <div className="first-div">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="/stripe/products-stripe-checkout">Checkout Stripe</a></li>
                        <li><a href="/categories/">Catégorie</a></li>
                        <li><a href="/products/">Produit</a></li>
                        <li><a href="#">Mon compte</a></li>
                        <li><a href="/liste-blog">Blog</a></li>
                    </ul>
                </div>
                <div className="second-div">
                    <h4>
                        <a>Se connecter</a>
                    </h4>
                </div>
            </nav>

            </div>
        </header>
  )
}

export default Header
