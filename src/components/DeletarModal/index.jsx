import React from 'react';
import styles from './index.module.css';

function ModalDeletar({ aparelho, confirmDelete, closeModal }) {
  return (
    <div className={styles.modalContainer}>
      <h2 className={styles.heading}>Confirmar Exclusão</h2>
      <p className={styles.message}> Você tem certeza que deseja excluir o aparelho{' '}
        <span className={styles.productName}>{aparelho.nome}</span>?</p>
      <div className={styles.buttonContainer}>
        <button onClick={confirmDelete} className={`${styles.button} ${styles.confirmButton}`}>
          Confirmar
        </button>
        <button onClick={closeModal} className={`${styles.button} ${styles.cancelButton}`}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModalDeletar;