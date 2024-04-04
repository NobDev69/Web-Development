
let numofwon = 0;
let numoflost = 0;

for (var x = 1; x <= 5; x = x+1) {
    let gussNumber = parseInt(prompt("Enter Your Guss Number in 1 to 5: "));

    let randomNum = Math.floor(Math.random() * 5) + 1;

    if(gussNumber == randomNum) {
        console.log("You have won the Game")
        numofwon++
    }else{
        console.log("You have lost the Game. Random Number was " + randomNum + " Your number was " + gussNumber)
        numoflost++
    }
}

document.write("Number of Won: " + numofwon + "<br>")
document.write("Number of Lost: " + numoflost)