import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Home() {
  const [destaques, setDestaques] = useState([]);
  
  useEffect(() => {
    //Solicitação GET para obter os smartphones em destaque
    fetch('http://localhost:5000/aparelhos',)
    .then((response)=> response.json())
    .then((data) => {
      //Filtrar os smartphones destque pelo ID
      const destaquesIds = [2, 5];
      const smartphonesDestaques = data.filter((aparelho) => 
      destaquesIds.includes(aparelho.id));
      setDestaques(smartphonesDestaques);
    })
    .catch((error) => 
      console.log('Erro ao obter destaques:', error));
    }, []);  

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
        {destaques.map((aparelho) => (
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

export default Home;
