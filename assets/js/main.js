function loadJSONData(source_){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', source_, false);
    xobj.send(null);
    return JSON.parse(xobj.responseText);
}
function mount_card_string(person_id, foto, nome, cargo){
    var card_string = `
    <div class="col-3 card">
        <div class="card-warper">
            <div class="card-warp card-person" id="`+person_id+`" onclick="select_this(this.id)">
                <div class="foto-user">
                    <img src="./assets/retratos/`+foto+`" alt="">
                    <span class="notification">`+person_id+`</span>
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
function select_this(id){
    var card = document.getElementById(id);
    var data = loadJSONData('./Dados/dados.json');
    var person = data[id-1];


    /*reset bg colors*/


    var id_persons = document.getElementsByClassName('card-person');

    for (var i = 0; i < id_persons.length; i++) {
        id_persons[i].style.backgroundColor = '#f1f1ef';
        id_persons[i].children[1].childNodes[1].style.color = "#002b50";
        id_persons[i].children[1].childNodes[3].style.color = "#002b50";
    }

    /*set new card*/
    var img_selected = document.getElementById('img_selected');
    var nome_selected = document.getElementById('nome_selected');
    var cargo_selected = document.getElementById('cargo_selected');
    var idade_selected = document.getElementById('idade_selected');

    var card_name = card.children[1].childNodes[1];
    var card_cargo = card.children[1].childNodes[3];

    card_name.style.color = "#fff";
    card_cargo.style.color = "#fff";

    img_selected.src = 'http://localhost/assets/retratos/'+person.foto;
    nome_selected.textContent = person.nome;
    cargo_selected.textContent = person.cargo;
    idade_selected.textContent = person.idade;

    card.style.backgroundColor = '#002b50';

}
document.addEventListener("DOMContentLoaded", function(event) {
    var data = loadJSONData('./Dados/dados.json');
    var obj = document.getElementById("options");
    for (var i = 0; i < data.length; i++){
        obj.innerHTML = obj.innerHTML + mount_card_string(data[i].id, data[i].foto, data[i].nome, data[i].cargo);
    }

});
