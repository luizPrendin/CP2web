import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addAparelho } from '../../data/aparelhosData.jsx';

function InserirAparelho() {

    const { id } = useParams();
    const navigate = useNavigate();

    // Estado para acompnhar os dados do novo aparelho
    const [novoAparelho, setNovoAparelho] = useState({
        nome: '',
        descricaoCurta: '',
        descricaoExtensa: '',
        preco: '',
        imagem: '',
    });

    // Função para lidar com o upload de imagem
    const handleImagemUpload = (files) => {
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                // Quando o upload é bem sucedido, atualiza o estado do arquivo de imagem
                setNovoAparelho({
                    ...novoAparelho,
                    imagem: e.target.result,
                });
            };

            reader.readAsDataURL(file);
        }
    };

    // Função para lidar com as alterações nos campos de inserção
    const handleFildChange = (field, value) => {
        setNovoAparelho({
            ...novoAparelho,
            [field]: value,
        });
    };

    // Função para adicionar o aparelho
    const handleInsert = () => {
        if (novoAparelho) {
            //Salvar no novo aparelho
            addAparelho(novoAparelho);
            // Navega de volta para a página de aparelhos
            navigate('/aparelhos');
        }
    };

    return (
        <div>
            <h2>Inserir novo Aparelho</h2>
            <label htmlFor="Imagem">Upload de Imagem:</label>
            <input type="file" id="imagem" accept="imagem/*" onChange={(e) => handleImagemUpload(e.target.files)} />
            {novoAparelho.imagem && (
                <img src={novoAparelho.imagem} alt={novoAparelho.nome} />
            )}
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={novoAparelho.nome} onChange={(e) => handleFildChange('nome', e.target.value)} />
            <label htmlFor="descricaoCurta">Descrição Curta:</label>
            <textarea id="descricaoCurta" value={novoAparelho.descricaoCurta} onChange={(e) =>
                handleFildChange('descricaoCurta', e.target.value)}></textarea>
            <label htmlFor="descricaoExtensa">Descrição Extensa:</label>
            <textarea id="descricaoExtensa" value={novoAparelho.descricaoExtensa} onChange={(e) => handleFildChange('descricaoExtensa', e.target.value)}></textarea>
            <label htmlFor="preco">Preço:</label>
            <input type="text" id="preco " value={novoAparelho.preco} onChange={(e) => handleFildChange('preco', e.target.value)} />
            <button onClick={handleInsert}>Inserir</button>
        </div>
    );

}

export default InserirAparelho;