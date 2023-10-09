import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './index.module.css';

function VisualizarAparelho() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [aparelho, setAparelho] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/aparelhos/${id}`)
      .then((response) => response.json())
      .then((data) => setAparelho(data))
      .catch((error) => {console.log('Erro ao carregar aparelho:', error);});
  }, [id]);

  // Função para lidar com a exclusão do aparelho
  const handleDelete = () => {
    fetch(`http://localhost:5000/aparelhos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/aparelhos');
      })
      .catch((error) => {
        console.log('Erro ao excluir aparelho:', error);
      });
  };

  if (!aparelho) {
    return <p>Aparelho não encontrado.</p>;
  }


  return (
    <div className={styles.container}>
      <h2>Detalhes de {aparelho.nome}</h2>
      <img src={aparelho.imagem} alt={aparelho.nome} className={styles.smartphoneImage} />
      <p className={styles.descricaoExtensa}>{aparelho.descricaoExtensa}</p>
      <p className={styles.preco}>Preço: R$ {aparelho.preco}</p>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Excluir Aparelho
      </button>
      <button onClick={() => navigate(`/aparelhos/${id}/editar`)} className={styles.editButton}>
        Editar Aparelho
      </button>
      <button onClick={() => navigate('/aparelhos')} className={styles.goBackLink}>
        Voltar para Lista de Aparelhos
      </button>
    </div>
  );
}

export default VisualizarAparelho;
