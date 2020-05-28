import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bienvenue dans votre boutique</h1>
    {/* <form name="contact" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> */}
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <form 
    method="post" 
    name="contact" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field">
      
        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">
            Nom
          </label>
          <input type="text" name="firstName" />

        </div>
        <input type="hidden" name="form-name" value="contact" />
        <input type="submit" value="envoyer" />
 
    </form> */}
  </Layout>
)

export default IndexPage
