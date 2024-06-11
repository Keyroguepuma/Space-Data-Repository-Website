


function moreItems(){
    //Planet Div
    var planetTitle = document.getElementById("planet-title");
    var planetImage = document.getElementById("planet-image");

    //Black Holes Div
    var blackHoleTitle = document.getElementById("blackHole-title");
    var blackHoleImg = document.getElementById("blackHole-image");

    //Solar System Div
    var solarSystemDiv = document.getElementById("solarSystem-hover");

    //repository title
    var repositoryTitle = document.getElementById("celestial-title");
    

    if(planetTitle.innerHTML === "Planets"){
        repositoryTitle.innerHTML = "Other";
        planetTitle.innerHTML = "Space Instruments";
        planetImage.src = "/icons/telescope.gif";
        blackHoleTitle.innerHTML = "SpaceCrafts";
        blackHoleImg.src = "/icons/rocket.gif";
        solarSystemDiv.style.display = "none";
    }else{
        repositoryTitle.innerHTML = "Celestial Bodies";
        planetTitle.innerHTML = "Planets";
        planetImage.src = "/icons/mars.gif";
        blackHoleTitle.innerHTML = "Black Holes";
        blackHoleImg.src = "/icons/black-hole.gif";
        solarSystemDiv.style.display = "block";
    }
    
}

function checkerUpdates(){
    var checkBox = document.getElementById("updates");

    if(checkBox.checked){
        alert("You'll Recieve an email every 24 hours of a new planet");
    }
}

//Fetching Astronomy Picture of the day
function imageOfTheDay(){
    var image = document.getElementById('index-image');
    var title = document.getElementById('index-title');
    var description = document.getElementById('index-description');
    fetch('https://api.nasa.gov/planetary/apod?api_key=EsguqrUFTrEfeFEm4nGCs6DqBgp44y2tPABa5gHV')
        .then(response => response.json())
        .then(data => {
            title.innerHTML = data.title;
            image.src = data.hdurl;
            description.innerHTML = data.explanation;
        });

}

function toggleBookmark() {
    var bookmarked = document.getElementById('bookmark-star');

    if (bookmarked.classList.contains('fa-regular') && bookmarked.classList.contains('fa-star')) {
        bookmarked.classList.remove('fa-regular', 'fa-star');
        bookmarked.classList.add('fa-solid', 'fa-star');
    } else {
        bookmarked.classList.remove('fa-solid', 'fa-star');
        bookmarked.classList.add('fa-regular', 'fa-star');
    }
}

document.getElementById('bookmark-star').addEventListener('click', toggleBookmark);





