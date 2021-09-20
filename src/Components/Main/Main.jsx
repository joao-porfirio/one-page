import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';
const Main = () => {
  return (
    <section className="card">        
     <article className="card__container">
       <div className="card__thumbnail">
         <div className="card__thumbnail-first"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
     </article>
     <article className="card__container">
       <div className="card__thumbnail">
       <div className="card__thumbnail-second"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
      </article>
     <article className="card__container">
       <div className="card__thumbnail">
       <div className="card__thumbnail-third"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
      </article>

     <article className="card__container">
       <div className="card__thumbnail">
         <div className="card__thumbnail-fourth"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
     </article>
     <article className="card__container">
       <div className="card__thumbnail">
       <div className="card__thumbnail-fifth"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
      </article>
     <article className="card__container">
       <div className="card__thumbnail">
       <div className="card__thumbnail-sixth"></div>
       </div>   
       <div className="card__content">
         <h2 className="card__content-titulo">Título do card</h2>
         <p className="card__content-descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.</p>
       </div>
      </article>
    </section>
  )
}

export default Main
