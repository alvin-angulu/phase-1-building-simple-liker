// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", likeHandler)

function likeHandler(){
  const likeButtons = document.querySelectorAll(".like")
  likeButtons.forEach(likeButton =>{
    likeButton.addEventListener("click",event =>{
      const heart = event.currentTarget.querySelector('.like-glyph');
      if(heart.innerText === EMPTY_HEART){
        mimicServerCall()
        .then(response =>{
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart")
        })
        .catch(error =>{
          const modalMessage = document.getElementById("modal-message")
          modalMessage.textContent = error
          const modal = document.getElementById("modal")
          modal.classList.remove("hidden")
          setTimeout(()=>{
            modal.classList.add('hidden')
          }, 3000)
        })
      }else{
        mimicServerCall()
        .then(response =>{
        heart.innerText =EMPTY_HEART;
        heart.classList.remove("activated-heart")
        })
      }
    })
  })

}






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
