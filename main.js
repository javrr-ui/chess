
const pieces = document.querySelectorAll("img");
const blocks = document.querySelectorAll(".square");

let selectedPiece;

InitialpositionPiece();
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
})

blocks.forEach(block => {
    block.addEventListener("click", e => {

        if(selectedPiece){
            selectedPiece.style.top = block.offsetTop + "px";
            selectedPiece.style.left = block.offsetLeft + "px";
            selectedPiece.classList.remove("piece-up")
            selectedPiece.classList.add("piece-down");
            selectedPiece = null;
        }
        e.stopPropagation();
    })
})

function InitialpositionPiece(){
    pieces.forEach(piece => {
        piece.style.top = piece.parentElement.offsetTop +"px";
        piece.style.left = piece.parentElement.offsetLeft +"px";
    })
}

