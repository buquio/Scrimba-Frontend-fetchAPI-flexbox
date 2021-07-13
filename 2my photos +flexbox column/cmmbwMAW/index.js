/* 
    2. 
       Write a function to create the my-photos Component
       
       Create a Column Flexbox container around my-photos
       
       Create a new img and place it, centered, on top(overlaid on) my-photos
        -This should be hidden initially
        -Also give it the my-photo class
    
       Create a "click" event for each photo in my-photos
        -When clicked, load the clicked photo into the new img tag
*/

async function getPhotos() {
    let response = await fetch("photos.json") //get 9 data frm photo.json local file
    let photos = await response.json()
    return photos
}

//create photo template
function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => { //takes a photo & get its src=photo.id with size:100 & alt=photo.title put inside img  
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`  //then put all the images inside div 
}

//displaySelectedImg
function displaySelectedImg(photos) {
// getPhotos().then(photos => { //selected-div(size-200) is hidden at first   
    document.body.innerHTML = `<div class="my-gallery"> 
        <img style="display: none;" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))// coverts the object entries to array
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", event => {
            let selectedPhotoSrc = `${photoImg.src.substr(0, photoImg.src.length - 7)}200/200`

            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
        })
    })
// })
}
getPhotos()
.then(displaySelectedImg)


