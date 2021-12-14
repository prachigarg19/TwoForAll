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