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
        template += `<div class="container">
  <div class="row results">
    <div id="foundMusic">
        <div class="img-container card">
          <img src="${foundMusic.albumArt}" alt="" />
          <audio controls>
          <source src="${foundMusic.preview}"> Your browser does not support the audio element.
          </audio>
          
          <h1>${foundMusic.title}</h1>
          <p>${foundMusic.artist}</p>
          <p>${foundMusic.collection}</p>
          <p>Collection Price ${foundMusic.price}</p>
        </div>
    </div>
  </div>
</div>`
        songElement.innerHTML = template
    }

    console.log(songList);
}

window.addEventListener("play", function(evt)
{
   if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
   {
       window.$_currentlyPlaying.pause();
   } 
   window.$_currentlyPlaying = evt.target;
}, true);