    // Função para Mudar o Conteúdo de acordo com o botão clicado
    function changeContent(buttonNumber, element) {
        var content = document.getElementById("content");
    
        // Remove a cor vermelha dos botões
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("red-button");
        }
    
        // Adiciona a cor vermelha no botão clicado
        element.classList.add("red-button");
    
        // Atualiza o conteúdo da DIV baseado no botão clicado
        switch(buttonNumber) {
            case 1:
                content.innerHTML = `
                <body>
        <div id="contentObj">
            <div class="objetivo">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                <p>
                Formar profissionais completos em desenvolvimento de software multiplataforma, aptos a projetar, desenvolver, testar e implementar soluções inovadoras para diversos dispositivos e aplicações.
                </p>
            </div>
            <div class="objetivo">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                <p> 
                Preparar os alunos para atuarem em equipes multidisciplinares e gerenciarem projetos de software com eficiência.
                </p>
            </div>
            <div class="objetivo">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                <p> 
                Ensinar aos alunos os princípios da engenharia de software, incluindo metodologias de desenvolvimento ágeis, testes de software e gerenciamento de qualidade.
                </p>
            </div>
            <div class="objetivo">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                <p> 
                Incentivar a pesquisa e a investigação científica entre os alunos, estimulando-os a buscar novos conhecimentos e contribuir para o avanço da área de software.
                </p>
            </div>
        </div>`;
                break;
            case 2:
                content.innerHTML = `
                    <div class="carrossel">
                        <div class="carrossel-inner">
                            <div class="carrossel-item active">
                                <img src="imgs/profs/Mauricio.png" alt="Professor Mauricio">
                                <div class="carrossel-desc">
                                    <h3>Maurício Duarte</h3>
                                    <p><span>&emsp;</span>Graduado em Ciência da Computação pela UNESP - Bauru. Mestre em Ciência da Computação pela USP - São Carlos. 
                                    Professor Universitário desde 1991 (33 anos), atuando principalmente junto às disciplinas: Algoritmos e Lógica de Programação, 
                                    Técnicas de Programação, Estruturas de Dados, Teoria dos Grafos, Projeto de Compiladores, Sistemas Operacionais, entre outras.<br>
                                    <span>&emsp;</span>Linguagem C, C++, Java e Python.  Trabalhou nas Instituições:  UNIMAR e UNIVEM (Marilia), FIAP , FAAP e Faculdades SENAC (São Paulo), 
                                    FAIP e FAEF (Garça). Atualmente leciona junto às Faculdades: FATEC Garça, FATEC Marilia e FATEC Pompéia.<br>
                                    <span>&emsp;</span>Também possui experiencia no 
                                    ensino de Matemática no Ensino Médio (Colégio Esquema Unico de Marilia).  Casado com Mary S. C. Duarte há 33 anos... com quem teve 3 filhos: 
                                    Lucas C. Duarte (28 anos), Murilo C. Duarte (24 anos) e Tamires C. Duarte (20 anos). Cristão e professo minha fé junto à Igreja Católica atuando 
                                    nas Pastorias do Batismo e  Familiar (Preparação para o Sacramento do Matrimonio e Encontro de Casais) na paróquia São Miguel em Marilia.
                                    </p>
                                </div>
                            </div>
                            <div class="carrossel-item">
                                <img src="imgs/profs/ximira.png" alt="Professor João">
                                <div class="carrossel-desc">
                                    <h3>João Cardia</h3>
                                    <p><br><span>&emsp;</span>Possui graduação em Bacharelado Em Ciência da Computação pelo Centro Universitário Euripedes de Marília - UNIVEM (2010), Mestrado em Ciência da Computação pela Universidade Estadual Paulista "Júlio de Mesquita Filho" - UNESP (2014) e é doutor em Ciência da Computação pela Universidade Federal de São Carlos - UFSCAR, tendo um período sanduíche na Università degli Studi di Firenze. Leciona no Centro Paula Souza desde 2015 e atuou como desenvolvedor de software de 2005 até 2012 e, posteriormente, de 2014 até 2015. Além da docência atualmente é consultor na implementação de projetos de P&D dentro de empresas e na busca de fomento a fundo perdido.<br><span>&emsp;</span>
    Dentro da sua atividade no CPS já foi coordenador de curso na FATEC Catanduva (período de 2020 até 2024) no curso de Gestão da Tecnologia da Informação (GTI), durante esse período também foi membro da congregação e do NDE do curso. Atualmente é presidente da CIPA, membro do NDE dos cursos de GTI e Desenvolvimento de Software Multiplataforma (DSM). Também ministrou disciplinas na pós-graduação de Ciência de Dados e Inteligência Artificial na Universidade de Marília (UNIMAR). O docente faz parte do grupo de pesquisa Biometric & Pattern Recognition  Research Group (RECOGNA).
    O presente projeto de pesquisa é uma aplicação dentro da linha de pesquisa que o proponente realiza. Dentro dessa linha o docente colabora com o MICC (Media Integration and Communication Center) situado em Florença na Itália, mais especificamente com os Professores Doutores Claudio Ferrari e Stefano Berretti.<br><span>&emsp;</span>
    Dentre os trabalhos de orientação realizados, é possível destacar as orientações de Trabalho de Graduação em andamento dos alunos Mateus Augusuto Rigotti Ferreira, atuando com a avaliação do aprendizado de máquina no auxílio de diagnóstico de dengue e Marcela Caparroz Fecchi Lobo, que avalia a construção de um aplicativo de celular que utilize modelos de aprendizado de máquina para detectar possíveis casos de dengue de forma prematura e utilizar geolocalização para detectar possíveis focos endêmicos. Atualmente o docente orienta como iniciação científica a aluna Melissa Pereira Leal que estuda aplicações de modelos de aprendizado de máquina para auxílio no tratamento do Feline Leukemia Virus (FeLV) e Agnes Maria Varela de Figueiredo que avalia as implicações do viés de gênero dentro de algoritmos de aprendizado de máquina.<br><span>&emsp;</span>
    Nas orientações já concluídas se destaca o trabalho de graduação das alunas Lívia Marcela de Sousa e Maria Odete Tenório de Oliveira onde estimaram a percepção emocional que postagens no Twitter carregavam sobre os candidatos da eleição de 2022, o trabalho do aluno Alberto Santos de Oliveira Junior avaliou algoritmos de aprendizado de máquina na detecção de ceratocone. O trabalho dos alunos Antonio José da Silva Ferreira e Gabriela Regina Soares avaliou uma Rede Neural Convolucional (RNC) com um mecanismo de atenção como forma de identificar valores dimensionais das representações emocionais, com base nisso seria possível estimar algum tipo de feedback não-verbal para auxiliar professores.<br><span>&emsp;</span>
    Do ponto de vista da iniciação científica a aluna Thais do Nascimento juntou um conjunto de dados sobre percepção emocional e propôs uma taxonomia hierárquica de emoções que serve como forma de treinamento para algoritmos de aprendizado de máquina, outro ponto importante é que a aluna foi bolsista do programa de monitoria de iniciação em desenvolvimento tecnológico e inovação (MIDTI). O docente coorientou a dissertação de mestrado do aluno Henrique Leal Tavares, que propôs um algoritmo biométrico baseado em características antropométricas e de marcha.<br><span>&emsp;</span>
    Desempenhou seu papel de liderança principalmente na sua atuação como coordenador de curso, onde realizou em conjunto com diversos professores e alunos a implantação de projetos de iniciação científica tecnológica dentro da FATEC de Catanduva, orientando o primeiro projeto com bolsa MIIDTI dentro da unidade, como também organizando um grupo de docentes para discussão sobre avaliações. Em parceria com a professora Dra. Ana Carolina Freschi estudou a relação das representações emocionais com o feedback emocional, sendo este o foco das colaborações com o MICC.<br><span>&emsp;</span>
    Também fomentou a implantação dos PCIs dentro da FATEC Catanduva, atuando como facilitador junto aos professores. Atualmente só o curso de GTI possui projetos em PCI.<br><span>&emsp;</span>
    Outro ponto relevante é que, junto com o professor Msc. Paulo Gaudencio, implementou o Hackaton do setor sucroenergético. Durante as três edições do evento as empresas traziam desafios e os alunos da instituição construíam protótipos alinhados com as soluções propostas. Assim houve abertura para proposta de projetos inovadores que atuaram diretamente nas necessidades do APL.<br><span>&emsp;</span>
    Dentro dos últimos cinco anos o docente publicou vários artigos que são relevantes para a área do projeto. O trabalho intitulado 3D face recognition with reconstructed faces from a collection of 2D images, publicado em 2019, investiga a possibilidade de aplicar um método proposto de reconhecimento de faces 3D em modelos reconstruídos a partir de uma coleção de imagens 2D. O artigo foi apresentado no 23rd Iberoamerican Congress on Pattern Recognition.<br><span>&emsp;</span>
    No trabalho intitulado Deep learning from 3dlbp descriptors for depth image based face recognition, também de 2019. A ideia é trabalhar com uma representação intermediaria das faces 3D, possibilitando arquiteturas de redes neurais convolucionais (RNC) mais rasas e de forma que métodos de reconhecimento 2D possam utilizar a mesma informação. O artigo foi apresentado na International Conference on Biometrics.<br><span>&emsp;</span>
    Também em 2020 o docente participou da publicação do trabalho People identification based on soft biometrics features obtained from 2D poses. O trabalho investiga a extração de características antropométricas a partir de dados estimados de um algoritmo de identificação de poses em imagens. O trabalho foi apresentado na 9th Brazilian Conference on Intelligent Systems.<br><span>&emsp;</span>
    A orientação dos alunos Antonio José da Silva Ferreira e Gabriela Regina Soares gerou a publicação do trabalho Avaliação de reconhecimento de emoção dimensional com uma abordagem baseada em atenção. O trabalho é o resultado da orientação citada anteriormente, sendo publicada em 2022 no periódico Interface Tecnológica.<br><span>&emsp;</span>
    Em 2023 também foi publicado o resultado da iniciação científica da aluna Thais do Nascimento. O trabalho intitulado Aprendizado de máquina e feedback: Um estudo sobre expressões faciais em um ambiente virtual colaborativo foi apresentado no Encontro do Programa de monitoria nas FATECs.<br><span>&emsp;</span>
    O trabalho intitulado Learning streamed attention network from descriptor images for cross-resolution 3D face recognition estudou uma arquitetura de RNC com um mecanismo de atenção focada em realizar reconhecimento biométrico 3D em ambientes onde existe variação na qualidade dos modelos. O trabalho foi publicado em 2023 no periódico ACM Transactions on Multimedia Computing, Communications and Applications.<br><span>&emsp;</span>
    Por fim o docente participou da publicação do trabalho Towards a Better Understanding of Human Emotions: Challenges of Dataset Labeling que investiga a dificuldade dos rótulos das bases de dados atuais para reconhecimento de emoções. O trabalho foi publicado em 2023 na International Conference on Image Analysis and Processing.<br><span>&emsp;</span>
    Após todo o exposto o docente acredita que a investigação e aplicação de métodos de reconhecimento de expressão faciais pode avançar a área do conhecimento em vários segmentos. A descoberta e aplicação de novas formas de representação emocional pode resultar em produtos que utilizam essa informação de forma quantitativa. Também é possível gerar dados para, de forma mais precisa, validar hipóteses que envolvam análise de representação emocional. Dentro da área do aprendizado de máquina, mesmo sendo uma pesquisa aplicada, é natural encontrar novos mecanismos que são possíveis de incorporar dentro de arquiteturas de redes neurais, sendo este um avanço considerável.
                                    </p>
                                </div>
                            </div>
                            <div class="carrossel-item">
                                <img src="imgs/profs/marcel.png" alt="Professor Marcel">
                                <div class="carrossel-desc">
                                    <h3>Marcel Santos</h3>
                                    <p><span>&emsp;</span>Marcel Santos Silva é Professor, Consultor e Produtor de Conteúdo.
                                        Com mais de 20 anos de experiência, sua vida profissional foi dedicada à área de tecnologia da informação e inovação.
                                        Bacharel em Análise de Sistemas pelo Centro Universitário de Lins. Especialista em Geoprocessamento pela UFSCar. Especialista em Ethical Hacking e CyberSecurity pela Uniciv. Mestre em Ciência da Informação pela Unesp. Doutorando em Engenharia Elétrica e de Computação pela Unicamp.
                                        Professor de Ensino Superior e pesquisador na Fatec Marília, Empreendedor na área de Gestão de Tecnologia, Segurança da Informação e Inovação, atuando com consultoria técnica especializada, formação profissional e técnica em empresas no Estado de São Paulo.<br>
                                        <span>&emsp;</span>Produtor de conteúdo na área de desenvolvimento de sistemas, segurança da informação, redes de computadores, gestão de tecnologia entre outros.
                                        Coordenador do Curso Superior de Tecnologia em Desenvolvimento de Software na Fatec Marília.
                                        Fundador da Magres Tecnologia, Treinamento e Vendas.
                                        Presidente da Associação Brasileira dos Conteudistas, Autores, Validadores, Revisores, Designers Instrucionais e Produtores de Material Didático - ABCONT.
                                        Membro do CODEM - Conselho de Desenvolvimento Estratégico de Marília na Câmara Técnica de Tecnologia e Inovação.
                                        Membro titular, representante da Fatec Marília, no COMCITI - Conselho Municipal de Ciência, Tecnologia e Inovação de Marília.</p>
                                </div>
                            </div>
                            <div class="carrossel-item">
                                <img src="imgs/profs/corolla.png" alt="Professora Larissa">
                                <div class="carrossel-desc">
                                    <h3>Larissa</h3>
                                    <p><span>&emsp;</span>Doutora em Ciência da Informação pela Unesp - Marília, Mestre e Bacharel em Ciência da Computação pelo Centro Universitário Eurípides de Marília (UNIVEM); Professora Doutora nas Faculdades de Tecnologia "Júlio Julinho Marcondes de Moura" - FATEC Garça, e na Faculdade "Rafael Camarinha" Fatec Marília nos cursos de Análise e Desenvolvimento de Sistemas, AMS - ADS (Articulação da Formação Profissional Média e Superior) e Desenvolvimento Multplataforma (DSM). Integrante do Núcleo de Pesquisa de Iniciação Científica e Tecnológica da FATEC (Garça) desde 2012.<br><span>&emsp;</span>
                                        Linha de Pesquisa e áreas de atuação: Informação e Tecnologia com experiência em Ciência da Computação e Ciência da Informação. Atualmente realizo pesquisas com foco em: Banco de Dados,Big Data, Ciência de Dados, Data Science, Metodologias Ágeis, Interação Humano Computador,Design Digital, Jogos computacionais e Realidade Virtual. Atuo na linha de pesquisa da Ciência da Informação em Web Semântica, Linked Data, Dados Abertos e Acervos Digitais e sou membro do NEWSDA - Núcleo de Estudos em Web Semântica e Dados Abertos.</p>
                                </div>
                            </div>
                            <div class="carrossel-item">
                                <img src="imgs/profs/Querino.png" alt="Professor Querino">
                                <div class="carrossel-desc">
                                    <h3>Carlos Querino</h3>
                                    <p>Carlos Querino possui Graduação e Mestrado em Ciência da Computação, com 24 anos de experiência como docente, sendo 18 anos no ensino superior.
                                    Conta também com dois livros publicados, sendo eles: <br>Criando Aplicativos para iPhone e iPad; Desenvolvendo seu primeiro aplicativo Android (1ª e 2ª edição). Ambos pela editora Novatec.</p>
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
                content.innerHTML = `<div class="containerGrade">
                        <div class="headerCard">
                            <span class="dropdown">
                                ▼ Primeiro Semestre
                                <div class="dropdown-content">
                                    <a href="#">Segundo Semestre</a>
                                    <a href="#">Terceiro Semestre</a>
                                </div>
                            </span>
                        </div>
                        <div class="conteudoGrade">
                            <div class="grade">
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>
                                <h5>Algoritmos e Lógica de Programação</h5>
                            </div>
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                                <h5>Desenvolvimento Web I</h5>
                            </div>
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>
                                <h5>Design Digital</h5>
                            </div>
                            </div>
                            <div class="grade">
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                                <h5>Engenharia de Software I</h5>
                            </div>
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
                                <h5>Modelagem de Banco de Dados</h5>
                            </div>
                            <div class="materias">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d90000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
                                <h5>Sistemas Operacionais e Redes de Computadores</h5>
                            </div>
                            </div>
                        </div>
                        </div>`;
                break;
            case 4:
                case 4:
                    content.innerHTML = `<div class="containerBadges">
                <div class="rowBadges">
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="certificado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                        <p>Certificação Intermediária Desenvolvedor Front-End</p>
                        <p class="semestre">Ao final do segundo semestre</p>
                    </div>
                </div>
                <div class="rowBadges">
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="certificado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                        <p>Certificação Intermediária Desenvolvedor Back-End</p>
                        <p class="semestre">Ao final do quarto semestre</p>
                    </div>
                </div>
                <div class="rowBadges">
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                        <p>Badge XXXXX</p>
                    </div>
                    <div class="certificado">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b20000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                        <p>Certificação Intermediária Desenvolvedor para Dispositivos Móveis</p>
                        <p class="semestre">Ao final do sexto semestre</p>
                    </div>
                </div>
            </div>`;
                break;
            default:
                content.innerHTML = "Invalid Button";
        }
    
    // Inicializa os ícones
    lucide.createIcons();
    
    // Função para inicializar o Carrossel dos Docentes
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
    

    // Função da Grade Curricular
    document.querySelectorAll('.materias').forEach(card => {
        card.addEventListener('mouseenter', () => {
          document.querySelectorAll('.materias').forEach(c => c.classList.remove('highlight'));
        card.classList.add('highlight');
        });
        card.addEventListener('mouseleave', () => {
          document.querySelectorAll('.materias').forEach(c => c.classList.remove('highlight'));
        });
      });


    // Função Carrossel de Opiniões

    function initializeCarrosselOp() {
        let currentIndex = 0;
    
        function showSlide(index) {
            const slides = document.querySelectorAll('.carrossel-itemOp');
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            document.querySelector('.carrossel-innerOp').style.transform = `translateX(${offset}%)`;
        }
    
        window.nextSlide = function() {
            showSlide(currentIndex + 1);
        }
    
        window.prevSlide = function() {
            showSlide(currentIndex - 1);
        }

    showSlide(currentIndex);
 }

 document.addEventListener('DOMContentLoaded', initializeCarrosselOp);
      