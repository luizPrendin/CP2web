import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './index.module.css';
import DeletarModal from '../../components/DeletarModal/index';
import InserirAparelhoModal from '../../components/InserirAparelhoModal/index';
import ModalEditarAparelho from '../../components/ModalEditarAparelho/index';
import DetalhesModal from '../../components/DetalhesAparelhoModal/index';

// Inicialize o react-modal
Modal.setAppElement('#root');

function Aparelhos() {
  const [aparelhos, setAparelhos] = useState([]);
  const [aparelhoToDelete, setAparelhoToDelete] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para controlar a abertura do modal de exclusão
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false); // Estado para controlar a abertura do modal de inserção
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar a abertura do modal de edição
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false); // Estado para controlar a abertura do modal de detalhes
  const [editAparelho, setEditAparelho] = useState(null); // Estado para controlar o aparelho a ser editado
  const [detailsAparelho, setDetailsAparelho] = useState(null); // Estado para controlar o aparelho a ser detalhado

  useEffect(() => {
    fetch('http://localhost:5000/aparelhos')
      .then((response) => response.json())
      .then((data) => setAparelhos(data))
      .catch((error) => console.error('Erro ao obter aparelhos:', error));
  }, []);

  // Função para abrir o modal de exclusão
  const openDeleteModal = (aparelho) => {
    setAparelhoToDelete(aparelho);
    setIsDeleteModalOpen(true);
  };

  // Função para fechar o modal de exclusão
  const closeDeleteModal = () => {
    setAparelhoToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Função para abrir o modal de inserção
  const openInsertModal = () => {
    setIsInsertModalOpen(true);
  };

  // Função para fechar o modal de inserção
  const closeInsertModal = () => {
    setIsInsertModalOpen(false);
  };

  // Função para abrir o modal de edição
  const openEditModal = (aparelho) => {
    setEditAparelho(aparelho);
    setIsEditModalOpen(true);
  };

  // Função para fechar o modal de edição
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditAparelho(null);
  };

  // Função para abrir o modal de detalhes
  const openDetailsModal = (aparelho) => {
    setDetailsAparelho(aparelho);
    setIsDetailsModalOpen(true);
  };

  // Função para fechar o modal de detalhes
  const closeDetailsModal = () => {
    setDetailsAparelho(null);
    setIsDetailsModalOpen(false);
  };

  // Função para lidar com a exclusão do aparelho
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/aparelhos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        closeDeleteModal();
        fetch('http://localhost:5000/aparelhos')
          .then((response) => response.json())
          .then((data) => setAparelhos(data))
          .catch((error) => console.error('Erro ao obter aparelhos:', error));
      })
      .catch((error) => {
        console.error('Erro ao excluir aparelho:', error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Smartphones Disponíveis</h2>
      <button onClick={openInsertModal} className={`${styles.insertButton} ${styles.greenButton}`}>
        Inserir Novo Aparelho
      </button>
      {aparelhos.map((aparelho) => (
        <div key={aparelho.id} className={styles.product}>
          <img
            src={aparelho.imagem}
            alt={aparelho.nome}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h3>{aparelho.nome}</h3>
            <p>{aparelho.descricaoCurta}</p>
            <p className={styles.productPrice}>{aparelho.preco}</p>
            <div className={styles.buttonContainer}>
              <button onClick={() => openDetailsModal(aparelho)} className={`${styles.detailsButton} ${styles.blueButton}`}>
                Ver Detalhes
              </button>
              <button onClick={() => openEditModal(aparelho)} className={`${styles.editButton} ${styles.yellowButton}`}>
                Editar
              </button>
              <button onClick={() => openDeleteModal(aparelho)} className={`${styles.deleteButton} ${styles.redButton}`}>
                Deletar
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal de Exclusão */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Modal de Exclusão"
        overlayClassName="overlay"
      >
        {aparelhoToDelete && (
          <DeletarModal
            aparelho={aparelhoToDelete}
            confirmDelete={() => handleDelete(aparelhoToDelete.id)}
            closeModal={closeDeleteModal}
          />
        )}
      </Modal>

      {/* Modal de Inserção */}
      <Modal
        isOpen={isInsertModalOpen}
        onRequestClose={closeInsertModal}
        contentLabel="Modal de Inserção"
        overlayClassName="overlay"
        className={styles.modal}
      >
        <InserirAparelhoModal
          closeInsertModal={closeInsertModal}
          refreshAparelhos={() => {
            fetch('http://localhost:5000/aparelhos')
              .then((response) => response.json())
              .then((data) => setAparelhos(data))
              .catch((error) => console.error('Erro ao obter aparelhos:', error));
          }}
        />
      </Modal>

      {/* Renderizar o modal de edição se estiver aberto */}
      {isEditModalOpen && (
        
          
        <ModalEditarAparelho
          
          aparelho={editAparelho}          
          closeEditModal={closeEditModal}
          refreshAparelhos={() => {
            fetch('http://localhost:5000/aparelhos')
              .then((response) => response.json())
              .then((data) => setAparelhos(data))
              .catch((error) => console.error('Erro ao obter aparelhos:', error));
          }}
          
        />
        
      )}

      {/* Modal de Detalhes */}
      <Modal
        isOpen={isDetailsModalOpen}
        onRequestClose={closeDetailsModal}
        contentLabel="Modal de Detalhes"
        overlayClassName="overlay"
        className={styles.modal}
      >
        {detailsAparelho && (
          <DetalhesModal
            aparelho={detailsAparelho}
            closeModal={closeDetailsModal}
          />
        )}
      </Modal>
    </div>
  );
}

export default Aparelhos;