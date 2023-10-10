import React from 'react';
import Modal from 'react-modal';
import styles from './index.module.css';
import './Index.scss'

Modal.setAppElement('#root');

function DetalhesAparelhoModal({ aparelho, closeModal }) {
  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.heading}>Detalhes do Aparelho</h2>
      <div className={styles.imageContainer}>
        <img
          src={aparelho.imagem}
          alt={aparelho.nome}
          className={styles.productImage}
        />
      </div>
      <div className={styles.detailsContent}>
        <p><strong>Nome:</strong> {aparelho.nome}</p>
        <p><strong>Descrição Curta:</strong> {aparelho.descricaoCurta}</p>
        <p><strong>Descrição Extensa:</strong> {aparelho.descricaoExtensa}</p>
        <p><strong>Preço:</strong> {aparelho.preco}</p>
      </div>
      <button onClick={closeModal} className={styles.closeButton}>
        Fechar
      </button>
    </div>
  );
}

export default DetalhesAparelhoModal;
