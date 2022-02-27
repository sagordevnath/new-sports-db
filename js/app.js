const allPlayers = () => {
    const searchValue = document.getElementById ('search-box').value;    

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    fetch(url)
    .then (res => res.json())
    .then (data => showPlayerDetails (data.player))    

}

const showPlayerDetails = (players) => {
    const parent = document.getElementById('player-container');
    
    for (const player of players) {
        console.log(player);
        const div = document.createElement('div');
        div.classList.add('col-md-6');        
    div.innerHTML = `
    <div class="card m-1 p-1" style="width: 17rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">                
        <h5 class="card-title">${player.strPlayer}</h5>                                  
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Country: ${player.strNationality}</li>
            <li class="list-group-item">Club: ${player.strTeam}</li>
            <li class="list-group-item">Jarsy No: ${player.strNumber}</li>
        </ul>
        <p class="card-text">${player.strDescriptionEN.slice(0, 150)}</p>
        <div class="card-body">
            <a href="#" class="card-link btn btn-danger">Delete</a>
            <a onclick="details('${player.idPlayer}')" href="#" class="card-link btn btn-success">Details</a>
        </div>
    </div>
    `;
    parent.appendChild(div);
    }
};

const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then (res => res.json())
    .then (data => console.log(data))
}

