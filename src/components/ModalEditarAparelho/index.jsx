import  { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./index.module.css";
import './Index.scss'

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
      className="modal"
      overlayClassName="overlay"
    >
      <div className="containerEdit">
        <h2 className={styles.heading}>Editar Aparelho: {aparelho.nome}</h2>
        <label htmlFor="imagem" >
          Upload de Imagem:
        </label>
       
        {editedAparelho.imagem && (
          <img
            src={editedAparelho.imagem}
            alt={editedAparelho.nome}
           className="Img-atual"
          />
        )}
        <div className="inputImg">
          <input
          type="file"
          id="imagem"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files)}
          
        />
        </div>
         <div className="conteudo">
            <label htmlFor="nome">
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
         </div>
        <div className="botoes">
            <button onClick={handleEdit} className="btnSave">
          Salvar Edição
        </button>
        <button
          onClick={closeEditModal}
          className="btnCancel"
        >
          Cancelar
        </button>
        </div>
        
      </div>
    </Modal>
  );
}

export default ModalEditarAparelho;