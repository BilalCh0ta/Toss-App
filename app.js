
let ans  = document.querySelector(".ans")
let coin = document.querySelector(".coin")

function heads() {
    let randoms = Math.ceil( Math.random() * 2)
    // show.innerHTML = `${randoms}`

      if(randoms == 1){
        console.log(randoms);
        coin.innerHTML = ` <img src="images/head.png" class=" animate__animated animate__flip"  alt=""> `
        ans.innerHTML = "YOU WON"
      }else{
        console.log(randoms);
        coin.innerHTML = ` <img src="images/tail.png" class=" animate__animated animate__flip"  alt=""> `
        ans.innerHTML = "YOU LOST"
      }
}

function tail() {
    let randoms = Math.ceil( Math.random() * 2)
    // show.innerHTML = `${randoms}`

      if(randoms == 2){
        console.log(randoms);
        
        coin.innerHTML = ` <img src="images/tail.png" class=" animate__animated animate__flip"  alt=""> `
        ans.innerHTML = "YOU WON "
      }else{
        console.log(randoms);
        coin.innerHTML = ` <img src="images/head.png" class=" animate__animated animate__flip"  alt=""> `
        ans.innerHTML = "YOU LOST"
      }
}



// console.log();











// function ppp(){
//     let ok = document .querySelector(".checks")
//     ok.innerHTML =  ` <img src="images/head.png" class="animate__animated animate__flip" alt=""> `

//   }
