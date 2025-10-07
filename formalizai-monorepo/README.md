# Formaliza AI Monorepo

Monorepo completo com Next.js (web) e NestJS (api). Inclui Prisma (PostgreSQL), Redis (Upstash), Cloudflare R2, Resend, geração de PDF com Puppeteer, filas e CI/CD.

## 🏗️ Estrutura

```
formalizai-monorepo/
├── apps/
│   ├── web/          # Next.js 14 App Router (marketing + app)
│   └── api/          # NestJS API (auth, tenants, clients, documents, signing)
├── legacy/           # HTMLs originais do Canva para referência
└── package.json      # Workspace root
```

## 🚀 Quick Start

### 1. Clone e instale dependências
```bash
git clone https://github.com/seu-usuario/formalizai-monorepo.git
cd formalizai-monorepo
npm install
```

### 2. Configure as variáveis de ambiente

**Backend (apps/api/.env):**
```env
DATABASE_URL="postgresql://user:pass@host:5432/db"
REDIS_REST_URL="https://your-redis.upstash.io"
REDIS_REST_TOKEN="your-token"
R2_ENDPOINT="https://your-account.r2.cloudflarestorage.com"
R2_ACCESS_KEY_ID="your-key"
R2_SECRET_ACCESS_KEY="your-secret"
R2_BUCKET="formalizai-documents"
RESEND_API_KEY="re_xxx"
FRONTEND_URL="https://formaliz.ai"
NODE_ENV="development"
```

**Frontend (apps/web/.env.local):**
```env
NEXT_PUBLIC_API_URL="https://api.formaliz.ai"
NEXT_PUBLIC_APP_NAME="Formaliza AI"
```

### 3. Configure o banco de dados
```bash
cd apps/api
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 4. Execute em desenvolvimento
```bash
# Na raiz do projeto
npm run dev
```

Isso iniciará:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- API Docs: http://localhost:3001/docs

## 📋 Scripts

- `npm run dev` - Inicia web + api em desenvolvimento
- `npm run build` - Build de ambos os apps
- `npm run start` - Inicia API em produção
- `npm run lint` - Lint em ambos os apps

## 🌐 Deploy

### Frontend (Vercel)
1. Conecte o repositório na Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Backend (Railway)
1. Conecte o repositório na Railway
2. Configure as variáveis de ambiente
3. Deploy automático

### Domínios
- https://formaliz.ai → Marketing (Vercel)
- https://app.formaliz.ai → App (Vercel)
- https://api.formaliz.ai → API (Railway)

## 🔧 Integrações

- **PostgreSQL**: Neon (banco principal)
- **Redis**: Upstash (cache + filas)
- **Storage**: Cloudflare R2 (PDFs)
- **Email**: Resend (convites + assinatura)
- **PDF**: Puppeteer (geração)
- **Auth**: JWT + Auth.js

## 📊 Features Implementadas

✅ Landing page convertida do Canva com contraste AA
✅ CTAs apontando para app.formaliz.ai
✅ Remoção do "Falar com especialista"
✅ Ocultação visual do plano Enterprise
✅ Schema Prisma multi-tenant
✅ Estrutura Next.js 14 + NestJS
✅ Configurações de deploy

## 🚧 Próximos Passos

- [ ] Implementar Auth.js
- [ ] Criar componentes shadcn/ui
- [ ] Implementar filas Redis
- [ ] Integrar Puppeteer + R2
- [ ] Configurar CI/CD
- [ ] Seed data de exemplo

## 📝 Licença

MIT
