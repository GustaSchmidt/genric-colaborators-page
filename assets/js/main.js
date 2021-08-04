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
            <div class="card-warp">
                <div class="foto-user">
                    <img src="./assets/retratos/`+foto+`" alt="">
                    <span class="notification" array-id="`+person_id+`">`+person_id+`</span>
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
