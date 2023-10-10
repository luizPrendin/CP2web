import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./index.module.css";

Modal.setAppElement("#root");

function ModalEditarAparelho({ aparelho, closeEditModal, refreshAparelhos }) {
  const [editedAparelho, setEditedAparelho] = useState({ ...aparelho });

  useEffect(() => {
    setEditedAparelho({ ...aparelho });
  }, [aparelho]);

  const handleImageUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setEditedAparelho({
          ...editedAparelho,
          imagem: e.target.result,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (field, value) => {
    setEditedAparelho({
      ...editedAparelho,
      [field]: value,
    });
  };

  const handleEdit = () => {
    if (editedAparelho) {
      fetch(`http://localhost:5000/aparelhos/${aparelho.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedAparelho),
      })
        .then((response) => response.json())
        .then(() => {
          refreshAparelhos();
          closeEditModal();
        })
        .catch((error) => {
          console.error("Erro ao editar aparelho:", error);
        });
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeEditModal}
      contentLabel="Modal de Edição"
      className={styles.modal}
      overlayClassName="overlay"
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Editar Aparelho: {aparelho.nome}</h2>
        <label htmlFor="imagem" className={styles.label}>
          Upload de Imagem:
        </label>
        <input
          type="file"
          id="imagem"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files)}
          className={styles.input}
        />
        {editedAparelho.imagem && (
          <img
            src={editedAparelho.imagem}
            alt={editedAparelho.nome}
            className={styles.smartphoneImage}
          />
        )}
        <label htmlFor="nome" className={styles.label}>
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          value={editedAparelho.nome}
          onChange={(e) => handleFieldChange("nome", e.target.value)}
          className={styles.input}
        />
        <label htmlFor="descricaoCurta" className={styles.label}>
          Descrição Curta:
        </label>
        <textarea
          id="descricaoCurta"
          value={editedAparelho.descricaoCurta}
          onChange={(e) => handleFieldChange("descricaoCurta", e.target.value)}
          className={`${styles.textarea} ${styles.descricaoCurta}`}
        />
        <label htmlFor="descricaoExtensa" className={styles.label}>
          Descrição Extensa:
        </label>
        <textarea
          id="descricaoExtensa"
          value={editedAparelho.descricaoExtensa}
          onChange={(e) => handleFieldChange("descricaoExtensa", e.target.value)}
          className={`${styles.textarea} ${styles.descricaoExtensa}`}
        />
        <label htmlFor="preco" className={styles.label}>
          Preço:
        </label>
        <input
          type="text"
          id="preco"
          value={editedAparelho.preco}
          onChange={(e) => handleFieldChange("preco", e.target.value)}
          className={styles.input}
        />
        <button onClick={handleEdit} className={styles.button}>
          Salvar Edição
        </button>
        <button
          onClick={closeEditModal}
          className={styles.cancelButton}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  );
}

export default ModalEditarAparelho;