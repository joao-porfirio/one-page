import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__titulo">Entre em contato</h2>
      <form className="footer__formulario .formulario">
        <ul className="formulario__container">
          <li>
            <input type="text" id="first-name" placeholder="Nome"/>
          </li>
          <li>
            <input type="email" id="email" placeholder="E-mail"/>
          </li>
          <li>
            <input type="tel" id="phone" placeholder="Telefone"/>
          </li>
          <li>
            <textarea rows="6" id="message" placeholder="Mensagem..."></textarea>
          </li>
          <li>
            <button type="submit">Enviar mensagem</button>
          </li>
        </ul>
      </form>
    </footer>
  )
}

export default Footer
