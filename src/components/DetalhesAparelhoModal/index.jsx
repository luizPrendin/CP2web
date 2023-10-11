import React from 'react';
import Modal from 'react-modal';
import './Index.scss';

Modal.setAppElement('#root');

function DetalhesAparelhoModal({ aparelho, closeModal }) {
  return (
    
      <div className='container'>
      <h2 >Detalhes do Aparelho</h2>
      <h3>{aparelho.nome}</h3>
      <div >
        <img
          src={aparelho.imagem}
          alt={aparelho.nome}
          
        />
      </div>
      <div >
        <p><strong>Nome:</strong> {aparelho.nome}</p>
        <p><strong>Descrição Curta:</strong> {aparelho.descricaoCurta}</p>
        <p><strong>Descrição Extensa:</strong> {aparelho.descricaoExtensa}</p>
        <p><strong>Preço:</strong> {aparelho.preco}</p>
      </div>
      <button onClick={closeModal} >
        Fechar
      </button>
      
    </div>
  );
}

export default DetalhesAparelhoModal;
