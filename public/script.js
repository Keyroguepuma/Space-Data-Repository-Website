//Click on the planet slide
//var planetDiv = document.getElementById("planet-hover");
//planetDiv.onclick = () =>{
   // window.location.href="planet.html";
//}


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
        planetImage.src = "/public/icons/telescope.gif";
        blackHoleTitle.innerHTML = "SpaceCrafts";
        blackHoleImg.src = "/public/icons/rocket.gif";
        solarSystemDiv.style.display = "none";
    }else{
        repositoryTitle.innerHTML = "Celestial Bodies";
        planetTitle.innerHTML = "Planets";
        planetImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwT_bY1Eoo0V9dUMz83RtZg6x_NMYeXhjTA&s";
        blackHoleTitle.innerHTML = "Black Holes";
        blackHoleImg.src = "https://science.nasa.gov/wp-content/uploads/2023/09/hires.jpg?w=4096&format=jpeg";
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





