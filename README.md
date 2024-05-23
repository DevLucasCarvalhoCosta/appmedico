# App Médico

Este é um aplicativo móvel para agendamento de consultas médicas. Ele permite que os usuários se cadastrem, façam login, agendem consultas com médicos e visualizem as consultas marcadas.

## Funcionalidades

- **Login e Cadastro:** Os usuários podem criar uma conta ou fazer login em uma conta existente.
- **Agendamento de Consultas:** Os usuários podem agendar consultas com médicos, selecionando a data, horário e adicionando comentários, se necessário.
- **Visualização de Consultas Marcadas:** Os usuários podem visualizar as consultas que eles agendaram anteriormente.
- **Edição e Exclusão de Consultas:** Os usuários podem editar e excluir consultas previamente agendadas.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado o seguinte:

- Node.js
- npm ou yarn
- Firebase Firestore

## Instalação

1. Clone o repositório do GitHub:

```
git clone https://github.com/Lucaspk91/appmedico.git
```

2. Instale as dependências do projeto:

```
cd app-medico
npm install
```

## Configuração do Firebase

Antes de executar o aplicativo, você precisa configurar o Firebase para armazenar os dados de consulta. Siga estas etapas:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Ative o Firestore no Firebase Console.
3. Copie as credenciais do seu projeto Firebase.
4. Cole as credenciais no arquivo `firebaseConfig.js` no diretório `utils`.

## Uso

Para iniciar o aplicativo no modo de desenvolvimento, execute o seguinte comando:

```
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu emulador ou dispositivo conectado.

## Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Bibliotecas e Frameworks:**
  - React Native
  - Firebase Firestore
  - React Navigation
  - React Native Paper
  - React Native Vector Icons
  - React Native Gesture Handler

## Considerações Finais

Este aplicativo foi uma experiência legal! A ideia era praticar minhas habilidades e aprender mais sobre as tecnologias usadas. Foi tipo um desafio pessoal: ver quanto tempo eu demoraria para conseguir alcançar as funcionalidades alcançadas.

Aprendi bastante sobre **React Native**, **Firebase Firestore** e outras bibliotecas enquanto construía o app. Cada bug era uma nova lição, e cada solução era uma vitória!

Fique à vontade para dar sugestões ou feedback. Espero continuar explorando e aprendendo mais sobre o mundo do desenvolvimento móvel.

Valeu por acompanhar essa jornada! 🚀

