import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/45213677?s=460&u=df400a54cfdd218c588913c30eb86324f1f60883&v=4" alt="Rai Bizerra Maciel"/>
            <div>
              <strong>Rai Bizerra</strong>
              <span>Programação</span>
            </div>
          </header>
          <p>
            Responsável por desenvolver diversas jabirocas atômicas, poucas funcionais, porém criativas e interessantes de se observar a uma distância segura.
          </p>
          <footer>
            <p>
              Preço/Hora
              <strong>R$ 700,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
       </article>
  )
}

export default TeacherItem;
