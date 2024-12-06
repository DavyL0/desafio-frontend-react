import React, { useState } from "react";

const AvatarFallback = ({ name, imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  // Gerar as iniciais
  const generateInitials = (name) => {
    if (!name) return "";
    const words = name.split("-");
    if (words.length === 1) return words[0][0].toUpperCase(); // Ex: "P"
    return `${words[0][0]}${words[1][0]}`.toUpperCase(); // Ex: "PA"
  };

  const initials = generateInitials(name);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#ddd", // cor neutra de fundo
        fontSize: "24px", // Tamanho da fonte para as iniciais
        color: "#000", // Cor padrão do texto
        textTransform: "uppercase", // Garantir que as iniciais sejam em maiúsculo
        overflow: "hidden",
      }}
    >
      {imageError || !imageUrl ? (
        <span>{initials}</span> // Exibe as iniciais sem estilo extra
      ) : (
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImageError(true)} // Mostra fallback ao falhar
        />
      )}
    </div>
  );
};

export default AvatarFallback;
