# 1stChallengerOracleOne
Repository for the first challenger and Oracle One project
<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>decriptador</title>
    <link rel="icon" href="Images/logoAlura.png" type="image/x-icon">
    

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/challenger.css">
    <link rel="stylesheet" href="css/footer.CSS">
    

    <script src="js/decriptador.js" defer></script>
    
</head>

<body>

    <header>
        <a id="logo-alura" href="https://www.alura.com.br/" target="_blank" rel="noopener noreferrer">
            <img src="Images/logoAlura.png" alt="Logo da Alura">
        </a>

    </header>

    <main>
        <section id="campo-inserir">
            <textarea name="mensagem" id="inserir-textarea" placeholder="Digite o texto aqui"></textarea>

            <div class="botoes">
                <button id="serializeButton">Codificar</button>
                <button id="deserializeButton">Decodificar</button>
            </div>
        </section>

        <section id="campo-resposta">

            <img class="img-procurando" src="Images/Personagem.jpg" alt="Desenho procurando texto com uma lupa">

            <textarea name="resposta" id="resposta-textarea" placeholder="Nenhuma mensagem exibida."
                disabled></textarea>

            <button id="btn-copiar" disabled>Copiar texto</button>
            

        </section>

    </main>

    <footer>
        <section id="meus-creditos">
            <p>Desenvolvido por: Caique Renan&reg;</p>
        </section>

        <section id="minhas-redes">

            <p>Redes Sociais</p>

            
            <div id="icones-redes-sociais">

                <a id="icone-github" href="https://github.com/Caique-Renan" target="_blank"
                    rel="noopener noreferrer">
                    <img class="icone-rede-social" src="Images/iconeGitHub.svg" alt="Icone do GitHub">
                </a>

                
                <a id="icone-linkedin" href="https://www.linkedin.com/in/caiquerenanalves/"
                    target="_blank" rel="noopener noreferrer">
                    <img class="icone-rede-social" src="Images/iconeLinkedin.svg" alt="Icone do LinkedIn">
                </a>

            </div>
        </section>
    </footer>

</body>

</html>
