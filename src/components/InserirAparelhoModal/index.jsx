import React, { useState } from "react";
import styles from './index.module.css';

function ModalInserirAparelho({ closeInsertModal, refreshAparelhos }) {
  const [novoAparelho, setNovoAparelho] = useState({
    nome: '',
    descricaoCurta: '',
    descricaoExtensa: '',
    preco: '',
    imagem: '',
  });

  const handleImageUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setNovoAparelho({
          ...novoAparelho,
          imagem: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (field, value) => {
    setNovoAparelho({
      ...novoAparelho,
      [field]: value,
    });
  };

  const handleInsert = () => {
    if (novoAparelho) {
      fetch('http://localhost:5000/aparelhos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoAparelho)
      })
        .then((response) => response.json())
        .then(() => {
          refreshAparelhos();
          closeInsertModal();
        })
        .catch((error) => {
          console.error('Erro ao inserir aparelho:', error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Inserir Novo Aparelho</h2>
      <label htmlFor="imagem" className={styles.label}>Upload de Imagem:</label>
      <input
        type="file"
        id="imagem"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files)}
        className={styles.input}
      />
      {novoAparelho.imagem && (
        <img src={novoAparelho.imagem} alt={novoAparelho.nome} className={styles.smartphoneImage} />
      )}
      <label htmlFor="nome" className={styles.label}>Nome:</label>
      <input
        type="text"
        id="nome"
        value={novoAparelho.nome}
        onChange={(e) => handleFieldChange('nome', e.target.value)}
        className={styles.input}
      />
      <label htmlFor="descricaoCurta" className={styles.label}>Descrição Curta:</label>
      <textarea
        id="descricaoCurta"
        value={novoAparelho.descricaoCurta}
        onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
        className={`${styles.textarea} ${styles.descricaoCurta}`}
      />
      <label htmlFor="descricaoExtensa" className={styles.label}>Descrição Extensa:</label>
      <textarea
        id="descricaoExtensa"
        value={novoAparelho.descricaoExtensa}
        onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
        className={`${styles.textarea} ${styles.descricaoExtensa}`}
      />
      <label htmlFor="preco" className={styles.label}>Preço:</label>
      <input
        type="text"
        id="preco"
        value={novoAparelho.preco}
        onChange={(e) => handleFieldChange('preco', e.target.value)}
        className={styles.input}
      />
      <button onClick={handleInsert} className={styles.button}>Inserir</button>
      <button onClick={closeInsertModal} className={styles.cancelButton}>Cancelar</button>
    </div>
  );
}

export default ModalInserirAparelho;