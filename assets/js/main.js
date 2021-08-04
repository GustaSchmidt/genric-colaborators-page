function loadJSONData(source_){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', source_, false);
    xobj.send(null);
    return JSON.parse(xobj.responseText);
}
function do_cards(id, foto, nome, cargo){
    var card_string = `
    <div class="col-3 card">
        <div class="card-warper">
            <div class="card-warp">
                <div class="foto-user">
                    <img src="./assets/retratos/`+foto+`" alt="">
                    <span class="notification" array-id="`+id+`">1</span>
                </div>
                <div class="dados-user">
                    <h2>`+nome+`</h2>
                    <h3>`+cargo+`</h3>
                </div>
            </div>
        </div>
    </div>
    `;
    console.log(card_string);
}
var data = loadJSONData('./Dados/dados.json');
console.log(data[0]);
do_cards(data[0].id, data[0].foto, data[0].nome, data[0].cargo, data[0].idade);
