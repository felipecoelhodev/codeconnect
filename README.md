# Code Connect

O **Code Connect** é uma plataforma moderna de compartilhamento de conteúdo voltada para desenvolvedores. O projeto foca em uma experiência de usuário fluida, com sistema de autenticação, feed de postagens, interações sociais (curtidas e comentários) e total responsividade.

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

2. Certifique-se de que a API está rodando em `http://localhost:3000` (conforme configurado em `api/index.js`).
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Mobile First

O projeto utiliza Media Queries para transformar o menu lateral (`Aside`) em um rodapé fixo em telas menores que 1000px, otimizando o espaço para navegação em dispositivos móveis.
