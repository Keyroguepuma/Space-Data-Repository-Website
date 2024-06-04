//Click on the planet slide

var planetDiv = document.getElementById("planet-hover");
planetDiv.onclick = () =>{
    window.location.href="planet.html";
}


function moreItems(){
    //Planet Div
    var planetTitle = document.getElementById("planet-title");
    var planetImage = document.getElementById("planet-image");

    //Black Holes Div
    var blackHoleTitle = document.getElementById("blackHole-title");
    var blackHoleImg = document.getElementById("blackHole-image");

    //Solar System Div
    var solarSystemDiv = document.getElementById("solarSystem-hover");
    

    if(planetTitle.innerHTML === "Planets"){
        planetTitle.innerHTML = "Space Instruments";
        planetImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CkdwuSWBvumpEr-V22eZ1zEJWrc5lOSafh1g49FE69-aV8NPbA&s";
        blackHoleTitle.innerHTML = "SpaceCrafts";
        blackHoleImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEeUjGaoY4ohrDAmPJYdYk-50lKOH2G3-jA&s";
        solarSystemDiv.style.display = "none";
    }else{
        planetTitle.innerHTML = "Planets";
        planetImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwT_bY1Eoo0V9dUMz83RtZg6x_NMYeXhjTA&s";
        blackHoleTitle.innerHTML = "Black Holes";
        blackHoleImg.src = "https://science.nasa.gov/wp-content/uploads/2023/09/hires.jpg?w=4096&format=jpeg";
        solarSystemDiv.style.display = "block";
    }
    
}