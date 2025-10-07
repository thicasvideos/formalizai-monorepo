#!/bin/bash

echo "🚀 Fazendo push para GitHub..."

# Inicializar o repositório
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: initial monorepo with Next.js + NestJS + Prisma

- Landing page converted from Canva HTML with AA contrast
- CTAs pointing to localhost for development
- Removed 'Falar com especialista' option
- Hidden Enterprise plan visually
- Multi-tenant Prisma schema
- Deploy configs for Vercel + Railway
- Legacy HTMLs preserved for reference"

# Renomear branch para main
git branch -M main

# Adicionar remote
git remote add origin https://github.com/thicasvideos/formalizai-monorepo.git

# Fazer o push
git push -u origin main

echo "✅ Push concluído com sucesso!"
echo "🌐 Repositório: https://github.com/thicasvideos/formalizai-monorepo"
