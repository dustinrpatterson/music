//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
 var template = "";
 var songElement = document.getElementById('foundMusic')
 for (var i = 0; i < songList.length; i++) {
   var foundMusic = songList[i]
   template += `<div id="foundMusic">
        <div class="img-container">
          <img src="${foundMusic.albumArt}" alt="" />
        </div>
        <div class="text-container">
          <h2>${foundMusic.title}</h2>
          <p>${foundMusic.artist}</p>
          <p>${foundMusic.collection}</p>
          <p>${foundMusic.price}</p>
          
          <audio controls>
          <source src="${foundMusic.preview}" >
        Your browser does not support the audio element.
        </audio>
        </div>
      </div>`
      songElement.innerHTML = template
 }
 
 
 
  console.log(songList);
}