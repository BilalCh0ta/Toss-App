
let ans  = document.querySelector(".ans")
let image = document.querySelector(".img")

function heads() {
    let randoms = Math.ceil( Math.random() * 2)
    // show.innerHTML = `${randoms}`

      if(randoms == 1){
        console.log(randoms);
        image.src = `images/head.png`
        ans.innerHTML = "YOU WON"
      }else{
        console.log(randoms);
        image.src = `images/tail.png`
        ans.innerHTML = "YOU LOST"
      }
}

function tail() {
    let randoms = Math.ceil( Math.random() * 2)
    // show.innerHTML = `${randoms}`

      if(randoms == 2){
        console.log(randoms);
        image.src = `images/tail.png`
        ans.innerHTML = "YOU WON "
      }else{
        console.log(randoms);
        image.src = `images/head.png`
        ans.innerHTML = "YOU LOST"
      }
}



// function tail() {
//     console.log('tail');
// }
