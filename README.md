# Atividade: API de Anotações Pessoais com Prisma ORM

## Contexto do Desafio

A startup "NoteHub" está criando um aplicativo de anotações digitais para estudantes. Na versão inicial (1.0), a API backend será simples, focada apenas no armazenamento e gerenciamento de anotações, sem suporte a usuários ou categorias.

## Descrição do Desafio

Desenvolver uma API REST para o sistema de anotações "QuickNotes" utilizando Node.js e Prisma ORM com as seguintes funcionalidades:

1. Criar novas anotações
2. Listar todas as anotações
3. Buscar anotação por ID
4. Atualizar anotações existentes
5. Excluir anotações
6. Marcar anotações como favoritas

## Instruções de instalação

1. Clone o repositório
2. Dê um `npm install` para instalar as dependências
3. Crie um arquivo `.env` na raiz do projeto com `DATABASE_URL="file:./dev.db"` para usar o SQLite
4. Execute `npx prisma migrate dev` para criar o banco de dados SQLite
5. Execute `npm run dev` para iniciar o servidor