/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
                        <li><a href="/contacts/contactForm">Contact</a></li>
                        <li><a href="/stripe/products-stripe-checkout">Checkout Stripe</a></li>
                        <li><a href="/categories/">Catégorie</a></li>
                        <li><a href="/products/products">Produit</a></li>
                        <li><a href="#">Mon compte</a></li>
                        <li><a href="/blogs/blog">Blog</a></li>
                    </ul>
                </div>
                <div className="second-div">
                    <nav style={{ marginLeft: "10%" }}>
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
