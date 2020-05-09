import React, { Component } from 'react'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class ContactForm extends Component {

   render() {
      return (
         <Layout>
         <SEO title="Home" />         
            <div>
               <form 
                  method="post" 
                  name="contact" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field">
         
                  {/* <input type="text" name="name" placeholder="Your name" /> */}
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
            
               </form>
            </div>
         </Layout>
      )
   }
}

export default ContactForm
