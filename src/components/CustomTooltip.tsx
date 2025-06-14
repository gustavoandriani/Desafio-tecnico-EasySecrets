import React from 'react';

// Definição das props esperadas pelo tooltip personalizado
interface TooltipProps {
  active?: boolean;    // Define se o tooltip deve estar visível
  payload?: any[];     // Dados passados pelo gráfico
  label?: string;      // Rótulo associado ao ponto (ex: nome do mês)
}

// Componente de tooltip personalizado para uso com gráficos
const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  // Verifica se o tooltip deve ser renderizado
  if (!active || !payload || !payload.length) return null;

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        border: "none",
        color: "#fff",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      {/* Exibe o rótulo (ex: mês)*/}
      <p style={{ color: "#94a3b8", marginBottom: "4px" }}>{label}</p>

      {/* Lista os dados recebidos com a cor correspondente */}
      {payload.map((entry, index) => (
        <p key={`item-${index}`} style={{ color: entry.color }}>
          {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}: {entry.value}
        </p>
      ))}
    </div>
  );
};

export default CustomTooltip;