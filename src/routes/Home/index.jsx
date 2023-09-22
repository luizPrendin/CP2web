import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import aparelhosData from '../../data/aparelhosData.jsx';

function Home() {
  // IDs dos smartphones que serão destacados
  const destaquesIds = [2, 5];

  // Filtrar os smartphones com base nos IDs de destaque
  const destaques = aparelhosData.filter((smartphone) =>
    destaquesIds.includes(smartphone.id)
  );

  return (
    <div className={styles.container}>
      <div className={styles.promotionCardContainer}>
        <div className={styles.promotionCard}>
          <h3>Oferta Especial</h3>
          <p>Economize $100 em qualquer smartphone com o código "GARATO100".</p>
        </div>
        <div className={styles.promotionCard}>
          <h3>Smartphones em Destaque</h3>
          <p>Explore nossa seleção de smartphones de última geração.</p>
        </div>
      </div>

      <div className={styles.featuredProducts}>
        <h2>Smartphones em Destaque</h2>
        <Link to="/aparelhos" className={styles.viewAllLink}>
          Ver Todos os Smartphones
        </Link>
        {destaques.map((destaque) => (
          <div key={destaque.id} className={styles.product}>
            <img
              src={destaque.imagem}
              alt={destaque.nome}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{destaque.nome}</h3>
              <p>{destaque.descricaoCurta}</p>
              <p className={styles.productPrice}>{destaque.preco}</p>
              <Link to={`/aparelhos/${destaque.id}`} className={styles.detailsButton}>
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
