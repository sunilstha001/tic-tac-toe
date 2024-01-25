let playerText = document.querySelector("#playerText");
let restartBtn = document.querySelector("#restart");
// It  gives in array instead of node  list
let boxes = document.querySelectorAll(".box");
let winner = document.querySelector("#winner")

let turn = true

// boxes chai Node  list ma  hunxa  so each element lai  target  garna  array wala  function chala  ko
boxes.forEach(function (box) {
    box.addEventListener("click", function () {

        // this  if condition is used to get rid  from the button from  double  clicked  
        if (box.innerText === "") {
            // for  player O
            if (turn) {

                //The reason you can't do allbox.style.color = "blue" is that allbox is a NodeList, not a single element. The style property is used to access the inline style of a single element, not a NodeList.

                // allbox.style.color = "blue"

                box.style.color = "blue"
                box.innerText = "O"
                turn = false

            }
            // for player  X 
            else {
                box.style.color = "red";
                box.innerText = "X"
                turn = true
            }
        }

        // To  check who is wining
        checkWinner();

    })
})

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let showWinner = (winnerName) => {
    winner.innerText = ` winner is ${winnerName}`;
    winner.classList.remove("hide");
};

const checkWinner = () => {
    for (let value of winPattern) {
        // gives the  individual index in  the  form of number
        // console.log(value[0], value[1], value[2])

        // console.log(boxes[value[0]].innerText, boxes[value[1]].innerText, boxes[value[2]].innerText)

        let pos1val = boxes[value[0]].innerText;
        let pos2val = boxes[value[1]].innerText;
        let pos3val = boxes[value[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // winner 
                console.log("WINNER", pos1val)

                // passing the position value  in showwinner function
                showWinner(pos1val)
            }
        }
    }
}


// Iterating Over Multiple Elements: The allbox variable contains a NodeList of all the box elements. To clear the text content of each box, I need to iterate over each ... element in the NodeList and perform the same action on each one.

// restartBtn.addEventListener("click", function(){
//     allbox.innerText = ""
// })

restartBtn.addEventListener("click", function () {
    boxes.forEach(function (box) {
        box.innerText = "";
    })
    winner.innerText = ""
    winner.classList.add("hide");
})
