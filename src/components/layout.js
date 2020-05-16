/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-identity/ ==> configure gatsby identity

import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import Menu from './menu'
import "./layout.css"

const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <>
      {/* <Menu /> */}
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
                        <li><a href="/stripe/products-stripe-checkout">Checkout Stripe</a></li>
                        {/* <li><a href="/categories/">Catégorie</a></li> */}
                        <li><a href="/products/products">Produits</a></li>
                        <li><a href="#">Mon compte</a></li>
                        <li><a href="/blogs/blog">Blog</a></li>
                        <li><a href="/contacts/contactForm">Contact</a></li>
                    </ul>
                </div>
                <div className="second-div">
                    {/* <a style={{marginLeft: '-12%'}} href="/stripe/products-stripe-checkout#/cart">
                      <svg style={{width: '18%', height: '0%'}} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon--blue-dark snipcart__icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#313749"></path>
                      </svg>
                    </a> */}
                    <nav style={{ marginLeft: "18%", marginTop: "-24%" }}>
                      {" "}
                      <button className="btn" onClick={() => setDialog(true)}>
                        {isLoggedIn ? `Se déconnecter` : "Se connecter"}
                      </button>
                    </nav>
                </div>
            </nav>

            </div>
        </header>

      <main>{children}</main>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </>
  )
}

export default Layout
