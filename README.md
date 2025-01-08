# Uma landing page para um ateliê de costura

## Controle Versional (GIT)

**O projeto está sujeito ao seu próprio controle versional, seu deploy foi feito na versão 1.0 e seguindo os seguintes padrões de sufixos:**  

- [ADD]  
  - Adição de algo novo para o projeto, sem remoções consideráveis.  

- [WORK]  
  - Versão sujeita a alterações, pois ainda está em fase de desenvolvimento.  

- [FINAL]
  - Faz referência a versão final da sufixo que a acompanha, exemplo:   
  "[FINAL] 1.6" informa que uma seção foi concluida e lançada na versão 1.6, marcando a conclusão da mesma, porém, ainda sujeita a alterações.  

- [DEL]  
  - Remoção de pastas, linhas de códigos, imagens e/ou etc.  

- [UPDATE]  
  - Melhorias de performance, refatorações e etc.  

- [PATCH]  
  - Correção de algo que funcionava porém não da maneira correta.  

- [INFO]  
  - Alterações de informações, como edições no README, seções do site que possam conter informações incorretas e etc.  

- [FIX]  
  - Correção de falhas.  

### Tags referentes as seções

Observe agora que cada seção está sujeita a sua própria versão, veja a atribuição das mesma a seguir:

- 1.0  
    - Seção header do site

- 2.0  
    - Seção hero do site

### Bugs

Alguns bugs já foram identificados e estão sendo minúsculosamente analisados, sendo eles:  

- O bugs em relação ao ícone da navbar(toggle-button) e o ícone para fechar o menu(close-icon) aparecem em alguns momentos quando redimensionamos a tela, fazendo com que mesmo acima de 950px estes ícones não sejam escondidos como deveriam.   

- A sobreposição do backgroud-color no hover do "navbar-links li", fazendo com que seja sobreposto os efeitos dos elementos ao lado até o fim da transição.

### Observações

Cada número da versão tem sua própria caracteristica, vejamos:
-  1.*
   -  O primeiro número que acompanha o status do projeto faz referência ao seção que está sendo produzida no momento, ou seja, se estiver trabalhando no header, o primeiro número vai ser 1, se estiver trabalhando na seção do hero, o primeiro número vai ser 2 e assim por diante.  

-  *.1
   -  Já o segundo número vai fazer referência ao status de processo dos lançamentos realizados naquela seção (ou, versão), por exemplo:   
   Um projeto cujo a versão se encontra em 1.6 diz que a seção X daquele projeto teve seis(6) commits e alterações, enqunto um projeto na versão 2.9 diz a seção Y teve nove(9) commits e alterações.

Cada versão faz referência a sua seções do site, ou seja, a varsão 1.0 faz referência a construção do "header" do site, ela vai se extender até no máximo a versão 1.9 onde sairá a versão final do mesmo. Sua versão final poderá sair antes da 1.9, podemos identificar isto com o sufixo [FINAL], marcando assim que uma seção foi concluida antes da versão 1.9.  

Como este projeto se trata de uma landing page, o controle de versões bem como o seus sufixos vão sempre fazer referência ao "index.html". Digamos que está mesma landing page tenha uma(ou mais) páginas e o "header" de uma dessas páginas foi concluido, como neste exemplo estamos lidando com mais de uma página, um novo sufixo será adicionado ao controle de versões para informar de qual página(e seção) aquela versão faz referência.   

Observa-se sempre que o sufixo "[INFO]" não faz o lançamento de uma nova versão, as alterações ainda serão versionadas, porém o projeto ainda estará na mesma versão que se encontrava antes, tendo somente o deploy do "[INFO]" junto da tag da versão e suas alterações.   

O sufixo "[WORK]" pode conter junto de seu lançamento outra tags junto de si, como o "[WORK]" se trata de uma versão que ainda está em desenvolvimento ele trás consigo outros sufixos juntos, como o "[ADD]", "[UPDATE]" e etc.   

## Licença

O projeto [Ateliê da Ihara](https://github.com/igorgp06/atelie-da-ihara) está sujeito a licença [APACHE LICENSE 2.0](https://www.apache.org/licenses/LICENSE-2.0)

### Contato

Para esclarer dúvidas, mandar sugestões ou até mesmo bater um papo comigo, mande um Email para contateme.igorgp@gmail.com!

### Desenvolver Responsável

Igor Gonçalves ou [igorgp06](https://github.com/igorgp06)
