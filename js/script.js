const li_tag = document.getElementsByClassName("tag")
const li_post = document.getElementsByClassName("post")
const button_post = document.getElementById("post_button")
const mid_post_maker = document.getElementById("mid_action_post_maker")
const left_make_a_post = document.getElementById("left_make_a_post")
const post_maker = document.getElementById("post_maker")

console.log("all good")

const showMakePost =() =>{
  post_maker.classList.remove("hidden")
}

mid_post_maker.addEventListener('click',showMakePost)
