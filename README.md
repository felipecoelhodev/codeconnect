# Code Connect

O Code Connect (Versão Divulgação de Conteúdo) é uma rede social exclusiva para desenvolvedores, criada para compartilhar posts, interagir através de comentários e respostas, e curtir publicações de outros devs. A plataforma conta com um ecossistema moderno focado em performance, segurança e rastreabilidade através de logs.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ecossistemas:

* **Next.js (App Router):** Utilização de Server Actions, API Routes, otimização de imagens e estratégias avançadas de renderização.
* **React:** Construção de componentes client-side reativos e reaproveitáveis.
* **Supabase:** Gerenciamento completo de autenticação e sessão de usuários.
* **GrowthBook:** Integração de Feature Flags para controle dinâmico de recursos na interface.
* **CSS Modules:** Estilização encapsulada por componentes utilizando variáveis e temas modernos.

## Funcionalidades Principais

### 1. Autenticação Segura (Supabase Auth)

* Fluxo completo de cadastro (signUp), login por senha (signInWithPassword) e encerramento de sessão (signOut).
* Páginas dedicadas e amigáveis para Login, Registro e Recuperação de Senha.
* Proteção e revalidação de tokens no lado do servidor (getUser) e barreira de proteção no lado do cliente (useProtectedRoute).

### 2. Feed de Publicações Dinâmico

* Exibição paginada de publicações e suporte a buscas por termos específicos (searchTerm).
* Carregamento dinâmico sem cache para páginas protegidas (force-dynamic), garantindo dados sempre atualizados.
* Renderização elegante de capas de posts utilizando imagens otimizadas do Next.js.

### 3. Interações em Tempo Real

* **Sistema de Likes (Thumbs Up):** Curtidas instantâneas otimizadas com Server Actions e invalidação de cache programada das rotas afetadas.
* **Comentários Multinível:** Permite que usuários autenticados façam comentários nas publicações e respondam a comentários existentes de forma encadeada (Replies).

### 4. Gestão de Funcionalidades e Telemetria

* **Feature Flags:** Exibição condicional de componentes em tempo de execução com o GrowthBook (ex: ligar/desligar a exibição do horário detalhado de atualização no painel lateral).
* **Event Logger:** Sistema centralizado de logs para auditoria técnica e comportamental, registrando operações de banco de dados, visualizações de página (PAGE_VIEW) e falhas de autenticação com dados estruturados.

## Estrutura de Pastas Relevantes

O código-fonte distribui as responsabilidades seguindo o padrão moderno do Next.js:

* **actions/:** Server Actions que lidam com lógica de autenticação (signUp, signIn) e interações de posts (incrementThumbsUp, postComment).
* **app/:** Estrutura de roteamento (Feed, rotas de API /api/posts/[slug], páginas de erro customizadas 404 e 500).
* **components/:** Componentes modulares de interface (CardPost, Avatar, Button, Checkbox, CommentList, etc.).
* **hooks/:** Custom hooks como useProtectedRoute para controle de acesso client-side.
* **lib/:** Arquivos de inicialização de serviços de terceiros e logs (database, growthbook).
* **utils/:** Helpers de configuração de infraestrutura, como o cliente de servidor do Supabase.

## Inicialização e Desenvolvimento

### Pré-requisitos

Certifique-se de ter instalado em sua máquina o Node.js e um gerenciador de pacotes como o Yarn ou o NPM.

### Passos para Instalação

Clone este repositório para a sua máquina local.

Instale as dependências do projeto executando o comando abaixo:

```bash
npm install
# ou
yarn install
```
Executando o Projeto
Para iniciar o servidor de desenvolvimento, utilize o script padrão configurado:

```bash
npm run dev
# ou
yarn run dev
```
A aplicação estará disponível em http://localhost:3000.

Depuração (Debugging) no VS Code
O projeto já vem configurado com perfis de depuração prontos para o Visual Studio Code através do arquivo .vscode/launch.json. Você pode utilizar os seguintes perfis na aba Run and Debug:

Next.js: debug server-side: Inicia um terminal de execução focado em depurar o código executado estritamente no servidor (ex: Server Actions e rotas de API).

Next.js: debug client-side: Abre uma instância dedicada do Google Chrome apontando para http://localhost:3000 para depurar os componentes que utilizam a diretiva "use client".

Next.js: debug full stack: Executa o ecossistema completo utilizando flags de inspeção do Node (--inspect) e gatilhos automatizados para o Chrome, permitindo depurar o fluxo do cliente ao servidor simultaneamente.
