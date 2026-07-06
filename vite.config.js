import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANTE: troque "visitas-campo-nufarm" abaixo pelo nome exato
// do seu repositório no GitHub, senão os arquivos (CSS/JS) não vão carregar
// quando publicado no GitHub Pages.
export default defineConfig({
     plugins: [react()],
     base: '/APP-DE-VISITAS-/',
   });
