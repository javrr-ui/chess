
const pieces = document.querySelectorAll("img");
const blocks = document.querySelectorAll(".square");

let selectedPiece;


pieces.forEach(piece => {
    piece.addEventListener("click", e => {
        
        if(piece.classList.value.includes("piece-down")){
            piece.classList.remove("piece-down")
            piece.classList.add("piece-up");
            selectedPiece = piece;
        }else{
            piece.classList.remove("piece-up")
            piece.classList.add("piece-down");
            selectedPiece = null;
        }
        console.log("last value="+piece.classList.value);
        e.stopPropagation();
    })
})

blocks.forEach(block => {
    block.addEventListener("click", e=>{

        let rect = block.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);

        console.log(selectedPiece.clientX);
        console.log(selectedPiece.clienty);
        console.log(e.clientX)
        console.log(e.clientY)
        console.log(selectedPiece)
        // selectedPiece.style.transform = `translateY(${10}px) translateX(${10}px)`;
        selectedPiece.offsetWidth = "200px";
        console.log(block.offsetWidth);
        console.log(block.offsetHeight);
        console.log()
        console.log(block.classList.value);

        e.stopPropagation();
    })
})

