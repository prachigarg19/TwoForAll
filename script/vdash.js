shelters=[
    {
        name:'Animal Aid Unlimited',
        location:'East Delhi',
        Timings:'9 am to 8pm',
        requirement:'Clerical Support',
        Contact:'12346578',
        Image:'../Images/ngo-profile-logo.jpg'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'East Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg'
    },
    {
        name:'Animal Aid Unlimited',
        location:'North Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'North Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg'
    },
    {
        name:'Animal Aid Unlimited',
        location:'West Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'West Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg'
    },
    {
        name:'Animal Aid Unlimited',
        location:'South Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Clerical Support',
        Image:'../Images/ngo-profile-logo.jpg'
    },
    {
        name:'Sanjay Gandhi Animal Care Center(SGACC)',
        location:'South Delhi',
        Timings:'9 am to 8pm',
        Contact:'12346578',
        requirement:'Groomer',
        Image:'../Images/ngo-profile-logo2.jpg'
    }
    
];
console.log('hello');
list=document.getElementsByClassName('dropdown-list')
console.log(list);

Array.from(list).forEach(item=>{
    item.addEventListener('click',(e)=>{
        display(e.target.id);
    })
    
})

function display(id){
    card=document.getElementById('cards');
    card.innerHTML="";
    str="";
    index=id;
    for(shelter of shelters){
        if(shelter['location']===id)
        {
            str+=` <div class="cards">
            <div class="card-details">
            <h2>${shelter.name}</h2>
            <h4>  <i class="fas fa-map-pin"></i>
                <p>${shelter.location}</p>
            </h4>
            <h4>
                <span>Work Requirment:</span>
                <p> ${shelter.requirement}</p>
            </h4>
            <h4>
               <span>Timings:</span> 
                <p>${shelter.Timings}</p>
            </h4>
            <h4>
                <span>Contact:</span>
                <p>${shelter.Contact}</p>
            </h4>
            <h4 id="view-more">
                <a href="../html/sprofile.html">View More ></a>
            </h4>
        </div>
   
    <div class="card-logo">
        <img src="${shelter.Image}" alt="ngo-logo" height="250px" width="250px">
    </div>
    </div>`;
        }
       
    }
    card.innerHTML=str;
}