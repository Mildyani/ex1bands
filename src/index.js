import bandCollection from './bands.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function(){
  const cards = document.getElementById('cards')
  console.log(bandCollection);
  const banddata = bandCollection.data;
  banddata.forEach(band => {
    let cardDOM = buildCardDOM(band)
    cards.insertAdjacentHTML('beforeend', cardDOM) 
  })
})


function buildCardDOM(band) {
    
    return (
      `<div class="card">
        <img src="${bandCollection.image_base_url.replace('xxxARTIST-IDxxx',band.art_id)}" alt="#">
        <div class="bands-info">
            <div class="album">${band.album_title}</div>
            <div class="artist">${band.artist_title}</div>
            <div class="genre">${band.genre_text}</div>
        </div>
       </div>`
    )
}
