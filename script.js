const container = document.querySelector("#container")
const size = 20
container.innerHTML = ""

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        container.innerHTML += `<div class="tile" data-x=${x} data-y=${y}></div>` // <p>${x}</p><p>${y}</p>
    }
}

const tiles = document.querySelectorAll(".tile")

tiles.forEach(tile => {
    tile.addEventListener("mouseover", _ => {
        container.style["transform"] = `rotateX(${90-50-tile.dataset.x*Math.log2(tile.dataset.x)}deg) rotateY(${45-50+tile.dataset.y*Math.log10(tile.dataset.y)}deg) rotateZ(${-Math.abs(-Math.log2(tile.dataset.x))}deg) scale(${Math.log2(tile.dataset.x+tile.dataset.y)/10})  translate(-200px, ${- tile.dataset.y/10}px)`
        console.log(container.style.rotate)
    })
})