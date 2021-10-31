const btn = document.querySelector(".btn")
const head = document.querySelector(".head")
const penny = document.querySelector(".img")
const jairam = document.querySelector(".jairam")

btn.addEventListener("click",(e) => {
    if(btn.innerHTML == "🪔LIGHTS OFF"){
        btn.innerHTML = "🪔LIGHTS ON"
    }
    else{
        btn.innerHTML = "🪔LIGHTS OFF"
    }
    if(penny.style.display == "block"){
        penny.style.display = "none"
    }
    else{
        penny.style.display="block"
    }
    if(head.innerHTML == "Happy Diwali 2021 🪔"){
        head.innerHTML="Garg Pariwar ki taraf se aap sabhi ko Deepawali ke subh awsar ki dher saari shubhkaamnaye"
    }
    else{
        head.innerHTML="Happy Diwali 2021 🪔"
    }
    jairam.volume = 10
    if(btn.innerHTML=="🪔LIGHTS ON"){
    jairam.play()   
    }
    else{
        jairam.play()
    }
})
