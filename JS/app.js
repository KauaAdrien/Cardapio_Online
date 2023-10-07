$(document).ready(function () {
    cardapio.eventos.init();
})

var cardapio = {};

cardapio.eventos = {

    init: () => {
        cardapio.metodos.obterItensCardapio();
    }

}

cardapio.metodos = {

    obterItensCardapio: (categoria ='burgers') => {

        var filtro = MENU[categoria];
        console.log(filtro);

        $("#itensCardapio").html('')

        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${name}/g, e.name)
            .replace(/\${price}/g, e.price.toFixed(2).replace('.' , ','));

            $("#itensCardapio").append(temp)

        })

        $(".container-menu a").removeClass('active');

        $("#menu-" + categoria).addClass('active'); 

    }

}

cardapio.templates = {

    item: `
        <div class="col-12 col-lg-3 col-md-3 col-sm-6 mb-5 animated fadeInUp">
            <div class="card card-item" id="\${id}">
                <div class="img-produto">
                    <img src="\${img}" />
                </div>
                <p class="title-produto text-center mt-4">
                    <b>\${name}</b>
                </p>
                <p class="price-produto text-center">
                    <b>R$ \${price}</b>
                </p>
                <div class="add-carrinho">
                    <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')"><i class="fas fa-minus"></i></span>
                    <span class="add-numero-itens" id="qntd-\${id}">0</span>
                    <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')"><i class="fas fa-plus"></i></span>
                    <span class="btn btn-add" onclick="cardapio.metodos.adicionarAoCarrinho('\${id}')"><i class="fa fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    `

}