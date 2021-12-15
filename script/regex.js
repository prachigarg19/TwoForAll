//email-validation
email=document.getElementById('email')
email.addEventListener('blur',()=>{
    let reg2=/^(\S){1,64}@([a-zA-Z]+)\.([a-zA-Z]+)/;
    let result = reg2.test(email.value);
       
       if (result == true) {
   
           email.classList.remove('is-invalid');
           emailvalue=true;
       }
       else {
           email.classList.add('is-invalid');
           emailvalue=false;
       }
   });

  //validation for sign up email
//   btn=document.getElementById('signbtn');
//   btn.addEventListener('click',(e)=>{
//     //   e.preventDefault();
//       let newpassword=document.getElementById('spassword');
//       let confirmpassword=document.getElementById('cpassword');
//       if(newpassword.value===confirmpassword.value)
//       { 
//         newpassword.classList.remove('is-invalid');
//       }
//       else{
//           e.preventDefault();
//         newpassword.classList.add('is-invalid');
//       }
//   })

//  