
const pieces = document.querySelectorAll("img");
const blocks = document.querySelectorAll(".square");

let selectedPiece;
let selectedBlock;
initialPositionPiece();
//Everytime window is resized, run initialPositionPiece, to keep pieces in their respective block
window.addEventListener("resize", initialPositionPiece);

pieces.forEach(piece => {
    piece.addEventListener("click", e => {

        if (piece.classList.value.includes("piece-down")) {
            piece.classList.remove("piece-down")
            piece.classList.add("piece-up");
            selectedPiece = piece;
        } else {
            piece.classList.remove("piece-up")
            piece.classList.add("piece-down");
            selectedPiece = null;
        }

        e.stopPropagation();
    })

    piece.addEventListener("transitionend", e => {
        selectedBlock.appendChild(selectedPiece);
    })
})

blocks.forEach(block => {
    block.addEventListener("click", e => {

        if (selectedPiece) {
            selectedPiece.style.top = block.offsetTop + "px";
            selectedPiece.style.left = block.offsetLeft + "px";
            selectedPiece.classList.remove("piece-up")
            selectedPiece.classList.add("piece-down");
            selectedBlock = block;
        }
        e.stopPropagation();
    })
})

function initialPositionPiece() {
    pieces.forEach(piece => {
        piece.style.top = piece.parentElement.offsetTop + "px";
        piece.style.left = piece.parentElement.offsetLeft + "px";
    })
}