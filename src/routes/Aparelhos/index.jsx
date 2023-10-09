import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Aparelhos() {
  const [aparelhos, setAparelhos] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/aparelhos')
      .then((response) => response.json())
      .then((data) => setAparelhos(data))
      .catch((error) => {console.error('Erro ao obter aparelhos:', error);});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.listProducts}>
        <h2>Smartphones Disponíveis</h2>
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
              <Link to={`/aparelhos/${aparelho.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aparelhos;
