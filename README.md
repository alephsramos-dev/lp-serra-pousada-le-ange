# Landing Page Le Ange Mar

Página estática criada para captação de leads da pousada **Le Ange Mar** (Búzios/RJ).

---

## Visão Geral

Esta landing page apresenta os principais diferenciais da pousada e direciona visitantes a preencher um formulário de contato, com foco em conversão.

Demo:  
https://alephsramos-dev.github.io/buzios-pousada-le-ange-lp/

---

## Estrutura do Projeto

```
public/
└── sitemap.xml         # Arquitetura para leitura do site na web

src/
├── components/         # Components que se repetem no site (header e botões)
│   ├── button-style-black.css     
│   ├── button-style-white.css   
│   └── header-padrao.css
│
├── global/
│   ├── reset.css       # Reset de estilo do navegador
│   ├── variables.css   # Variáveis (cores e fontes)
│   └── global.css      # Estilos globais
│
├── partials/           # Seções da página, com seu estilo CSS
│   ├── autoridade.css
│   ├── depoimentos.css
│   ├── garantia.css
│   ├── home.css
│   ├── oferta.css
│   ├── passo-a-passo.css
│   └── problemas.css
│
├── scripts/
│   ├── form.js         # Funcionalidade do formulário
│   ├── progress.js     # Barra de progresso da seção de passo a passo, interativa com o scroll
│   ├── splide.js       # Funcionalidade de todos os carrosseis do site
│   ├── textAnimated.js # Funcionalidade de alteração dos textos na seção inicial
│   └── main.js         # Funções gerais do site
│

index.html          # Ponto de entrada
```

---

## Como Executar

1. **Clone**  
   ```bash
   git clone https://github.com/alephsramos-dev/buzios-pousada-le-ange-lp.git
   ```
2. **Abra**  
   - Dê duplo clique em `src/index.html`  
   - Ou, dentro de `src/`, execute:
     ```bash
     python3 -m http.server 8000
     ```
3. **Acesse**  
   Navegador → `http://localhost:8000`

---

## Autor

Aleph Silva Ramos  
📧 alephsramosdev@gmail.com  
💻 https://github.com/alephsramos-dev  
