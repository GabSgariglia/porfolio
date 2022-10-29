
let app = function () {
    return {
        afficherProjet:false,
        projetClicked:0,
        var: popup = document.querySelector(".projetPopUp"),
        disabled:true,
        startProject:true,
        showPopup(){
            this.projetInPopUp.splice(0, 1, this.projet)
            this.blur()
            this.afficherProjet = !this.afficherProjet
            // this.btnDisable = !this.btnDisable
            popup.classList.toggle('showPopup')
        },
        showPopup2(){
            if(this.disabled===false){
                this.disabled=true
                this.showPopup()
            }
            else if(this.disabled===true){
                this.disabled=false

            }
            
        },
        var: b = document.querySelectorAll(".blur"),
        blur() {
            // b.classList.toggle('active')
            b.forEach(el => el.classList.toggle('active'));
        },
        showjeu(){
            items = this.projet.filter(item => item.categori == "jeu");
            this.startProject =false
            this.projetByCategorie = items
        },
        showprog(){
            items = this.projet.filter(item => item.categori == "prog");
            this.startProject =false

            this.projetByCategorie = items
        },
        showAll(){
            this.startProject =false
            this.projetByCategorie = this.projet
        },
        projet:[
            {
                id:0,
                nom:"Air task force",
                image: "image/logo.jpg",
                description:"Jeu de tir d'avion réaliser dans le cadre du cour environement intéractif. Nous devion crée une application intéractive avec le logiciel Unity",
                tache:"J'ai développer l'ensemble du jeu",
                categori:"jeu"

                
            },
            {
                id:1,
                nom:"Build A world",
                image: "image/builAWorld.jpg",
                description:"Dans le cadre de notre cour Projet 3, nous devions réaliser en équipe de trois un projet interactive avec comme thème Un nouveau monde. Nous avons donc d'écider de crée une application intérative de création de planete en HTML, CSS et JAVA SCRIPT ou le joueur avait la posibiliter de personliser sa planette du choix de sa forme j'usqua les animaux qui y vivent ",
                tache:"Dans ce projet j'était responsable de la programmation de l'enssemble de l'aplication ",
                categori:"prog"

            },
            {
                id:2,
                nom:"Borne Fastoche",
                image: "image/fastoche.jpg",
                description:"Dans le cadre du cour projet 4 nous devions en équipe de trois réaliser une borne interactive pour un restaurant fictif",
                tache:"Dans ce projet j'étais charger de la programmation et de l'intégration",
                categori:"prog"

            },
            {
                id:3,
                nom:"HUNDER DRONE",
                image: "image/HUNDERDRONE.jpg",
                description:"Ce projet fut réaliser au cours de notre WEBJAM. En équipe nous deviont crée un projet web en 24h. Nous avont donc décider de crée un jeu vidéo avec le logiciel Unity",
                tache:"Dans ce projet je fut responsable de tout ce qui touchais Unity. j'ai programmer l'ensemble de notre jeu et intégrer les contenue réaliser par mes collegue(son, spriteShite, backGround et image)",
                categori:"jeu"
                
            },
            
            {
                id:4,
                nom:"Escape the crowns",
                image: "image/escape the crown.jpg",
                description:"Dans le cadre de notre cours de spécialisation nous devions ce spécialiser dans un dommaine du multimédia. J'ai choisis de me spésialiser en jeu vidéo de développent avec Unity un jeu en réaliter virtuel",
                tache:"Dans ce projet j'ai programmer les fonction du jeu et je me suis faliariser avec le fonctionnent d'un jeu en VR et en 3D",
                categori:"jeu"
                
            },
            {
                id:5,
                nom:"spacesurvival",
                image: "image/spacesurvival.png",
                description:"",
                tache:"",
                categori:"prog"
                
            },
            {
                id:6,
                nom:"projectBrokenStar",
                image: "image/projectBrokenStar.jpg",
                description:"",
                tache:"",
                categori:"prog"

                
            },
            {
                id:7,
                nom:"projet 4",
                image: "image/projet1Tp1.PNG",
                description:"",
                tache:"",
                
            },
            
        ],
        projetByCategorie:[
            {

            }
        ],
        projetInPopUp:[
            {
                
            },
        ]
    }
    
}
