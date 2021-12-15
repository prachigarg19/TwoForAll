// focusing images
let images=document.getElementsByClassName('ngo-images');


for(image of images){
    image.addEventListener('click',focusImg);
   
}
// function to focus image
function focusImg(){

  if(this.classList.contains("focus"))
  {this.classList.remove("focus");
  }
  else
  {this.classList.add("focus");
 
  }
}

// adding focus to certificate
document.getElementById('certificate').addEventListener('click',focusImg);

//posting comment.
div=document.getElementById("posted-review");
let text=document.getElementById('text');
let btn=document.getElementById('post');

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(text.value=="")
  {alert('Cannot post empty review');
  return;}

  div.innerHTML+=`<div class="review-card" id="new-review">
  <i class="far fa-user-circle"></i>
  <p>${text.value}</p>
</div><br>`;
  text.value="";
})