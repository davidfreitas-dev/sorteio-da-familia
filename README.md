# 🎁 Sorteio da Família

Uma aplicação web interativa para realizar sorteios entre famílias cadastradas, com controle de sorteios anteriores e reinício automático da lista. Ideal para eventos familiares, festas e confraternizações.

---

## 🚀 Funcionalidades

- Cadastro de famílias participantes.
- Sorteio aleatório de uma família por vez.
- Cada família é sorteada apenas uma vez por rodada.
- Reinício automático após todas as famílias serem sorteadas.
- Persistência dos dados em **Firebase Firestore**.

---

## 🧱 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) – Framework JavaScript progressivo
- [Pinia](https://pinia.vuejs.org/) – Gerenciador de estado oficial do Vue
- [Vue Router](https://router.vuejs.org/) – Gerenciamento de rotas
- [Tailwind CSS](https://tailwindcss.com/) – Utilitário de CSS moderno
- [Firebase Firestore](https://firebase.google.com/products/firestore) – Banco de dados NoSQL em tempo real

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) + [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) + [Error Gutters](https://marketplace.visualstudio.com/items?itemName=IgorSbitnev.error-gutters).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

Paste on settings.json VS Code file 

```sh
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
