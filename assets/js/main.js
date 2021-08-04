function loadJSONData(source_){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', source_, false);
    xobj.send(null);
    return JSON.parse(xobj.responseText);
}
function mount_card_string(id, foto, nome, cargo){
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
    return card_string;
}
var data = loadJSONData('./Dados/dados.json');
var cards;
for (let index = 0; index < data.length; index++) {
    console.log(index);
    //TODO: append de cards no warper de cards
}
console.log(data[0]);
do_cards(data[0].id, data[0].foto, data[0].nome, data[0].cargo, data[0].idade);
