//Declaring the variables

let woahminus5 = document.getElementById("woah-5")
let woahminus4 = document.getElementById("woah-4")
let woahminus3 = document.getElementById("woah-3")
let woahminus2 = document.getElementById("woah-2")
let woahminus1 = document.getElementById("woah-1")
let woahzero = document.getElementById("woah0")
let woahplus1 = document.getElementById("woah1")
let woahplus2 = document.getElementById("woah2")
let woahplus3 = document.getElementById("woah3")
let woahplus4 = document.getElementById("woah4")
let woahplus5 = document.getElementById("woah5")
let clickbox1 = document.getElementById("box1")
let clickbox2 = document.getElementById("box2")
let clickbox3 = document.getElementById("box3")
let clickbox4 = document.getElementById("box4")
let clickbox5 = document.getElementById("box5")
let clickbox6 = document.getElementById("box6")
let clickbox7 = document.getElementById("box7")
let clickbox8 = document.getElementById("box8")
let clickbox9 = document.getElementById("box9")
let clickbox10 = document.getElementById("box10")
let clickbox11 = document.getElementById("box11")
let wholehog = document.getElementById("wholeHog")
let nsanity = document.getElementById("nsanity")
let mainmenu = document.getElementById("mainmenu")
let playPauseBTN = document.getElementById("playPauseBTN")
let count = 0;

// Change the playback speed of the sounds

woahminus5.playbackRate = 2
woahminus4.playbackRate = 2
woahminus3.playbackRate = 2
woahminus2.playbackRate = 2
woahminus1.playbackRate = 2
woahzero.playbackRate = 2
woahplus1.playbackRate = 2
woahplus2.playbackRate = 2
woahplus3.playbackRate = 2
woahplus4.playbackRate = 2
woahplus5.playbackRate = 2

//Music button functions

function playPause() {
    if(count == 0){
        count = 1;
        wholehog.play()
        playPauseBTN.innerHTML = "Pause the banger"
    }else{
        count = 0
        wholehog.pause()
        playPauseBTN.innerHTML = "Resume the banger"
    }
}

function playPause1() {
    if(count == 0){
        count = 1;
        nsanity.play()
        playPauseBTN1.innerHTML = "Pause the banger"
    }else{
        count = 0
        nsanity.pause()
        playPauseBTN1.innerHTML = "Resume the banger"
    }
}

function playPause2() {
    if(count == 0){
        count = 1;
        mainmenu.play()
        playPauseBTN2.innerHTML = "Pause the banger"
    }else{
        count = 0
        mainmenu.pause()
        playPauseBTN2.innerHTML = "Resume the banger"
    }
}

function stop() {
    wholehog.pause()
    count = 0
    wholehog.currentTime=0
    playPauseBTN.innerHTML = "Play Whole Hog/Hog Wild"
}

function stop1() {
    nsanity.pause()
    count = 0
    mainmenu.currentTime=0
    playPauseBTN1.innerHTML = "Play CTR: N Sanity"
}

function stop2() {
    mainmenu.pause()
    count = 0
    mainmenu.currentTime=0
    playPauseBTN2.innerHTML = "Play CB3: Main Theme"
}


document.addEventListener("keydown", (event) => {
    if (event.key == "q"){
        woahminus5.play()
        woahminus5.currentTime=0
        clickbox1.classList.add("zoom")
        clickbox1.classList.remove("zoom")
        void clickbox1.offsetWidth;
        clickbox1.classList.add("zoom")
    }
    else if (event.key == "a"){
        woahminus4.play()
        woahminus4.currentTime=0
        clickbox2.classList.add("zoom")
        clickbox2.classList.remove("zoom")
        void clickbox2.offsetWidth;
        clickbox2.classList.add("zoom")
    }
    else if (event.key == "w"){
        woahminus3.play()
        woahminus3.currentTime=0
        clickbox3.classList.add("zoom")
        clickbox3.classList.remove("zoom")
        void clickbox3.offsetWidth;
        clickbox3.classList.add("zoom")
        
    }
    else if (event.key == "s"){
        woahminus2.play()
        woahminus2.currentTime=0
        clickbox4.classList.add("zoom")
        clickbox4.classList.remove("zoom")
        void clickbox4.offsetWidth;
        clickbox4.classList.add("zoom")
    }
    else if (event.key == "e"){
        woahminus1.play()
        woahminus1.currentTime=0
        clickbox5.classList.add("zoom")
        clickbox5.classList.remove("zoom")
        void clickbox5.offsetWidth;
        clickbox5.classList.add("zoom")
    }
    else if (event.key == "d"){
        woahzero.play()
        woahzero.currentTime=0
        clickbox6.classList.add("zoom")
        clickbox6.classList.remove("zoom")
        void clickbox6.offsetWidth;
        clickbox6.classList.add("zoom")
    }
    else if (event.key == "r"){
        woahplus1.play()
        woahplus1.currentTime=0
        clickbox7.classList.add("zoom")
        clickbox7.classList.remove("zoom")
        void clickbox7.offsetWidth;
        clickbox7.classList.add("zoom")
    }
    else if (event.key == "f"){
        woahplus2.play()
        woahplus2.currentTime=0
        clickbox8.classList.add("zoom")
        clickbox8.classList.remove("zoom")
        void clickbox8.offsetWidth;
        clickbox8.classList.add("zoom")
    }
    else if (event.key == "t"){
        woahplus3.play()
        woahplus3.currentTime=0
        clickbox9.classList.add("zoom")
        clickbox9.classList.remove("zoom")
        void clickbox9.offsetWidth;
        clickbox9.classList.add("zoom")
    }
    else if (event.key == "g"){
        woahplus4.play()
        woahplus4.currentTime=0
        clickbox10.classList.add("zoom")
        clickbox10.classList.remove("zoom")
        void clickbox10.offsetWidth;
        clickbox10.classList.add("zoom")
    }
    else if (event.key == "y"){
        woahplus5.play()
        woahplus5.currentTime=0
        clickbox11.classList.add("zoom")
        clickbox11.classList.remove("zoom")
        void clickbox11.offsetWidth;
        clickbox11.classList.add("zoom")
    }
})

clickbox1.onclick = function() {
    woahminus5.play()
    woahminus5.currentTime=0
}
clickbox2.onclick = function() {
    woahminus4.play()
    woahminus4.currentTime=0
}
clickbox3.onclick = function() {
    woahminus3.play()
    woahminus3.currentTime=0
}
clickbox4.onclick = function() {
    woahminus2.play()
    woahminus2.currentTime=0
}
clickbox5.onclick = function() {
    woahminus1.play()
    woahminus1.currentTime=0
}
clickbox6.onclick = function() {
    woahzero.play()
    woahzero.currentTime=0
}
clickbox7.onclick = function() {
    woahplus1.play()
    woahplus1.currentTime=0
}
clickbox8.onclick = function() {
    woahplus2.play()
    woahplus2.currentTime=0
}
clickbox9.onclick = function() {
    woahplus3.play()
    woahplus3.currentTime=0
}
clickbox10.onclick = function() {
    woahplus4.play()
    woahplus4.currentTime=0
}
clickbox11.onclick = function() {
    woahplus5.play()
    woahplus5.currentTime=0
}
