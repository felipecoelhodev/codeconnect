# CodeConnect

O projeto **CodeConnect** foi codado para praticar SPA(Single Page Application) com React router. A ideia da aplicação é simular uma rede social para desenvolvedores, permitindo compartilhamento de conhecimento, networking e fortalecimento da comunidade tech. Pretende-se adicionar funcionalidades como permitir que usuários publiquem conteúdos, interajam com posts de colegas e gerenciem seus perfis em um ambiente otimizado para o ecossistema de programação.

## Funcionalidades

- **Feed de Publicações:** Navegue pelos posts mais recentes da comunidade.
- **Interação:** Curta (Thumbs Up) e comente nas publicações de outros desenvolvedores.
- **Sistema de Autenticação:** Registro e Login de usuários com persistência em `localStorage`.
- **Layout Adaptativo:** Interface lateral (_Sidebar_) que se transforma em uma barra de navegação inferior (_Bottom Navigation_) em dispositivos móveis.
- **Rotas Protegidas:** Acesso ao conteúdo restrito apenas para usuários autenticados.
- **Tipografia Personalizada:** Sistema de design flexível para títulos e textos.

## Tecnologias Utilizadas

- **React.js**: Biblioteca principal para a interface.
- **React Router**: Gerenciamento de rotas e navegação.
- **CSS Modules**: Estilização isolada e modular.
- **Hooks Personalizados**: Lógica de autenticação centralizada (`useAuth`).
- **Context/LocalStorage**: Simulação de backend para persistência de dados do usuário.

## Estrutura do Projeto

O projeto segue uma arquitetura baseada em componentes reutilizáveis:

- `components/`: Componentes de UI como Botões, Cards, Inputs e Ícones SVG.
- `layouts/`: Estruturas de página (AppLayout para a rede e AuthLayout para login/cadastro).
- `hooks/`: Lógica de negócio e estado global.
- `assets/`: Imagens e recursos estáticos.

## Como acessar ao projeto

Pré-requisitos: Antes de começar, certifique-se de que tem o Git e o Node.js instalados.

Instalação e Execução
1. Clonar o repositório
```
git clone [URL_DO_REPOSITORIO]
```
2. Instalar as dependências
```
npm i
```
3. Iniciar o ambiente de desenvolvimento
```
npm run dev
```
