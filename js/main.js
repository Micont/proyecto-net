// Song data

const songList = [
    {
        title: "Rels B - Boys Dont t Cry", 
        file: "Rels-B_Boys_Don_t_Cry.mp3" ,
        cover: "cover-rels.jpg"
    },
    
    {
        title: "Duki - Pintao", 
        file: "DUKI-Pintao-Rei-YSY.mp3",
        cover: "cover-duki.jpg"
    },

    {
        title: "Cancerbero - Pensando en ti", 
        file: "Pensando_en_ti.mp3",
        cover: "cover-canserbero.jpg"
    }
]

// Actual song
let actualSong = null ;

// Capturar Elementos del Dom para trabjar con JS

const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title") 


// Cargar canciones y mostrar el listados
function loadSongs(){
    songList.forEach((song, index) =>{
        
        // Crear Li 
        const li = document.createElement("li")
        // Crear a 
        const link = document.createElement("a")
        // Hidratar a 
        link.textContent = song.title
        link.href = "#"
        // Escuchar cliks
        link.addEventListener("click", () => loadSong(index))

        // Añadir a li
        li.appendChild(link)
        // Añadir li a ul
        songs.appendChild(li)
    })
}

// Cargar cancion selecionada

function loadSong(songIndex){
    if(songIndex ==! actualSong){
        actualSong = songIndex
        audio.src = "./audio/" + songList[songIndex].file
        audio.play()
        changeCover(songIndex)
        changeSongTitle(songIndex)
        changeActiveClass()
    }
            
}

// Cambiar clase activa
function changeActiveClass(){
    const links = document.querySelectorAll("a")
    console.log(links)
}

//  Cambair el cover de la cancion
function changeCover(songIndex){
    cover.src = "../img/" + songList[songIndex].cover
}

// cambiar el titulo de la funcion
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

// Go!
loadSongs()