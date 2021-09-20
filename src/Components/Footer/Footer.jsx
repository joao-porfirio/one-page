import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';

const Footer = () => {
  return (
    <footer>

    
    <div class="container">
  <form>
    <ul class="flex-outer">
      <li>
        <input type="text" id="first-name" placeholder="Enter your first name here"/>
      </li>
      <li>
        <input type="text" id="last-name" placeholder="Enter your last name here"/>
      </li>
      <li>
        <input type="email" id="email" placeholder="Enter your email here"/>
      </li>
      <li>
        <input type="tel" id="phone" placeholder="Enter your phone here"/>
      </li>
      <li>
        <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
      </li>
      <li>
        <button type="submit">Submit</button>
      </li>
    </ul>
  </form>
</div>
</footer>
  )
}

export default Footer
