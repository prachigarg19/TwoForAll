//database of ngo's
shelters=[
    {
        name:'Animal Aid Unlimited',
        location:'East Delhi',
        Timings:'9 am to 8pm',
        requirement:'Clerical Support',
        Contact:'12346578',
        Image:'../Images/ngo-profile-logo.jpg',
        interested:'false'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'East Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg',
        interested:'false'
    },
    {
        name:'Animal Aid Unlimited',
        location:'North Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg',
        interested:'false'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'North Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg',
        interested:'false'
    },
    {
        name:'Animal Aid Unlimited',
        location:'West Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg',
        interested:'false'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'West Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg',
        interested:'false'
    },
    {
        name:'Animal Aid Unlimited',
        location:'South Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg',
        interested:'false'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'South Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg',
        interested:'false'
    }
    
];
console.log('hello');
list=document.getElementsByClassName('dropdown-list')
// let interested=false;

//compares area entered by user with all ngo's in database
Array.from(list).forEach(item=>{
    item.addEventListener('click',(e)=>{
        document.getElementById('cards').innerHTML="";
        check(e.target.id,'cards');
    })
    
})

//adding interested ngo's
div2=document.getElementById('interested-container');

//if user is interested
function isInterested(index){
    id=index;
    console.log(shelters)
    if(shelters[id].interested==='false')
    {   ibtn=document.getElementById(`${id}`);
        ibtn.style['background-color']="#93B5C6";
        shelters[id].interested='true';
        displayCards(id,'interested-container');
        // console.log(shelters[id]);
    }
       
}

//checks all cards that matches area 
function check(id){
   
    
    index=id;
    for(i=0;i<shelters.length;i++){
        if(shelters[i]['location']===id)
        {
            displayCards(i,'cards');
        }
       
    }
   
}
//displays card
function displayCards(i,divid){
    card=document.getElementById(`${divid}`);
    // card.innerHTML="";
    let str="";
    str+=` <div class="cards">
            <div class="card-details">
            <h2>${shelters[i].name}</h2>
            <h4>  <i class="fas fa-map-pin"></i>
                <p>${shelters[i].location}</p>
            </h4>
            <h4>
                <span>Work Requirment:</span>
                <p> ${shelters[i].requirement}</p>
            </h4>
            <h4>
               <span>Timings:</span> 
                <p>${shelters[i].Timings}</p>
            </h4>
            <h4>
                <span>Contact:</span>
                <p>${shelters[i].Contact}</p>
            </h4>
            <h4 id="view-more">
                <a href="../html/sprofile.html">View More ></a>
            </h4>
            <button id="${i}" class="sign-up interest" onclick="isInterested(${i})">Interested</button>
        </div>
   
    <div class="card-logo">
        <img src="${shelters[i].Image}" alt="ngo-logo" height="250px" width="250px">
    </div>
    </div>`;
    card.innerHTML+=str;
}
