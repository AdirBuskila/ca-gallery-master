'use strict'

// $('#portfolio').children('link1').click(ChangeModalInfo(1))
// $('#portfolio').children('link2').click(ChangeModalInfo(2))

var gProjs = [{
        id: "1",
        name: "PacMan",
        title: "Retro 80's Game",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/1-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "2",
        name: "Touch The Nums",
        title: "Testing your speed and the ability to count",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/2-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "3",
        name: "Trivia Game",
        title: "Trivia game about Scientific subjects",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/3-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Objects", "Matrixes"],
    },
    {
        id: "4",
        name: "MineSweeper",
        title: "The game you play with there's no internet",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/4-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "5",
        name: "Responsive Design",
        title: "Applying one site on all Devices",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/portfolio/5-full.jpg",
        publishedAt: 1448693940000,
        labels: ["Bootstrap", "Landing sites"],
    }

]

$(onInit)

function onInit() {
    renderProjs()
}


function renderProjs() {
    const projs = getProjs()
    const strHtmls = projs.map(function(proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="ChangeModalInfo('${proj.id}')">
        <a class="portfolio-link link1" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
        </div>
    </div>
            `
    })
    $('#proj-container').html(strHtmls.join(''))
}

function getProjs() {
    return gProjs
}


function ChangeModalInfo(id) {
    const $elModal = $('#portfolioModal1')
    const proj = gProjs.find(project => project.id === id)
    $('#portfolioModal1').find('h2').text(proj.name)
    $('#portfolioModal1').find('.item-intro').text(proj.title)
    $('#portfolioModal1').find('img').attr("src", proj.url);
    $('#portfolioModal1').find('.desc').text(proj.desc)
}