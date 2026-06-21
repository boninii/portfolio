# Portfólio · Pedro Bonini

Landing page pessoal — desenvolvedor web. HTML, CSS e JavaScript puros, com animações em [GSAP](https://gsap.com/).

## Stack

- HTML5 semântico
- CSS3 com variáveis nativas (paleta terracota)
- Vanilla JavaScript + GSAP (Core + ScrollTrigger)
- Tipografia: Fraunces + Poppins + JetBrains Mono

## Rodar localmente

É um site estático — basta abrir o `index.html` num navegador, ou servir a pasta:

```bash
npx serve .
```

## Estrutura

```
index.html    →  marcação de todas as seções
style.css     →  design system + componentes + animações
script.js     →  GSAP (reveal, nav sliding, compare hover-driven)
```

## Deploy

Hospedado via [Cloudflare Pages](https://pages.cloudflare.com/) — deploy automático a cada push na branch `main`.
