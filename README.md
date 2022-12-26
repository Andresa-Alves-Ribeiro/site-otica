<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Rocket.Q" src="github/capa.png" width="100%">
  <img alt="Rocket.Q" src="github/site.gif" width="70%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript

## 💻 Projeto

O Rocket.Q é uma aplicação de interação através de perguntas, sendo possível criar uma sala para internautas anônimos fazerem perguntas e o criador da sala em posse de uma senha gerenciar essas perguntas e marcar como lidas.

## ❓ Como funciona a aplicação?

+ A aplicação funciona da seguinte forma. Assim que o usuário entra, ele é mandado diretamente para a rota de "home", onde ele terá duas opções de caminhos.

+ Ou ele tem um código de sala, copia e cola ele na parte de 'entrar em uma sala', ou ele pode criar a sala de maneira bastante simples, em uma página diferente.

+ Os códigos das salas são gerados aleatoriamente por meio de um algoritmo, ao passo que a senha da sala é escolhida pelo usuário ao realizar a criação dela.

+ Uma sala, assim que é criada, não possui nenhuma pergunta, portanto, é colocado, no template do EJS, uma interface de 'sem nenhuma pergunta'. Quando uma pergunta é adicionada, a interface é trocada dinamicamente pela pergunta e as perguntas subsequentes.

+ Quando o botão de 'marcar como lida' é acionado, o programa pede para o usuário digitar a senha da sala, impedindo que qualquer um tenha acesso ás mudanças nas perguntas.

+ Se o usuário escrever a senha corretamente, então a pergunta ficará com um tema acinzentado e será enviada para as últimas posições do queue de perguntas.

+ O processo de exluir é semelhante ao de marcar como lida. Contudo, ao excluir uma pergunta, ele irá, de fato, retirá-la do banco de dados e ela sumirá da interface da aplicação.

+ Quando todas as perguntas são removidas, a interface de 'sem nenhuma pergunta' volta a aparecer, até que uma pergunta seja escrita.

## 🖥️ Como visualizar meu projeto?

Você pode acessar o link abaixo e visualizar o deploy:

https://rocketq-app.herokuapp.com/

ou

Baixe este repositório e com seu terminal, entre no diretório

1. Execute o comando `npm install` para instalar as dependências
2. Após, execute o comando `npm run init-db` para instalar o banco de dados
3. E para iniciar o aplicativo, execute o comando `npm start` 

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

---

<p align="center">
  Feito com ♥ by Andresa A Ribeiro :wave:
</p>
