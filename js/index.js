var lista = [
    {imagem: '<img src="images/python.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">Python</span>', texto: "<p>Desenvolvo scripts e aplicações eficientes, explorando lógica e resolução de problema.</p>"},
    {imagem: '<img src="images/html.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">HTML</span>', texto: "<p>Estruturo conteúdos na web com semântica e organização, criando páginas claras e acessíveis.</p>"},
    {imagem: '<img src="images/css.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">CSS</span>', texto: "<p>Estilizo páginas com design moderno e responsivo, cuidando da aparência e experiência do usuário.</p>"},
    {imagem: '<img src="images/js.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">JavaScript</span>', texto: "<p>Torno páginas interativas e dinâmicas, implementando funcionalidades para melhorar a experiência do usuário.</p>"},
    {imagem: '<img src="images/mysql.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">MySQL</span>', texto: "<p>Crio e manipulo bancos de dados relacionais para armazenar e consultar informações de forma eficiente.</p>"},
    {imagem: '<img src="images/git.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">Git</span>', texto: "<p>Gerencio versões de projetos com controle de alterações, garantindo organização e histórico seguro.</p>"},
    {imagem: '<img src="images/github.png" width="60px" height="60px" ></img>', titulo: '<span class="card-text-titulo">GitHub</span>', texto: "<p>Compartilho e colaboro em projetos, facilitando integração e desenvolvimento em equipe.</p>"},
];

for (i = 0; i<lista.length; i++) {
    var card = 
        `<div class="section2-direita">
            <div class="card">
                <div class="image">
                    ${lista[i].imagem}
                </div>
                <div class="card-text">
                    ${lista[i].titulo}
                    ${lista[i].texto}
                </div>
            </div>
        </div>`

    document.getElementById("card-loop").innerHTML += card;

}