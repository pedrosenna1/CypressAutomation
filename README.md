# Objetivo

Repositório de testes e2e com cypress e integração continua com github actions

Casos de teste

Uso de repository_dispatch para rodar os testes em repositório diferente da aplicação

## Casos de teste

Funcionalidade: Login

    Cenário: Login com credenciais válidas
        Dado que o usuário está na página de Signup/Login
        Quando preenche o campo de e-mail com um e-mail válido
        E preenche o campo de senha com a senha correta
        E clica no botão de Login
        Então uma mensagem de “Login realizado com sucesso” é exibida
        E o usuário é redirecionado para a página Home

    Cenário: Login com senha inválida
        Dado que o usuário está na página de Signup/Login
        Quando preenche o campo de e-mail com um e-mail válido
        E preenche o campo de senha com uma senha incorreta
        E clica no botão de Login
        Então uma mensagem de “Your email or password is incorrect!” é exibida
        E o usuário não é redirecionado para a página Home

    Cenário: Login com e-mail inválido
        Dado que o usuário está na página de Signup/Login
        Quando preenche o campo de e-mail com um e-mail não cadastrado
        E preenche o campo de senha com a senha correta
        E clica no botão de Login
        Então uma mensagem de “Your email or password is incorrect!” é exibida
        E o usuário não é redirecionado para a página Home

    Cenário: Login com e-mail sem domínio
        Dado que o usuário está na página de Signup/Login
        Quando preenche o campo de e-mail com um e-mail sem domínio
        E preenche o campo de senha com a senha correta
        E clica no botão de Login
        Então uma mensagem de “Inclua um “@” no endereço de e-mail.” é exibida
        E o usuário não é redirecionado para a página Home

    Cenário: Login com campos em branco
        Dado que o usuário está na página de Signup/Login
        Quando deixa o campo de e-mail em branco
        E deixa o campo de senha em branco
        E clica no botão Login
        Então uma mensagem de "Preencha este campo" é exibida
        E o usuário não é redirecionado para a pagina Home

	
Funcionalidade: Cadastro usuário

	Cenario: Cadastro novo usuario com e-mail ainda não utilizado
		Dado que o usuário está na pagina de Signup/Login
		Quando preenche o campo nome
		E preenche o campo e-mail com um e-mail ainda não utilizado
		E clica no botão Signup
		Então o usuario deve ser redirecionado para a página de cadastro das informações da conta

	Cenário: Cadastro novo usuario com e-mail ja utilizado
		Dado que o usuário está na pagina de Signup/Login
		Quando preenche o campo nome
		E preenche o campo e-mail com um e-mail ainda já utilizado
		E clica no botão Signup
		Então uma mensagem de "Email Address already exist!" é exibida
		E o usuário não é redirecionado para nenhuma página


	Cenário: Cadastro novo usuario sem e-mail 
		Dado que o usuário está na pagina de Signup/Login
		Quando preenche o campo nome
		E e deixa o campo e-mail em branco
		E clica no botão Signup
		Então uma mensagem de "Preencha este campo." é exibida
		E o usuário não é redirecionado para nenhuma página

	Cenário: Cadastro novo usuário com credenciais válidas
		Dado que o usuario está na página de informações da conta (Signup)
		E já preencheu os campos de nome e e-mail na página de Signup/Login
		Quando preenche os campos obrigatórios
		E clica no botão Create Account
		Então o usuario é redirecionado para a página /account_created
		E uma mensagem de "Account Created!" é exibida

Funcionalidade: Fale conosco

    Cenário: Envio de mensagem de contato com sucesso
		Dado que o usuario está na pagina de fale conosco (/contact_us)
		Quando preenche os campos Name, Email, Subject, Message e escolhe um arquivo para ser enviado
		E clica em submit
		E clica em OK na janela que se abre
		Então uma mensagem de 'Success! Your details have been submitted successfully.' é exibida

Funcionalidade: Acesso página test cases

    Cenário: Acesso à página de test cases com êxito
        Dado que o usuário está na home page
        Quando clica no botão test cases
        Então deve ser redirecionado para a pagina test cases
        E deve ser possivel ver o titulo test cases

Funcionalidade: Produtos e detalhes do produto

    Cenário: Acesso à pagina de produtos
        Dado que o usuário está na Home Page
        Quando clica no botão "Products"
        Então deve ser redirecionado para a página de produtos
        E deve ser possível visualizar o título "All Products"

    Cenário: Visualização de detalhes do produto
		Dado que o usuario está na página de Produtos
		Quando clica em "View Product"
		Então deve ser redirecionado para a página do produto
		E deve ser visivel os campos com Nome do produto, categoria, valor, disponibilidade, condição e marca

Funcionalidade: Pesquisa de produtos

    Cenário: Visualização apenas dos produtos pesquisados
        Dado que o usuário acessa a página inicial do site
        E clica no botão "Products"
        Quando ele pesquisa por um nome de produto
        Então todos os produtos relacionados à pesquisa devem ser visíveis

Funcionalidade: Adição de produtos ao carrinho

    Cenário: Adicionar dois produtos ao carrinho e validar informações
        Dado que o usuário acessa o site 'http://automationexercise.com'
        E visualiza a página inicial com sucesso
        Quando o usuário clica no botão "Products"
        E adiciona o primeiro produto ao carrinho
        E clica no botão "View Cart"
        Então o produto deve estar no carrinho.