import React, {Component} from 'react'

class Index extends Component {

   render() {
      return(
         <div>
            <form method="POST" name="Contact" netlify>
               <label for="fname"> Nom </label>
               <br/>
               <input type="text" id="fname" name="firstname" />
               <br/>
               <br/>
               <label for="lname"> Nom </label>
               <br/>
               <input type="text" id="lname" name="lastname" />
               <br/>
               <br/>
               <label for="email"> Email </label>
               <br/>
               <input type="text" id="email" name="email" />
               <br/>
               <br/>
               <label for="message"> Message </label>
               <br/>
               <textarea name="message" id="message" name="lastname"></textarea>
               <br/>
               <br/>
               <input type="submit" value="submit" />
            </form>
         </div>
      )
   }
}

export default Index