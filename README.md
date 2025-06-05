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
