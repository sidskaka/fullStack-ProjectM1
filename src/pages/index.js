import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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

    <form 
    method="post" 
    name="contact" 
    data-netlify="true" 
    data-netlify-honeypot="bot-field">
      

        <input type="text" name="name" />
 
      <button>SEND</button>
    </form>
  </Layout>
)

export default IndexPage
