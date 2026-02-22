# 📊 Projeto Admin - Painel de Administração

Este projeto é o **painel de administração** do sistema de pedidos de materiais.  
Ele permite que o escritório visualize e gerencie os pedidos enviados pelos trabalhadores através do aplicativo (React Native) e do backend (Node/Express).

---

## 🚀 Tecnologias utilizadas

- React (frontend web)
- React Router DOM (navegação entre páginas)
- Axios (requisições HTTP)
- Material UI (componentes visuais opcionais)
- Node.js / Express (backend - já existente em outro repositório)
- Banco de dados (MongoDB/MySQL/PostgreSQL, conforme configurado no backend)

---

## 📂 Estrutura do sistema

- **App (React Native):** trabalhadores enviam pedidos.
- **Backend (Node/Express):** recebe e armazena os pedidos no banco de dados.
- **Admin (React Web):** painel para o escritório visualizar e atualizar status dos pedidos, controlar estoque e gerenciar usuários.

Fluxo:
App (React Native) → Backend (API) → Banco de Dados → Painel Admin (React Web)

---

## ⚙️ Instalação e execução

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Projeto-admin.git
cd Projeto-admin
```

### 2. Instalar dependências

npm install

### 3. Rodar o projeto

npm start

O painel estará disponível em:
http://localhost:3000

🔗 Conexão com o backend
O painel consome a API do backend.
Certifique-se de que o backend esteja rodando e acessível.
Exemplo de rotas esperadas:

- GET /pedidos → lista todos os pedidos
- PUT /pedidos/:id → atualiza status de um pedido
- GET /estoque → lista materiais disponíveis
- GET /usuarios → lista usuários cadastrados
  No código, ajuste a URL da API conforme necessário:
  axios.get("http://localhost:3000/pedidos")

📋 Funcionalidades

- Listar pedidos recebidos
- Mostrar trabalhador, materiais, data e status
- Atualizar status do pedido (ex.: "Encomendado", "Finalizado")
- Controle de estoque (materiais e quantidades)
- Lista de usuários cadastrados
- Dashboard inicial com visão geral

👩‍💻 Contribuição

- Faça um fork do projeto
- Crie uma branch para sua feature (git checkout -b minha-feature)
- Commit suas alterações (git commit -m 'Adicionei minha feature')
- Faça push para a branch (git push origin minha-feature)
- Abra um Pull Request

📜 Licença
Este projeto é de uso interno e pode ser adaptado conforme necessidade da equipe.
