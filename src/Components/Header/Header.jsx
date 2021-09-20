import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
import header_img from '../../assets/img/image.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__column">
        <article className="header__conteudo">
          <h1 className="header__titulo">Lorem ipsum dolor sit amet</h1>
          <p className="header__descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
          <button className="header__button">Botão</button>
        </article>
      </div>
      <div className="header__column">
        <picture>
          <img className="header__logo" src={header_img} alt="Banner" />
        </picture>
      </div>
    </header>
  )
}

export default Header
