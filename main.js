
function sizeUp() {
    document.querySelector("div").classList.remove("size-down");;
    document.querySelector("div").classList.add("size-up");
}
function sizeDown() {
    document.querySelector("div").classList.remove("size-up");
    document.querySelector("div").classList.add("size-down");
}


document.querySelector(".sizeUp").addEventListener('click', sizeUp);
document.querySelector(".sizeDown").onclick = sizeDown;