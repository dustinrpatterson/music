//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {
    var template = "";
    var songElement = document.getElementById('foundMusic')
    for (var i = 0; i < songList.length; i++) {
        var foundMusic = songList[i]
        template += `<div class=container>
  <div class="row">
    <div id="foundMusic" class="col-xs-6 card">
      <div class="row">
        <div class="col-md-3">
        <div class="img-container">
          <img src="${foundMusic.albumArt}" alt="" />
          </div>
        </div>
        <div class="col-md-offset-3 music">
          <h4>${foundMusic.title}</h4>
          <p>${foundMusic.artist}</p>
          <p>${foundMusic.collection}</p>
          <p>Price ${foundMusic.price}</p>
          <audio controls>
            <source src="${foundMusic.preview}"> Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  </div>
</div>`
        songElement.innerHTML = template
    }

    console.log(songList);
}
