let turn = 0;
let btns = document.querySelectorAll(".underbox");
for (let btn of btns) {
    btn.addEventListener("click", () => {
        if (turn == 0) {
            // let div= document.createElement("div");
            // div.classList.add("zero");
            
            let div = `<div class="zero"></div>`;
            
            btn.innerHTML = div;
            turn = 1;
        } else {
            btn.innerHTML = `<div class="cross">    
            <img src="https://cdn.hugeicons.com/icons/multiplication-sign-stroke-rounded.svg" alt="multiplication-sign" width="90" height="90">
            </div>`;
            turn = 0;
        }
        if (checkWin()) {
            gameOver();
        }
        btn.classList.add("disable");
    }
    )
}

let pattern = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let lines= ['top', 'hor-mid', 'bottom', 'left', 'ver-mid', 'right', 'leftDiag', 'rightDiag'];
function checkWin() {
    for (let p of pattern) {

        let e1 = document.getElementById(`${p[0]}`);
        let e2 = document.getElementById(`${p[1]}`);
        let e3 = document.getElementById(`${p[2]}`);
        if (e1.firstElementChild != null && e2.firstElementChild != null && e3.firstElementChild != null) {
            if (e1.firstElementChild.className == e2.firstElementChild.className && e2.firstElementChild.className == e3.firstElementChild.className) {
                let classOfLine=lines[pattern.indexOf(p)];                
                document.querySelector(`.${classOfLine}`).classList.remove(`hide`);
                return true;
            }
        }

    }
    return false;
}

function gameOver() {
    let h1 = document.querySelector("h1");
    let winner;
    if (turn == 0)
        winner = "X";
    else
        winner = "O";
    h1.innerText = `Winner is ${winner}`;
    h1.classList.add("scaleUp");
    for (let btn of btns) {
        btn.disabled = true;
    }
    disable();
}

function disable() {
    for (let btn of btns) {
        btn.classList.add("disable");
    }
}

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    location.reload();
})
