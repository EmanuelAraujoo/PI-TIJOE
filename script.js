function changeContent(buttonNumber, element) {
    var content = document.getElementById("content");
    
    // Atualiza o conteúdo da DIV baseado no botão clicado
    switch(buttonNumber) {
        case 1:
            content.innerHTML = "Objetivos";
            break;
        case 2:
            content.innerHTML = "Texto corpo docente";
            break;
        case 3:
            content.innerHTML = "Grade curricular";
            break;
        case 4:
            content.innerHTML = "Microcertificações";
            break;
        default:
            content.innerHTML = "Invalid Button";
    }
    
    // Remove a cor vermelha dos botões
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("red-button");
    }

    // Adiciona a cor vermelha no botão clicado
    element.classList.add("red-button");

    // Atualiza a cor do texto
    var breadcrumbItems = document.querySelectorAll(".breadcrumb li p");
    for (var i = 0; i < breadcrumbItems.length; i++) {
        breadcrumbItems[i].classList.remove("active");
    }

    // Adiciona a classe ao texto
    breadcrumbItems[buttonNumber - 1].classList.add("active");
}
