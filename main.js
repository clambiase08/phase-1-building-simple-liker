// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const divSelect = document.querySelector("div")
const hearts = document.querySelectorAll('.like-glyph');

function removeError(){
  divSelect.classList.add("hidden")
}

function handleClick(heart) {
  mimicServerCall()
  .then(() => {
    heart.textContent = FULL_HEART
    heart.classList.add("activated-heart")
  })
  .catch(() => {
    divSelect.classList.remove("hidden")
    setTimeout(removeError, 3000) 
  })
}

function handleFullHeart(heart) {
    if (heart.classList.contains("activated-heart")) {
    heart.textContent = EMPTY_HEART  
    heart.classList.remove("activated-heart")
    }
  }


hearts.forEach((heart) => {
  heart.addEventListener("click", ()=> {
  if (heart.textContent === EMPTY_HEART) {
      handleClick(heart)
    } else if (heart.textContent === FULL_HEART) {
      handleFullHeart(heart)
    }
  })
})
  
  // hearts.forEach((heart) => {
  //   heart.addEventListener("click", () => {
  //     if (heart.textContent === EMPTY_HEART) {
  //       mimicServerCall()
  //       .then(() => {
  //         heart.textContent = FULL_HEART
  //         heart.classList.add("activated-heart")
  //       })
  //       .catch(() => {
  //         divSelect.classList.remove("hidden")
  //         setTimeout(() => divSelect.classList.add("hidden"), 3000) 
  //       })
  //     } else if (heart.textContent === FULL_HEART) {
  //       heart.textContent = EMPTY_HEART
  //       heart.classList.remove("activated-heart")
  //     }
  //   })
  // })
  
  //------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
