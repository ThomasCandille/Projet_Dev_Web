const li_tag = document.getElementsByClassName("tag")
const li_post = document.getElementsByClassName("post")
const li_tag_post = document.getElementsByClassName("tag_post")
const button_post = document.getElementById("post_button")
const mid_post_maker = document.getElementById("mid_action_post_maker")
const left_make_a_post = document.getElementById("left_make_a_post")
const post_maker = document.getElementById("post_maker")
const txt_post = document.getElementById("post_txt")
const tag_selector = document.getElementById("tag_selector")
const submit = document.getElementById("submit")
const clear = document.getElementById("all_tag")
const post_container = document.getElementById("post_container")


let active_tag = []
let active_post = []


console.log("all good")
messageStockage = localStorage

txt_post.value = localStorage.getItem("text")
tag_selector.selectedIndex = localStorage.getItem("tag")

const showMakePost =() =>{
  post_maker.classList.remove("hidden")
}

const checkTag =(event) =>{
  let el = event.target
  if (el.style.backgroundColor === ""){   
    el.style.backgroundColor = "#00ff00"
    active_tag.push(el.classList[0])
  }

  if (active_tag != []){
    for(let i = 0 ; i<post_container.childElementCount ; i++){
      post_container.children[i].classList.add("hidden")
      for(let y = 0 ; y < active_tag.length; y++){
        if(li_tag_post[i].classList[1] === active_tag[y]){
          active_post.push(post_container.children[i])
        }
      }
    }
    active_post.forEach(element => {
      element.classList.remove("hidden")
    });
  }
}

const createPost = () => {
  let txt = localStorage.getItem("text")
  let tag = localStorage.getItem("tag")
  localStorage.removeItem("text")
  localStorage.removeItem("tag")
  txt_post.value = ""
  tag_selector.value = ""
  let post = `<div class="post">
  <div class="post_info">
  <div class="post_user_info">
    <img class="profile_picture" src="img/pp_deux.png" alt="photo de profil">
    <p class="username"> Quent_Overwacth_nevr_die </p>
  </div>
  <div class="post_bar">
  </div>
  <div class="post_content">
    <p> ${txt} </p>
  </div>
  <div class="post_end">
    <div class="tag_post ${li_tag[tag-1].classList[0]}">
      ${li_tag[tag-1].innerHTML}
    </div>
    <img class="poubelle" src="img/pbl.png" alt="poubelle">
  </div>
  </div>
  <div class="horizontal_bar"></div>
  </div>
  `
  let html_post = post_container.innerHTML
  html_post = post + html_post
  post_container.innerHTML = html_post
}

const clearTags = () =>{
  for(let i = 0; i<10; i++){
    li_tag[i].style.backgroundColor = ""
  }
  active_tag = []
  active_post = []

  
  for(let i=0; i<li_post.length;i++){
    li_post[i].classList.remove("hidden")
  }
}

addEventListener('input', () =>{
  localStorage.setItem("text",txt_post.value)
})
tag_selector.addEventListener('change',() =>{
  localStorage.setItem("tag",tag_selector.selectedIndex)

})





mid_post_maker.addEventListener('click',showMakePost)
submit.addEventListener('click', createPost)
clear.addEventListener('click', clearTags)
li_tag[0].addEventListener('click',checkTag)
li_tag[1].addEventListener('click',checkTag)
li_tag[3].addEventListener('click',checkTag)
li_tag[2].addEventListener('click',checkTag)
li_tag[4].addEventListener('click',checkTag)
li_tag[5].addEventListener('click',checkTag)    
li_tag[6].addEventListener('click',checkTag)
li_tag[7].addEventListener('click',checkTag)
li_tag[8].addEventListener('click',checkTag)
li_tag[9].addEventListener('click',checkTag)
