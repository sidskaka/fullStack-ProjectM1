import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form name="contact" netlify>
      <p>
        <input type="text" placeholder="votre nom" name="name" />
      </p>
      <p>
        <input type="email" placeholder="votre email" name="email" />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default IndexPage
