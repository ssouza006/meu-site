document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let servico = document.getElementById("servico").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `Nome: ${nome}%0A📞 Telefone: ${telefone}%0A🛠️ Serviço: ${servico}%0A📩 Mensagem: ${mensagem}`;
    let whatsappLink = `https://api.whatsapp.com/send?phone=91980495254&text=${texto}`;

    window.open(whatsappLink, "_blank");
});
