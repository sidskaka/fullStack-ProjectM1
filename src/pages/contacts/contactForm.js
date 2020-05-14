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
                  {/* <input type="hidden" name="form-name" value="contact" /> */}
                  <input type="submit" value="envoyer" />
            
               </form>

               <div className="container">

                  <h3 className="text-center">Contactez-nous facilement</h3><br />

                  <div className="row">
                  <div className="col-md-8">
                     <form 
                        method="post" 
                        name="contact" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field">
                        <div className="form-group">
                           <label htmlFor="firstName">
                              Nom
                           </label>
                           <input type="text" name="firstName" />
                        </div><br />
                        <input className="form-control" name="phone" type="number" placeholder="(+33)" /><br />
                        {/* <input className="form-control" name="email" type="email" placeholder="E-mail..." /><br /> */}
                        <div className="form-group">
                           <label htmlFor="email">
                              Email
                           </label>
                           <input type="email" name="email" />
                        </div>
                        <textarea className="form-control" name="text" placeholder="Dite nous comment vous aidez ?" style={{height: '150px'}}></textarea><br />
                        <input className="btn btn-primary" type="submit" value="Envoyer" /><br /><br />
                     </form>
                  </div>
                  <div class="col-md-4">
                     <b>Customer service:</b> <br />
                     Phone: +1 129 209 291<br />
                     E-mail: <a href="mailto:support@mysite.com">support@mysite.com</a><br />
                     <br /><br />
                     <b>Headquarter:</b><br />
                     Company Inc, <br />
                     Las vegas street 201<br />
                     55001 Nevada, USA<br />
                     Phone: +1 145 000 101<br />
                     <a href="mailto:usa@mysite.com">usa@mysite.com</a><br />


                  </div>
                  </div>

               </div>
            </div>
         </Layout>
      )
   }
}

export default ContactForm
