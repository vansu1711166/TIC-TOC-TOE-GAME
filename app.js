let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg")
let turnO = true;
const Winnigpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.addEventListener("DOMContentLoaded", () => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turnO === true) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            cheakwinner();
        })
    })
})

const cheakwinner = () => {
    let isDraw = true;
    for (let pattern of Winnigpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                msg.innerText = `congratulations! winner is ${pos1val} 🥳`;
                msg.style.padding = "2vmin"
                msg.style.backgroundColor = "white"
                disableboxes();
            } 

        }
    }

};


const disableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;

    });
};

const enableboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}


resetbtn.addEventListener("click", () => {
    enableboxes();
    msg.innerHTML="";
    msg.style.padding="0px"
})

