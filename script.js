const container = document.querySelector("#container")
const size = 20
container.innerHTML = ""

for (let x = -size/2; x < size / 2; x++) {
    for (let y = -size/2; y < size / 2; y++) {
        container.innerHTML += `<div class="tile" data-x=${x} data-y=${y}></div>` // <p>${x}</p><p>${y}</p>
    }
}

const tiles = document.querySelectorAll(".tile")

tiles.forEach(tile => {
    tile.addEventListener("mouseover", _ => {
        const multiplier = 2
        const x = tile.dataset.x
        const y = tile.dataset.y
        container.style["transform"] = `
        rotateX(${-x*multiplier}deg)
        rotateY(${y*multiplier}deg)
        scale(0.5)
        `
        // ${0.5+Math.abs((x*y))/Math.abs(x+y)}
        // container.style["transform"] = `rotateX(${90-50-tile.dataset.x*Math.log2(tile.dataset.x)}deg) rotateY(${45-50+tile.dataset.y*Math.log10(tile.dataset.y)}deg) rotateZ(${-Math.abs(-Math.log2(tile.dataset.x))}deg) scale(${Math.log2(tile.dataset.x+tile.dataset.y)/10})  translate(-200px, ${- tile.dataset.y/10}px)`
        console.log(container.style.rotate)
    })
})