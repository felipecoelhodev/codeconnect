# Code Connect

O **Code Connect** é uma plataforma moderna de compartilhamento de conteúdo voltada para desenvolvedores. O projeto foca em uma experiência de usuário fluida, com sistema de autenticação, feed de postagens, interações sociais (curtidas e comentários) e total responsividade. Segue o Link do backend: https://github.com/felipecoelhodev/codeconnectbackend

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React Router**: Gerenciamento de rotas e navegação.
- **Axios**: Cliente HTTP para consumo da API REST com uso de interceptors para autenticação.
- **CSS Modules**: Estilização isolada por componente, garantindo manutenibilidade.
- **Hooks Customizados**: Lógica extraída para `useAuth` e `usePostInteractions`.

## Funcionalidades Principais

- **Autenticação JWT**: Interceptador Axios que anexa automaticamente o `Bearer Token` do `localStorage` em cada requisição.
- **Feed Responsivo**: Layout que se adapta de uma barra lateral (desktop) para uma barra de navegação inferior (mobile).
- **Gestão de Posts**: Visualização de detalhes, curtidas e contagem de comentários em tempo real.
- **Sistema de Comentários**: Usuários autenticados podem criar, editar e excluir seus próprios comentários através de Modais.
- **Proteção de Rotas**: Componente `ProtectedRoute` que redireciona usuários não autenticados.
- **UI Componentizada**: Botões, inputs, avatares e tipografia padronizados para consistência visual.

## Como Executar o Projeto

1. Após clonar instale as dependências:

   ```bash
   npm install
   ```

2. Certifique-se de que a API está rodando em `http://localhost:3000` (conforme configurado em `api/index.js`), para isso crie um outro projeto (ele será seu backend) e siga os passos:
    ```bash
   Clone o repositório deste link : "https://github.com/felipecoelhodev/codeconnectbackend" 
    ```
    ```bash
   Instale as dependências: "npm install"
    ```
    ```bash
   Configure as variáveis de ambiente, para isso crie um arquivo .env e coloque:
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your-secret-key-here"
   ```
    ```bash
   Execute as migrações e seeds:
   # Gera o banco de dados SQLite e aplica as migrações
   "npx prisma migrate dev"
   # Popula o banco com dados iniciais (usuários e posts de exemplo)
   "npx prisma db seed"
    ```
    ```bash
   Por fim execute a API, use 1 dos 2:
   Modo desenvolvimento (com hot-reload): "npm run start:dev" (recomendado)
   Modo produção: "npm run build" "npm run start:prod"
   A API estará disponível em: http://localhost:3000
    ```
   
4.  Com o Backend, agora volte ao projeto e inicie o servidor de desenvolvimento executando o comando abaixo e abra o link gerado:
   ```bash
   npm run dev
   ```

## Mobile First

O projeto utiliza Media Queries para transformar o menu lateral (`Aside`) em um rodapé fixo em telas menores que 1000px, otimizando o espaço para navegação em dispositivos móveis.
