
const pieces = document.querySelectorAll("img");


pieces.forEach(piece => {
    piece.addEventListener("click", e => {
        
        if(piece.classList.value.includes("piece-down")){
            piece.classList.remove("piece-down")
            piece.classList.add("piece-up");
        }else{
            piece.classList.remove("piece-up")
            piece.classList.add("piece-down");
        }
        console.log("last value="+piece.classList.value);
    })

    
})

