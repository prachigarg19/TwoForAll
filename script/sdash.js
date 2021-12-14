
work=['Groomer','CareTaker',]
let btn=document.getElementById('post');
//will store all the values entered by user
workobj=['Care Taker'];

let div=document.querySelector('.posts');
//display cards after website loads
displayPreviousCards();

//display cards
function displayPreviousCards(){
    
    div.innerHTML="";
     if(workobj.length==0) return;
        workobj.forEach(function(element,index)
           {   html="";
          
           html+=` <div class="cards">
           <div class="card-details">
               <h2>Animal Aid Unlimited</h2>
               <h4>  <i class="fas fa-map-pin"></i>
                   <p>East Delhi</p>
               </h4>
               <h4>
                   <span>Work Requirment:</span>
                   <p> ${element}</p>
               </h4>
               <h4>
                  <span>Timings:</span> 
                   <p>9pm to 6pm</p>
               </h4>
               <h4>
                   <span>Contact:</span>
                   <p>75757575</p>
               </h4>
               <h4 id="view-more">
                   <i class="fas fa-edit" id="${index}" onclick="updateCards(this.id)" ></i>
                   <br> <br>
                   <i class="fas fa-trash-alt" id="${index}" onclick="deleteCards(this.id)" ></i>
               </h4>
           </div>
      
       <div class="card-logo">
           <img src="../Images/ngo-profile-logo.jpg" alt="ngo-logo" height="350px" width="350px">
       </div>
   </div>`;
               
        div.innerHTML+=html;  
           }
           
       
    );
    }

    //store value entered by user and store it in array
    btn.addEventListener('click',()=>{
        work=document.getElementById('work');
        if(work.value=="")
        {alert('Enter Work Description');
        return;}
        workobj.push(work.value);
          work.value="";
          displayPreviousCards();
    });

    //delete card
    function deleteCards(id){
        index=id;
        workobj.splice(index,1);
        displayPreviousCards();
    }
    //edits card
    function updateCards(id){
        index=id;
        
        document.getElementById('work').value=workobj[index];
        deleteCards(index);
    }