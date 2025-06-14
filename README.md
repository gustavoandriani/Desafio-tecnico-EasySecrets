
# 📊 Dashboard de Vendas — Desafio EasySecrets

Este projeto é um painel visual de vendas mensais que apresenta gráficos interativos e responsivos, desenvolvido com **React + TypeScript**. Permite alternar entre diferentes visualizações de dados (área, barras e pizza), com comparação e detalhamento por produto.

---

## 💻 Acesse Já!
**😱 *Do computador ou do celular!!***  
**👇 Você pode acessar clicando no link abaixo.**  
🔗 [Desafio EasySecrets](http://www.desafiotecnico-easysecrets.netlify.app)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/58e066bc-8073-4e93-9da8-fd317320230d/deploy-status)](https://app.netlify.com/projects/desafiotecnico-easysecrets/deploys)

---

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gustavoandriani/Desafio-tecnico-EasySecrets.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd Desafio-tecnico-EasySecrets
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

4. **Inicie o projeto:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Decisões técnicas

### 📚 Escolha das bibliotecas

| Biblioteca       | Justificativa                                                                 |
|------------------|-------------------------------------------------------------------------------|
| **React** + **TypeScript** | Base moderna e tipada para melhor organização e segurança de tipos. |
| **Vite**         | Ferramenta de build rápida e moderna, com hot reload nativo.                  |
| **Recharts**     | Biblioteca robusta e declarativa para gráficos interativos e responsivos.     |
| **react-icons**  | Para inclusão rápida de ícones vetoriais em SVG.                              |
| **Tailwind CSS** | Permite estilização ágil e responsiva com classes utilitárias, ideal para prototipagem rápida. |

---

### 🗂️ Estrutura de pastas

```
src/
│
├── components/              # Componentes reutilizáveis e gráficos
│   ├── BotaoProduto.tsx     # Botão customizado com ícones e destaque
│   ├── CustomTooltip.tsx    # Tooltip personalizada para todos os gráficos
│   ├── GraficoBars.tsx      # Gráfico de barras para comparação entre produtos
│   ├── GraficoPizza.tsx     # Gráfico de pizza com rótulos percentuais
│   └── GraficoVendas.tsx    # Gráfico de área detalhado por produto
│
├── data/                    # Dados simulados para o projeto
│   └── vendas.json          # Dataset de vendas mensais por produto
│
├── App.tsx                  # Componente principal e layout da aplicação
└── main.tsx                 # Entrada principal da aplicação
```

---

## 💡 Diferenciais implementados

- ✅ **Três tipos de visualizações**: área (por produto), barras (comparativo) e pizza (distribuição percentual).
- ✅ **Tooltip customizado** com visual escuro e dados formatados.
- ✅ **Componente de botão reutilizável** com destaque visual do item selecionado.
- ✅ **Gráficos responsivos** com `ResponsiveContainer` do Recharts.
- ✅ **Rótulos percentuais personalizados** no gráfico de pizza.
- ✅ **Transição suave de gráficos** com botão de alternância.
- ✅ **Design mobile-first** usando Tailwind com boas práticas responsivas.

---

## 👤 Autor

Desenvolvido por **Gustavo José Andriani**  
🔗 [LinkedIn](https://www.linkedin.com/in/gustavoandriani)  
🔗 [GitHub](https://github.com/gustavoandriani)
