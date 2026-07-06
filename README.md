# Visitas a Campo · Nufarm

App de relatórios de visita a fazendas de clientes: cliente, fazenda, cultura,
nível de infestação, fotos (câmera ou galeria, com leitura automática de GPS
da foto) e exportação em PDF.

> **Atenção sobre os dados:** este projeto usa `localStorage` do navegador.
> Isso significa que os relatórios ficam salvos **no navegador/dispositivo de
> cada pessoa**, e não são compartilhados automaticamente entre a equipe.
> Se quiser dados compartilhados entre todos os usuários, é preciso conectar
> um backend (Firebase, Supabase, uma API própria etc.) — o arquivo
> `src/App.jsx` já isola toda a lógica de armazenamento no objeto `storage`
> no topo do arquivo, então é só trocar essas 4 funções.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Publicar no GitHub Pages

### 1. Criar o repositório

No GitHub, crie um repositório novo (ex: `visitas-campo-nufarm`) — pode ser
público ou privado (Pages funciona em ambos nos planos pagos; em contas
gratuitas, Pages só publica repositórios públicos).

### 2. Ajustar o nome do repositório no projeto

Abra `vite.config.js` e troque:

```js
base: '/visitas-campo-nufarm/',
```

pelo nome exato do seu repositório, por exemplo `/relatorios-nufarm/`.

### 3. Subir o código

```bash
git init
git add .
git commit -m "Primeira versão do app de visitas a campo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/visitas-campo-nufarm.git
git push -u origin main
```

### 4. Ativar o GitHub Pages

Este projeto já inclui um workflow em `.github/workflows/deploy.yml` que
publica automaticamente a cada `push` na branch `main`.

Depois do primeiro push:

1. Vá em **Settings → Pages** no repositório.
2. Em "Build and deployment" → "Source", selecione **Deploy from a branch**.
3. Escolha a branch **gh-pages** (ela é criada automaticamente pelo workflow
   após a primeira execução) e a pasta **/ (root)**.
4. Salve. Em alguns minutos o app estará em:
   `https://SEU-USUARIO.github.io/visitas-campo-nufarm/`

Você pode acompanhar o andamento da publicação na aba **Actions** do
repositório.

### Alternativa manual (sem GitHub Actions)

```bash
npm install
npm run build
npm run deploy
```

O script `deploy` usa o pacote `gh-pages` para publicar a pasta `dist`
diretamente, sem precisar do workflow automático.

## Estrutura

```
src/
  App.jsx      → toda a lógica e interface do app
  main.jsx     → ponto de entrada React
index.html     → HTML base (carrega o Tailwind via CDN)
vite.config.js → configuração do Vite (ajustar o "base" para o seu repo)
```
