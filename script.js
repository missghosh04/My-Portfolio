var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backdelay: 1000,
    loop: true
});
let number1=document.getElementById("number1");
let counter1=0;
setInterval(() => { 
    if(counter1==85){
        clearInterval();
    }
    else{
    counter1+=1;
    number1.innerHTML=counter1+"%";
    }
},20);
let number2=document.getElementById("number2");
let counter2=0;
setInterval(() => { 
    if(counter2==75){
        clearInterval();
    }
    else{
    counter2+=1;
    number2.innerHTML=counter2+"%";
    }
},20);
let number3=document.getElementById("number3");
let counter3=0;
setInterval(() => { 
    if(counter3==80){
        clearInterval();
    }
    else{
    counter3+=1;
    number3.innerHTML=counter3+"%";
    }
},20);
let number4=document.getElementById("number4");
let counter4=0;
setInterval(() => { 
    if(counter4==85){
        clearInterval();
    }
    else{
    counter4+=1;
    number4.innerHTML=counter4+"%";
    }
},20);
// Contact-----------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRBMkAxCXBYGNKPSHwWurhO1vrBBAU9oimltGOzjqy-HHG1AAb2mMnsxiWPLHlVhY9Ng/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML =""
        },2000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })