data=[
    {
    volunteer:
        {
            'email':'v1234@gmail.com',
            password:'v1234'
        }
    },
    {
    shelter:
        {
        email:'s1234@gmail.com',
        password:'v1234'
        }
    }

]
console.log('hello');
email=document.getElementById("volunteer-email");
password=document.getElementById("volunteer-password");

document.getElementById('login').addEventListener('click',(e)=>{
    
    for(item of data)
    {
        if(item.volunteer.email===email.value)
        e.preventDefault();
        console.log('yes');
    }

})