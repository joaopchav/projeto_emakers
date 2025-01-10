# projeto_emakers


Projeto E-Commerce de Jogos

Este projeto é um site de e-commerce especializado na venda de jogos eletrônicos. A aplicação conta com diversas funcionalidades que proporcionam uma experiência intuitiva e agradável para os usuários, como carrosséis de promoções e lançamentos, páginas dedicadas a gêneros de jogos, uma interface de login e registro, e muito mais.

---------------------------------------------------Como Executar o Projeto---------------------------------------------------------

Clone este repositório:
-> git clone <url-do-repositorio>
Instale as dependências:
-> npm install
Execute o servidor de desenvolvimento:
-> npm run dev

Acesse a aplicação no navegador em: http://localhost:5173

----------------------------------------------------Estrutura do Projeto-----------------------------------------------------------

O projeto segue uma organização modular, com os seguintes diretórios principais:

-> src: Contém todos os arquivos principais do projeto.
-> assets: Armazena as imagens e outros recursos estáticos utilizados no projeto.
-> componentes: Contém componentes reutilizáveis, como Navbar, Footer e Carrossel.
-> pages: Inclui as diferentes páginas do site, como Tela Inicial, Conta, Jogo, Login, Registro, Recuperar Conta, Populares, Gênero e Lançamento.
-> global.css: Arquivo de estilos globais compartilhados por toda a aplicação.

---------------------------------------------------Tecnologias Utilizadas----------------------------------------------------------

O projeto utiliza um conjunto moderno de tecnologias para garantir alta performance e manutenção fácil:

-> React.js: Biblioteca JavaScript para a construção da interface de usuário, garantindo componentes reutilizáveis e uma experiência reativa.
-> CSS: Utilizado para estilização das páginas e componentes, proporcionando uma aparência moderna e responsiva.
-> Bootstrap: Usado para implementar o carrossel e o menu sanduíche, simplificando a lógica e garantindo compatibilidade com dispositivos móveis.
-> React Router: Gerencia a navegação entre as diferentes páginas do site.
-> JavaScript: Linguagem principal utilizada para a implementação das lógicas do projeto.

---------------------------------------------------Funcionalidades Principais------------------------------------------------------

A tela inicial exibe dois carrosséis principais:

-> Promoções: Jogos com descontos atrativos e links para mais informações sobre cada produto.
-> Lançamentos: Apresenta os jogos mais recentes com seus respectivos preços.

--------------------------------------------------------Navegação------------------------------------------------------------------

O componente Navbar facilita o acesso a diferentes páginas, como:

-> Jogo: Exibe informações detalhadas sobre um jogo específico.
-> Lançamento: Lista os jogos mais recentes disponíveis.
-> Populares: Mostra os jogos mais populares entre os usuários.
-> Gênero: Permite explorar jogos por gêneros específicos.
-> Conta: Centraliza informações relacionadas ao perfil do usuário.

---------------------------------------------------------Footer--------------------------------------------------------------------

O Footer oferece links rápidos para informações adicionais e é exibido em todas as páginas.

--------------------------------------------------------Carrossel------------------------------------------------------------------

-> O componente Carrossel é reutilizado em diferentes partes do site para exibir listas de jogos de maneira visualmente atraente. Ele foi implementado utilizando Bootstrap, o que facilita o gerenciamento das transições entre slides e garante uma interface amigável em dispositivos móveis. O carrossel também inclui botões de navegação e indicadores visuais para melhorar a experiência do usuário.

-> O carrossel utiliza React e React Router para navegação entre as páginas. Ele também aproveita as funcionalidades do Bootstrap, como transições suaves e suporte para controle de slides.

-----------------------------------------------------Responsividade e versão mobile------------------------------------------------

A responsividade do código foi garantida com consultas de mídia (@media) para ajustar o layout com base na largura da tela, além disso o uso de unidades de medida fluidas, como %, vw, vh, em, e rem, que se adaptam automaticameAnte ao tamanho da página ou elemento. 

-> Login, Cadastro e Recuperação de Conta: Alterações na estrutura do grid, ajustando o layout para coluna única e aumentando espaçamentos.
-> Carrosséis e Lançamentos: Ajustes de gaps, tamanhos de imagens, e controle das setas de navegação.
-> Populares e Gêneros: Alteração no grid para ocupar 100% da largura com margens reduzidas.
-> Conta e Jogo: Simplificação do layout para colunas, centralização de elementos e ajuste de tamanhos de fontes e botões.

-> Fontes: Utilização de em e rem para dimensionar textos, garantindo escalabilidade proporcional ao tamanho base definido.
-> Tamanhos de Containers: Uso de % para larguras e alturas de seções, adaptando o layout ao tamanho da janela.
-> Imagens e Botões: Aplicação de max-width: 100% e height: auto para redimensionar elementos visualmente sem distorção.
-> Espaçamentos e Margens: Definição em % ou em para manter proporções relativas em diferentes resoluções.


----------------------------------------------------------Tasks--------------------------------------------------------------------
Readme no GitHub: Em seu repositório no GitHub, criar um arquivo Readme bem escrito, detalhando a organização de seu repositório e, caso haja necessidade, explicando as funcionalidades de seu projeto.  (1 ponto) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Formulários: Implementar formulários funcionais, como os presentes nas telas de Login. (2 pontos) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Barra de Navegação (NavBar): desenvolver uma NavBar funcional.  (1 ponto) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Carrossel: Seguindo o design, implementar um carrossel nas seções com imagens de jogos ou os demais elementos necessários. (3 pontos) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Responsividade: Tornar as diferentes telas responsivas à dispositivos maiores ou menores. (5 pontos) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Versão Mobile: Construir a versão Mobile das telas implementadas. (3 pontos) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Footer: Criar o rodapé da sua página. (1 ponto) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Menu “Sanduíche”: Menu apelidado carinhosamente como Sanduíche (menu de 3 barrinhas), que aparece em dispositivos móveis para substituir a NavBar completa. (2 pontos) ---> Check
-----------------------------------------------------------------------------------------------------------------------------------
Uso de useState: Ao menos um uso de useState(Exemplos: botão com contador, botão que alterna cores, alternador de tema, componente de avaliação com estrelas, etc). (2 pontos) ---> Check 

-> No projeto, ele é usado para controlar a avaliação por estrelas, armazenando o número de estrelas selecionadas em um estado chamado rating. Ao clicar em uma estrela, a função setRating atualiza esse estado, desencadeando a re-renderização do componente para refletir visualmente as mudanças na interface.
-----------------------------------------------------------------------------------------------------------------------------------