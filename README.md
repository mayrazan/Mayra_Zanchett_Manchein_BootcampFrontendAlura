# Portfolio

Portfolio de projetos desenvolvido para o desafio referente aos módulos do bootcamp de frontend avançado JAMStack da Alura.

## Demo

https://portfolio-alura-bootcamp.vercel.app/

## Deployment

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Run Locally

Clone the project

```bash
  git clone https://github.com/mayrazan/Mayra_Zanchett_Manchein_BootcampFrontendAlura.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

## Tech Stack

- React
- NextJS
- Styled-Components
- Framer-motion
- React Lottie
- Prop-Types

## Assignments

**Módulo 1**

- [x] Criar componentes.
- [x] Adicione PropTypes a todos os componentes.
- [x] Criar breakpoints
- [x] Adicione Eslint no projeto
- [x] Fazer deploy na Vercel

**Módulo 2**

- [x] Criar todo o sistema de integração para o seu projeto de portfólio.
- [x] Criar a função modal.
- [x] Criar uma função que altere o estado da aplicação e exiba o componente modal ao clicar no botão de adicionar novo projeto.
- [x] Criar uma função que vai alterar o estado da aplicação e fechar o modal, ao clicar fora dele.
- [x] Criar o propTypes para essas funções.
- [x] Criar uma função de handleChange para atualizar as informações que serão preenchidas dentro do input do formulário.
- [x] Exibir o botão de enviar, apenas se os campos do formulário estiverem preenchidos.
- [x] Os campos Seu nome, Seu email, Sua Mensagem não podem estar vazios.
- [x] Aceitar apenas formatos válidos no campo Seu email.
- [X] Criar o motion.div que vai ser a div feita para lidar com todas as propriedades do frame motion
- [x] Escolher a animação que você achar mais interessante para o seu projeto.
- [x] Criar uma função de onSubmit dentro do form.
- [x] Fazer uma requisição POST para [esse endereço](https://contact-form-api-jamstack.herokuapp.com/message) utilizando fetch.
- [x] Fazer uma verificação para saber se a resposta do servidor foi ok.
- [x] Criar um objeto formStates onde passaremos os estados do componente como por exemplo DEFAULT, DONE, ERROR,seguindo as boas práticas de um código mais explícito e legível.
- [x] Usar a biblioteca Lottie para criar as animações de sucesso e erro.

**Módulo 3**

- [x] Criar o layout das páginas 404, sobre mim e página do projeto.
- [x] Criar uma pasta pages e dentro dela criar uma página sobre mim, uma página de 404 e uma outra que vai ser a página de exibição do projeto.
- [x] Utilizar o componente com o nome de NextLink para envolver todos os links do portfólio.
- [x] Na página de projetos vai ser exibida uma imagem, por hora ela vai ser hospedada localmente na nossa aplicação. Para isso vamos criar um arquivo chamado db.json que vai receber as propriedades das imagens como nesse [exemplo](https://github.com/JulianaAmoasei/teste-json-local/blob/main/db.json).
- [x] A dica aqui é criar um wrapper para os cards, usar o componente Image do NextJS e passar o endereço da imagem no src como feito nesse [exemplo](https://github.com/JulianaAmoasei/teste-json-local/blob/main/src/components/ProjectCard/index.js).
- [x] Por enquanto podemos usar imagens aleatórias do [unsplash](https://unsplash.com/) para popular o db.json e conforme vamos evoluindo no bootcamp vamos chegar em outros meios para hospedar as imagens dos nossos projetos no portfólio.
- [x] Fazer um fetch para a [api do github](https://docs.github.com/en/rest/reference/users) utilizando o getStaticProps e listar os seus repositórios na página sobre mim.
- [x] Instalar a extensão do [google lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt).
- [x] Com o lighthouse instalado gere o relatório, ele vai indicar algumas melhorias.
- [x] Crie um componente de SEO para servir as páginas do portfólio.
- [x] Use o [metatags.io](https://metatags.io), aqui você pode usar o site da [Alura](www.alura.com.br) como exemplo para pegar as metatags, e utilize dentro do componente de SEO.
- [x] Crie o robots.txt para melhorar a indexação com Google.
- [ ] Faça o deploy na Vercel e gere o relatório do lighthouse novamente e veja se o SEO aumentou.
- [x] Abstrair componentes comuns que são repetidos em páginas diferentes.

## CI / CD

Instruções de como criar um sistema de integração e entrega contínua o CI/CD.

Instalar as seguintes dependências:

```bash
yarn add husky --dev
yarn add lint-staged --dev
npm install -g commitizen
commitizen init cz-conventional-changelog --yarn --dev --exact
yarn add @commitlint/config-conventional @commitlint/cli --dev
```

Adicionar as seguintes configurações no package.json:

```json
"scripts": {
    "lint": "eslint --ignore-path .gitignore .",
    "lint:fix": "yarn lint --fix",
    "prepare": "husky install",
    "commit": "cz",
    "lint-staged": "lint-staged"
}

"lint-staged": {
    "*.js": [
      "yarn lint:fix"
    ]
  },

"husky": {
    "hooks": {
      "pre-push": "yarn lint",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},
```

## Terminal commands

**Run**

```bash
yarn prepare
```

**Add a hook:**

```bash
npx husky add .husky/pre-commit "yarn lint-staged"
```

**Configure commitlint to use conventional config:**

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

Para utilizar os comandos configurados, sempre que for commitar algum arquivo utilize `yarn commit` ao invés de `git commit -m "mensagem"`.

## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
