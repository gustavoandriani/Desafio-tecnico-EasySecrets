import React from 'react';

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div style={{
      backgroundColor: "#0f172a",
      border: "none",
      color: "#fff",
      padding: "10px",
      borderRadius: "8px",
    }}>
      <p style={{ color: "#94a3b8", marginBottom: "4px" }}>{label}</p>
      {payload.map((entry, index) => (
        <p key={`item-${index}`} style={{ color: entry.color }}>
          {entry.name.charAt(0).toUpperCase() + entry.name.slice(1)}: {entry.value}
        </p>
      ))}
    </div>
  );
};

export default CustomTooltip;