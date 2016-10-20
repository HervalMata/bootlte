# BootLTE - v1.0.0

BootLTE é o resultado da integração do Spring Boot (utilizando o template engine Thymeleaf) com o tema AdminLTE. O 
propósito deste projeto é ser utilizado como ponto de partida para outros projetos utilizando o tema AdminLTE.

## Instruções para desenvolvimento

BootLTE utiliza Maven, sendo assim, basta importá-lo na sua IDE preferida como um projeto Maven existente.

## Instruções para desenvolvimento do front-end

BootLTE utiliza Grunt, Bower e npm para gerenciar as dependências e realizar o build da camada front-end. 

Os seguintes itens devem ser instalados:

* Node.js
* Grunt CLI
* Bower

Depois de baixar o projeto e instalar os itens acima é necessário acessar a pasta bootlte\src\main\resources\static 
através do terminal e executar o seguinte comando para baixar as dependências:

```shell
npm install
```

Após baixar as dependências, deve ser realizado o build da camada front-end utilizando o seguinte comando através do 
terminal:

```shell
grunt default -f
```

O parâmetro -f é necessário porque o projeto ainda não possui testes unitários na camada front-end.

O build foi configurado para otimizar a camada de font-end através da concatenação e compressão dos arquivos JavaScript 
e CSS proporcionando uma melhor performance na entrega destes artefatos.

Para mais informações sobre a configuração das tasks do Grunt acesse o arquivo Gruntfile.js na pasta 
bootlte\src\main\resources\static.

## Instruções para utilização do tema AdminLTE

Sempre que algum plugin do tema AdminLTE for utilizado a task bower_concat do arquivo Gruntfile.js deve ser editada, 
incluindo o caminho do artefato (js ou css) que será adicionado. Assim o mesmo será compactado junto com os outros 
arquivos. O caminho do plugin deve ser incluído no array do item "AdminLTE". Toda vez que isto ocorrer, um novo build 
da camada front-end deverá ser feito.
