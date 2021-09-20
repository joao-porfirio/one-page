import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import header_img from '../../assets/img/image.svg'

const Header = () => {
  return (
    <div>
      <div class="columns">
        <div class="column">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
          <input type="button" value="Botão"/>
        </div>
        <div class="column">
          <img src={header_img} alt="Banner" />
        </div>
      </div>
    </div>
  )
}

export default Header
