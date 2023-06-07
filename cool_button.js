let button = document.querySelectorAll(".knopka-vkl")
let click = 1; 
let a = 1;

function turn(){
    if (click == 1){
        this.src = "images/ON.png";
        a = -1;
    }
    if (click ==0){
        this.src = "images/OFF.png";;
        a = 1;
    }
    click += a;
}
for (let i of button){
    i.addEventListener("click", turn);
}

console.log(a);