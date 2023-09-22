import S22 from '../assets/img/celulares/S22.png';
import Pro14 from '../assets/img/celulares/Pro14.jpg';
import GP6 from '../assets/img/celulares/GP6.jpg';
import O9T from '../assets/img/celulares/9T.jpg';
import Mi11 from '../assets/img/celulares/Mi11.jpg';

export const aparelhosData = [
  {
    id: 1,
    nome: 'Samsung Galaxy S22',
    descricaoCurta: 'O Samsung Galaxy S22 é um smartphone poderoso com uma tela AMOLED de 6.2 polegadas, câmera de 50MP e 128GB de armazenamento.',
    descricaoExtensa: 'O Samsung Galaxy S22 é um dos smartphones mais avançados do mercado. Ele apresenta uma tela AMOLED de 6.2 polegadas com cores vibrantes e alta resolução. A câmera de 50MP permite tirar fotos incríveis em qualquer situação, enquanto o armazenamento de 128GB oferece espaço suficiente para todas as suas fotos, vídeos e aplicativos. Este smartphone também possui um desempenho rápido, permitindo que você execute várias tarefas sem problemas. A bateria de longa duração garante que você não precise se preocupar com recargas constantes. Com o Samsung Galaxy S22, você terá uma experiência premium em um dispositivo compacto e elegante.',
    preco: 'R$899,99',
    imagem: S22,
  },
  {
    id: 2,
    nome: 'iPhone 14 Pro',
    descricaoCurta: 'O iPhone 14 Pro é o mais recente da Apple, com uma tela Retina de 6.1 polegadas, câmera de 64MP e 256GB de armazenamento.',
    descricaoExtensa: 'O iPhone 14 Pro da Apple é a escolha perfeita para quem busca o que há de melhor em tecnologia. Sua tela Retina de 6.1 polegadas oferece cores vibrantes e detalhes nítidos. A câmera de 64MP permite capturar fotos e vídeos impressionantes, enquanto o amplo armazenamento de 256GB garante que você tenha espaço suficiente para todas as suas mídias e aplicativos. Este smartphone também oferece desempenho excepcional, sendo capaz de lidar com tarefas intensivas com facilidade. Se você procura inovação e qualidade, o iPhone 14 Pro é a escolha certa.',
    preco: 'R$1.099,99',
    imagem: Pro14,
  },
  {
    id: 3,
    nome: 'Google Pixel 6',
    descricaoCurta: 'O Google Pixel 6 é conhecido por sua câmera de 50MP e desempenho rápido. Possui uma tela OLED de 6.4 polegadas e 128GB de armazenamento.',
    descricaoExtensa: 'O Google Pixel 6 é um smartphone que se destaca pela sua câmera de 50MP, capaz de capturar fotos incrivelmente detalhadas. Sua tela OLED de 6.4 polegadas oferece cores vívidas e pretos profundos. Com 128GB de armazenamento, você terá espaço de sobra para suas fotos, vídeos e aplicativos favoritos. Além disso, o desempenho rápido deste smartphone permite que você execute qualquer tarefa com facilidade. O Google Pixel 6 oferece uma experiência Android pura e é uma excelente escolha para entusiastas de fotografia.',
    preco: 'R$799,99',
    imagem: GP6,
  },
  {
    id: 4,
    nome: 'OnePlus 9T',
    descricaoCurta: 'O OnePlus 9T oferece um excelente desempenho com uma tela Fluid AMOLED de 6.55 polegadas, câmera de 48MP e 256GB de armazenamento.',
    descricaoExtensa: 'O OnePlus 9T é um smartphone projetado para oferecer um desempenho excepcional. Sua tela Fluid AMOLED de 6.55 polegadas oferece uma experiência visual imersiva, enquanto a câmera de 48MP captura fotos de alta qualidade. Com 256GB de armazenamento, você terá espaço suficiente para todos os seus arquivos. Este smartphone é alimentado por um processador poderoso, garantindo que você possa executar aplicativos e jogos exigentes sem problemas. Se você busca desempenho e qualidade, o OnePlus 9T é uma escolha sólida.',
    preco: 'R$699,99',
    imagem: O9T,
  },
  {
    id: 5,
    nome: 'Xiaomi Mi 11 Lite',
    descricaoCurta: 'O Xiaomi Mi 11 Lite é um smartphone acessível com uma tela AMOLED de 6.55 polegadas, câmera de 64MP e 64GB de armazenamento.',
    descricaoExtensa: 'O Xiaomi Mi 11 Lite oferece um excelente custo-benefício com uma tela AMOLED de 6.55 polegadas que exibe cores vivas e detalhes nítidos. Sua câmera de 64MP permite que você capture fotos de alta resolução, e o armazenamento de 64GB oferece espaço suficiente para suas necessidades diárias. Este smartphone oferece um desempenho sólido para tarefas do dia a dia. Se você procura um smartphone acessível com recursos de qualidade, o Xiaomi Mi 11 Lite é uma excelente escolha.',
    preco: 'R$499,99',
    imagem: Mi11,
  }
];
 
export const getAparelhos = () => {
  return aparelhosData;
};

export const addAparelho = (aparelho) => {
  aparelho.id = aparelhosData.length + 1;
  aparelhosData.push(aparelho);
};

export const updateAparelho = (aparelho) => {
  const index = aparelhosData.findIndex((item) => item.id === aparelho.id);
    if(index !== -1) {
      aparelhosData[index] = aparelho;
    }
};

export const deleteAparelho = (id) => {
  aparelhosData = aparelhosData.filter((item) => item.id
  !== id);
};

export default aparelhosData;
