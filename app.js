// Récupération des éléments du DOM manipulable
const hamburgerBtn = document.getElementById('hamburger');

// Clique menu mobile
hamburgerBtn.addEventListener('click', (evt) => {
    if(hamburgerBtn.classList.contains('active')) {
        hamburgerBtn.classList.remove('active')
    } else {
        hamburgerBtn.classList.add('active')
    }
   
})


// Chargement des particules
tsParticles.loadJSON("particles", "./presets/particles.json")
.then((container) => {
    console.log("callback - tsparticles config loaded");
})
.catch((error) => {
    console.error(error);
});
