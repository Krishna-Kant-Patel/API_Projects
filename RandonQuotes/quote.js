const quote  = document.getElementById("quote")
const aurthor = document.getElementById("aurthor")
const nextbutton = document.getElementById("next_button")

init()

function init(){
    fetchquote()
    nextbutton.addEventListener('click',fetchquote)

}
async function fetchquote(){
    const sr = await fetch('https://api.quotable.io/random')
    const tb = await sr.text()
    const jsonData = JSON.parse(tb)
    aurthor.innerText = jsonData.aurthor
    quote.innerHTML = `<span style="color: red;">&#8220;</span>${jsonData.content}<span style="color: red;">&#8221;</span>`
    aurthor.innerHTML = `${jsonData.aurthor}`
    
}