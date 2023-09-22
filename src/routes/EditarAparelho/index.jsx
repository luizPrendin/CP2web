import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import aparelhosData from "../../data/aparelhosData";

function EditarAparelho() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Encontre o aparelho pelo ID
    const aparelho = aparelhosData.find((item) => item.id === parseInt(id));

    // Estado para acompanhar as edições
    const [editedAparelho, setEditedAparelho] = useState(aparelho);
    const [imageFile, setImageFile] = useState(null);

    // Atualizar o aparelho com as edições
    const updateAparelho = (aparelho) => {
        const index = aparelhosData.findIndex((item) => item.id === aparelho.id);
        aparelhosData[index] = aparelho;
    };

    // Função para lidar com o upload de imagem
    const handleImageUpload = (files) => {
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                // Quando o upload é bem-sucedido, atualize o estado do arquivo de imagem
                setImageFile(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    // Função para lidar com as alterações nos campos de edição
    const handleFieldChange = (field, value) => {
        setEditedAparelho({
            ...editedAparelho,
            [field]: value,
        });
    };

    // Função para salvar as edições
    const handleSave = () => {
        if (editedAparelho) {
            if (imageFile) {
                // Se houver uma nova imagem, atualize a propriedade 'imagem' do aparelho
                editedAparelho.imagem = imageFile;
            }

            // Realize a lógica de atualização aqui
            updateAparelho(editedAparelho);
            navigate(`/aparelhos/${id}`);
        }
    };

    if (!aparelho) {
        return <p>Aparelho não encontrado.</p>;
    }


    return (
        <div>
            <h2>Editar {aparelho.nome}</h2>
            <label htmlFor="imagem">Upload de Imagem:</label>
            <input
                type="file"
                id="imagem"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files)}
            />
            {imageFile ? (
                <img src={imageFile} alt={editedAparelho.nome} />
            ) : (
                <img src={editedAparelho.imagem} alt={editedAparelho.nome} />
            )}
            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                id="nome"
                value={editedAparelho.nome}
                onChange={(e) => handleFieldChange('nome', e.target.value)}
            />
            <label htmlFor="descricaoCurta">Descrição Curta:</label>
            <textarea
                id="descricaoCurta"
                value={editedAparelho.descricaoCurta}
                onChange={(e) => handleFieldChange('descricaoCurta', e.target.value)}
            />
            <label htmlFor="descricaoExtensa">Descrição Extensa:</label>
            <textarea
                id="descricaoExtensa"
                value={editedAparelho.descricaoExtensa}
                onChange={(e) => handleFieldChange('descricaoExtensa', e.target.value)}
            />
            <label htmlFor="preco">Preço:</label>
            <input
                type="text"
                id="preco"
                value={editedAparelho.preco}
                onChange={(e) => handleFieldChange('preco', e.target.value)}
            />
            <button onClick={handleSave}>Salvar</button>
        </div>
    );
}

export default EditarAparelho;