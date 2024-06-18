// Função para Mudar o Conteúdo de acordo com o botão clicado
function changeContent(buttonNumber, element) {
    var content = document.getElementById("content");

    // Atualiza o conteúdo da DIV baseado no botão clicado
    switch(buttonNumber) {
        case 1:
            content.innerHTML = `
            <body>
    <div id="contentObj">
        <div class="objetivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ipsum nec risus rhoncus accumsan. Vivamus ornare eros a ex bibendum consectetur. Donec mi nisl, dignissim sit amet massa eget, luctus bibendum dui. Morbi non erat in velit consequat scelerisque. In rhoncus est nulla, id tempus nisi laoreet a. Nunc sed facilisis diam, vel suscipit urna. Proin quis urna eu est cursus fringilla in ac felis. Sed molestie tristique luctus. Cras hendrerit eget felis sed suscipit. Aliquam eget tortor ex. Fusce vestibulum tortor vitae ornare rhoncus. Etiam eget diam neque. Ut id vulputate purus. Fusce porta, sem vitae suscipit dapibus, ligula sem condimentum tellus, sit amet elementum massa sem vitae purus. Nunc tempus aliquet ante et faucibus.
Morbi semper turpis eget ex gravida, eget fermentum risus tempor. Suspendisse ut neque ut arcu maximus facilisis. Maecenas ut convallis neque. Morbi lacus sem, semper id aliquam nec, elementum vel purus. Sed tristique ligula eget lacinia consequat. Integer in congue est. Suspendisse quis condimentum orci. Morbi vitae magna erat.
Sed diam ligula, rhoncus sed finibus eget, hendrerit non diam. Donec posuere lectus ut hendrerit commodo. Sed rhoncus eget nisl nec laoreet. Mauris ultrices turpis aliquam, imperdiet ipsum nec, dictum velit. Aliquam lacinia sapien quis diam dignissim, non aliquet felis posuere. Suspendisse sapien elit, sodales et volutpat in, tincidunt sed ex. Vivamus pretium euismod vulputate. Sed vestibulum nisl ut nisi semper auctor. Suspendisse malesuada, velit vitae volutpat placerat, ipsum magna lacinia nisi, in dapibus nisi neque sed lectus. Integer pellentesque ultricies mauris eget fringilla. Integer lorem magna, dictum malesuada nisi nec, dapibus rutrum nunc. Sed interdum leo eget augue ullamcorper, at suscipit magna consequat. Vivamus interdum, ante id efficitur suscipit, mi ipsum placerat urna, vitae iaculis dolor augue ut arcu. Nunc ac pulvinar nisi. Donec iaculis hendrerit ex, sodales pharetra tortor porta ac.
Maecenas mattis et dolor vitae cursus. Duis suscipit commodo felis, non venenatis sem mollis et. Aenean tincidunt finibus lectus, id ullamcorper magna hendrerit eget. Nunc dictum vehicula metus sit amet imperdiet. Aenean egestas eleifend dolor ut imperdiet. Ut sit amet dui turpis. Nam porttitor semper urna, et dignissim mauris varius non. Praesent viverra pulvinar lacinia. Vestibulum cursus lorem risus, a tempus orci venenatis sit amet. Nulla vehicula posuere ante, at fermentum nulla eleifend nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nibh tortor, at elementum eros pretium ac. Morbi vel arcu eget augue convallis ultricies. Maecenas eget ipsum ut enim condimentum volutpat sed quis ante. Donec dolor lorem, dapibus sit amet justo id, rhoncus imperdiet turpis. Nulla dictum lorem eget nulla convallis vehicula.
Ut nisi elit, fermentum eget condimentum non, luctus nec est. Ut eu condimentum mi, id fringilla felis. Vivamus sodales diam quam, non maximus tortor cursus quis. Morbi fringilla neque at mi ullamcorper, sit amet mollis sem lacinia. Sed et ex ex. Fusce et facilisis massa. Suspendisse quis tellus ut nisl auctor sagittis. Aenean consequat libero eros, nec cursus ante ultrices et. Fusce feugiat venenatis sem vel rutrum. Donec hendrerit enim vitae eros tempus, vel cursus mauris tincidunt. Ut condimentum lacus nunc, quis cursus justo vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate eros non lorem tincidunt convallis. Vivamus ac sem non lectus fermentum tempor in sed risus. Cras quis lectus eu massa consectetur hendrerit eget ac leo.</p>
        </div>
        <div class="objetivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ipsum nec risus rhoncus accumsan. Vivamus ornare eros a ex bibendum consectetur. Donec mi nisl, dignissim sit amet massa eget, luctus bibendum dui. Morbi non erat in velit consequat scelerisque. In rhoncus est nulla, id tempus nisi laoreet a. Nunc sed facilisis diam, vel suscipit urna. Proin quis urna eu est cursus fringilla in ac felis. Sed molestie tristique luctus. Cras hendrerit eget felis sed suscipit. Aliquam eget tortor ex. Fusce vestibulum tortor vitae ornare rhoncus. Etiam eget diam neque. Ut id vulputate purus. Fusce porta, sem vitae suscipit dapibus, ligula sem condimentum tellus, sit amet elementum massa sem vitae purus. Nunc tempus aliquet ante et faucibus.
Morbi semper turpis eget ex gravida, eget fermentum risus tempor. Suspendisse ut neque ut arcu maximus facilisis. Maecenas ut convallis neque. Morbi lacus sem, semper id aliquam nec, elementum vel purus. Sed tristique ligula eget lacinia consequat. Integer in congue est. Suspendisse quis condimentum orci. Morbi vitae magna erat.
Sed diam ligula, rhoncus sed finibus eget, hendrerit non diam. Donec posuere lectus ut hendrerit commodo. Sed rhoncus eget nisl nec laoreet. Mauris ultrices turpis aliquam, imperdiet ipsum nec, dictum velit. Aliquam lacinia sapien quis diam dignissim, non aliquet felis posuere. Suspendisse sapien elit, sodales et volutpat in, tincidunt sed ex. Vivamus pretium euismod vulputate. Sed vestibulum nisl ut nisi semper auctor. Suspendisse malesuada, velit vitae volutpat placerat, ipsum magna lacinia nisi, in dapibus nisi neque sed lectus. Integer pellentesque ultricies mauris eget fringilla. Integer lorem magna, dictum malesuada nisi nec, dapibus rutrum nunc. Sed interdum leo eget augue ullamcorper, at suscipit magna consequat. Vivamus interdum, ante id efficitur suscipit, mi ipsum placerat urna, vitae iaculis dolor augue ut arcu. Nunc ac pulvinar nisi. Donec iaculis hendrerit ex, sodales pharetra tortor porta ac.
Maecenas mattis et dolor vitae cursus. Duis suscipit commodo felis, non venenatis sem mollis et. Aenean tincidunt finibus lectus, id ullamcorper magna hendrerit eget. Nunc dictum vehicula metus sit amet imperdiet. Aenean egestas eleifend dolor ut imperdiet. Ut sit amet dui turpis. Nam porttitor semper urna, et dignissim mauris varius non. Praesent viverra pulvinar lacinia. Vestibulum cursus lorem risus, a tempus orci venenatis sit amet. Nulla vehicula posuere ante, at fermentum nulla eleifend nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nibh tortor, at elementum eros pretium ac. Morbi vel arcu eget augue convallis ultricies. Maecenas eget ipsum ut enim condimentum volutpat sed quis ante. Donec dolor lorem, dapibus sit amet justo id, rhoncus imperdiet turpis. Nulla dictum lorem eget nulla convallis vehicula.
Ut nisi elit, fermentum eget condimentum non, luctus nec est. Ut eu condimentum mi, id fringilla felis. Vivamus sodales diam quam, non maximus tortor cursus quis. Morbi fringilla neque at mi ullamcorper, sit amet mollis sem lacinia. Sed et ex ex. Fusce et facilisis massa. Suspendisse quis tellus ut nisl auctor sagittis. Aenean consequat libero eros, nec cursus ante ultrices et. Fusce feugiat venenatis sem vel rutrum. Donec hendrerit enim vitae eros tempus, vel cursus mauris tincidunt. Ut condimentum lacus nunc, quis cursus justo vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate eros non lorem tincidunt convallis. Vivamus ac sem non lectus fermentum tempor in sed risus. Cras quis lectus eu massa consectetur hendrerit eget ac leo.
</p>
        </div>
        <div class="objetivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ipsum nec risus rhoncus accumsan. Vivamus ornare eros a ex bibendum consectetur. Donec mi nisl, dignissim sit amet massa eget, luctus bibendum dui. Morbi non erat in velit consequat scelerisque. In rhoncus est nulla, id tempus nisi laoreet a. Nunc sed facilisis diam, vel suscipit urna. Proin quis urna eu est cursus fringilla in ac felis. Sed molestie tristique luctus. Cras hendrerit eget felis sed suscipit. Aliquam eget tortor ex. Fusce vestibulum tortor vitae ornare rhoncus. Etiam eget diam neque. Ut id vulputate purus. Fusce porta, sem vitae suscipit dapibus, ligula sem condimentum tellus, sit amet elementum massa sem vitae purus. Nunc tempus aliquet ante et faucibus.
Morbi semper turpis eget ex gravida, eget fermentum risus tempor. Suspendisse ut neque ut arcu maximus facilisis. Maecenas ut convallis neque. Morbi lacus sem, semper id aliquam nec, elementum vel purus. Sed tristique ligula eget lacinia consequat. Integer in congue est. Suspendisse quis condimentum orci. Morbi vitae magna erat.
Sed diam ligula, rhoncus sed finibus eget, hendrerit non diam. Donec posuere lectus ut hendrerit commodo. Sed rhoncus eget nisl nec laoreet. Mauris ultrices turpis aliquam, imperdiet ipsum nec, dictum velit. Aliquam lacinia sapien quis diam dignissim, non aliquet felis posuere. Suspendisse sapien elit, sodales et volutpat in, tincidunt sed ex. Vivamus pretium euismod vulputate. Sed vestibulum nisl ut nisi semper auctor. Suspendisse malesuada, velit vitae volutpat placerat, ipsum magna lacinia nisi, in dapibus nisi neque sed lectus. Integer pellentesque ultricies mauris eget fringilla. Integer lorem magna, dictum malesuada nisi nec, dapibus rutrum nunc. Sed interdum leo eget augue ullamcorper, at suscipit magna consequat. Vivamus interdum, ante id efficitur suscipit, mi ipsum placerat urna, vitae iaculis dolor augue ut arcu. Nunc ac pulvinar nisi. Donec iaculis hendrerit ex, sodales pharetra tortor porta ac.
Maecenas mattis et dolor vitae cursus. Duis suscipit commodo felis, non venenatis sem mollis et. Aenean tincidunt finibus lectus, id ullamcorper magna hendrerit eget. Nunc dictum vehicula metus sit amet imperdiet. Aenean egestas eleifend dolor ut imperdiet. Ut sit amet dui turpis. Nam porttitor semper urna, et dignissim mauris varius non. Praesent viverra pulvinar lacinia. Vestibulum cursus lorem risus, a tempus orci venenatis sit amet. Nulla vehicula posuere ante, at fermentum nulla eleifend nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nibh tortor, at elementum eros pretium ac. Morbi vel arcu eget augue convallis ultricies. Maecenas eget ipsum ut enim condimentum volutpat sed quis ante. Donec dolor lorem, dapibus sit amet justo id, rhoncus imperdiet turpis. Nulla dictum lorem eget nulla convallis vehicula.
Ut nisi elit, fermentum eget condimentum non, luctus nec est. Ut eu condimentum mi, id fringilla felis. Vivamus sodales diam quam, non maximus tortor cursus quis. Morbi fringilla neque at mi ullamcorper, sit amet mollis sem lacinia. Sed et ex ex. Fusce et facilisis massa. Suspendisse quis tellus ut nisl auctor sagittis. Aenean consequat libero eros, nec cursus ante ultrices et. Fusce feugiat venenatis sem vel rutrum. Donec hendrerit enim vitae eros tempus, vel cursus mauris tincidunt. Ut condimentum lacus nunc, quis cursus justo vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate eros non lorem tincidunt convallis. Vivamus ac sem non lectus fermentum tempor in sed risus. Cras quis lectus eu massa consectetur hendrerit eget ac leo.</p>
        </div>
        <div class="objetivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium ipsum nec risus rhoncus accumsan. Vivamus ornare eros a ex bibendum consectetur. Donec mi nisl, dignissim sit amet massa eget, luctus bibendum dui. Morbi non erat in velit consequat scelerisque. In rhoncus est nulla, id tempus nisi laoreet a. Nunc sed facilisis diam, vel suscipit urna. Proin quis urna eu est cursus fringilla in ac felis. Sed molestie tristique luctus. Cras hendrerit eget felis sed suscipit. Aliquam eget tortor ex. Fusce vestibulum tortor vitae ornare rhoncus. Etiam eget diam neque. Ut id vulputate purus. Fusce porta, sem vitae suscipit dapibus, ligula sem condimentum tellus, sit amet elementum massa sem vitae purus. Nunc tempus aliquet ante et faucibus.
Morbi semper turpis eget ex gravida, eget fermentum risus tempor. Suspendisse ut neque ut arcu maximus facilisis. Maecenas ut convallis neque. Morbi lacus sem, semper id aliquam nec, elementum vel purus. Sed tristique ligula eget lacinia consequat. Integer in congue est. Suspendisse quis condimentum orci. Morbi vitae magna erat.
Sed diam ligula, rhoncus sed finibus eget, hendrerit non diam. Donec posuere lectus ut hendrerit commodo. Sed rhoncus eget nisl nec laoreet. Mauris ultrices turpis aliquam, imperdiet ipsum nec, dictum velit. Aliquam lacinia sapien quis diam dignissim, non aliquet felis posuere. Suspendisse sapien elit, sodales et volutpat in, tincidunt sed ex. Vivamus pretium euismod vulputate. Sed vestibulum nisl ut nisi semper auctor. Suspendisse malesuada, velit vitae volutpat placerat, ipsum magna lacinia nisi, in dapibus nisi neque sed lectus. Integer pellentesque ultricies mauris eget fringilla. Integer lorem magna, dictum malesuada nisi nec, dapibus rutrum nunc. Sed interdum leo eget augue ullamcorper, at suscipit magna consequat. Vivamus interdum, ante id efficitur suscipit, mi ipsum placerat urna, vitae iaculis dolor augue ut arcu. Nunc ac pulvinar nisi. Donec iaculis hendrerit ex, sodales pharetra tortor porta ac.
Maecenas mattis et dolor vitae cursus. Duis suscipit commodo felis, non venenatis sem mollis et. Aenean tincidunt finibus lectus, id ullamcorper magna hendrerit eget. Nunc dictum vehicula metus sit amet imperdiet. Aenean egestas eleifend dolor ut imperdiet. Ut sit amet dui turpis. Nam porttitor semper urna, et dignissim mauris varius non. Praesent viverra pulvinar lacinia. Vestibulum cursus lorem risus, a tempus orci venenatis sit amet. Nulla vehicula posuere ante, at fermentum nulla eleifend nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nibh tortor, at elementum eros pretium ac. Morbi vel arcu eget augue convallis ultricies. Maecenas eget ipsum ut enim condimentum volutpat sed quis ante. Donec dolor lorem, dapibus sit amet justo id, rhoncus imperdiet turpis. Nulla dictum lorem eget nulla convallis vehicula.
Ut nisi elit, fermentum eget condimentum non, luctus nec est. Ut eu condimentum mi, id fringilla felis. Vivamus sodales diam quam, non maximus tortor cursus quis. Morbi fringilla neque at mi ullamcorper, sit amet mollis sem lacinia. Sed et ex ex. Fusce et facilisis massa. Suspendisse quis tellus ut nisl auctor sagittis. Aenean consequat libero eros, nec cursus ante ultrices et. Fusce feugiat venenatis sem vel rutrum. Donec hendrerit enim vitae eros tempus, vel cursus mauris tincidunt. Ut condimentum lacus nunc, quis cursus justo vestibulum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate eros non lorem tincidunt convallis. Vivamus ac sem non lectus fermentum tempor in sed risus. Cras quis lectus eu massa consectetur hendrerit eget ac leo.</p>
        </div>
    </div>`;
            break;
        case 2:
            content.innerHTML = `
                <div class="carrossel">
                    <div class="carrossel-inner">
                        <div class="carrossel-item active">
                            <img src="https://via.placeholder.com/150" alt="Professor">
                            <div class="carrossel-caption">
                                <h3>Nome do Professor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Id congue id nunc enim nec aenean erat a.</p>
                            </div>
                        </div>
                        <div class="carrossel-item">
                            <img src="https://via.placeholder.com/150" alt="Professor">
                            <div class="carrossel-caption">
                                <h3>Nome do Professor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Id congue id nunc enim nec aenean erat a.</p>
                            </div>
                        </div>
                        <div class="carrossel-item">
                            <img src="https://via.placeholder.com/150" alt="Professor">
                            <div class="carrossel-caption">
                                <h3>Nome do Professor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Id congue id nunc enim nec aenean erat a.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carrossel-control prev" onclick="prevSlide()">&#10094;</a>
                    <a class="carrossel-control next" onclick="nextSlide()">&#10095;</a>
                </div>
            `;
            initializeCarrossel();
            break;
        case 3:
            content.innerHTML = `<img src="imgs/gradeCurricular.png" alt="Grade curricular do Curso Desenvolvimento de Software Multiplataforma">`;
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
/*
    // Atualiza a cor do texto
    var breadcrumbItems = document.querySelectorAll(".breadcrumb li p");
    for (var i = 0; i < breadcrumbItems.length; i++) {
        breadcrumbItems[i].classList.remove("active");
    }

    // Adiciona a classe ao texto
    breadcrumbItems[buttonNumber - 1].classList.add("active");
}*/

// Inicializa os ícones
lucide.createIcons();

// Função para inicializar o carrossel
function initializeCarrossel() {
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carrossel-item');
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carrossel-inner').style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function() {
        showSlide(currentIndex + 1);
    }

    window.prevSlide = function() {
        showSlide(currentIndex - 1);
    }
}
}
