document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário e o reload da página

    // Obter os valores dos campos de e-mail e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Definir um e-mail e senha simulados (essa parte seria substituída por uma autenticação real no backend)
    const validEmail = "usuario@exemplo.com";
    const validPassword = "123456";

    // Verificar se o e-mail e a senha inseridos estão corretos
    if (email === validEmail && password === validPassword) {
        // Redirecionar para a dashboard
        window.location.href = "view/dashboard.html";
    } else {
        // Exibir mensagem de erro estilizada
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block"; // Mostra a mensagem de erro
    }
});
