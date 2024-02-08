//toggeling of plans

let total=0;
  let sampleCt=0;
  let sampleCt2=0;

document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.querySelector(".toggle input");
  const monthlyPrices = document.querySelectorAll(".monthly");
  const annuallyPrices = document.querySelectorAll(".annually");

  const month_h4=document.getElementById('h4m');
  const year_h4=document.getElementById('h4y');
  month_h4.style.color='darkblue';
  // Function to update the price display based on the toggle state
  const updatePriceDisplay = () => {
    if (toggleSwitch.checked) {
      year_h4.style.color='darkblue';
      month_h4.style.color='gray';
      // If toggle is checked (monthly), show monthly prices and hide annually prices
      monthlyPrices.forEach((price) => (price.style.display = "none"));
      annuallyPrices.forEach((price) => (price.style.display = "block"));
    } else {
      month_h4.style.color='darkblue';
      year_h4.style.color='gray';
      // If toggle is not checked (annually), show annually prices and hide monthly prices
      monthlyPrices.forEach((price) => (price.style.display = "block"));
      annuallyPrices.forEach((price) => (price.style.display = "none"));
    }
  };

  // Initial setup based on the default state of the toggle
  updatePriceDisplay();

  // Add event listener to the toggle switch for changes
  toggleSwitch.addEventListener("change", updatePriceDisplay);
 
  

const btn=document.querySelector("footer");
const forms = document.querySelectorAll('.div-form');


const container=document.querySelector(".container");
const container2=document.querySelector(".container2")
const container3=document.querySelector(".container3")
const container4=document.querySelector(".container4")
const container5=document.querySelector('.container5')

let ct=1;
let btnCt=0;

btn.addEventListener('click', function(e){
  const target=e.target;
  
  const backBtn=document.querySelector('.back_btn')
  const nextBtn=document.querySelector('.next_btn');
  const btn1=document.querySelector('.btn1');
  const btn2=document.querySelector('.btn2');
  const btn3=document.querySelector('.btn3');
  const btn4=document.querySelector('.btn4')

  if(target.matches('.next_btn') && ct==1){
      const check= allChecked();

      if(check){
        btn2.style.backgroundColor='skyblue';
        btn2.style.color='black'
    
        btn1.style.backgroundColor='transparent'
        btn1.style.color='white'
    
        container.style.display='none'
        container2.style.display='block'
        ct++;
        btnCt++
        if(btnCt==0){
          backBtn.style.visibility='hidden';
        }
        else{
          backBtn.style.visibility='visible';
        }  
      }
  }
  else if(target.matches('.back_btn') && ct==2){
    backBtn.style.visibility='visible';
    container.style.display='block'
    container2.style.display='none'
    btn2.style.backgroundColor='transparent';
    btn2.style.color='white';
    btn1.style.backgroundColor='skyblue'
    btn1.style.color='black'

    ct--;
    btnCt--;
    if(btnCt==0){
      backBtn.style.visibility='hidden';
    }
    else{
      backBtn.style.visibility='visible';
    }
  }
  else if(target.matches('.next_btn') && ct==2){
   
    container3.style.display='block'
    container2.style.display='none'
    btn2.style.backgroundColor='transparent';
    btn2.style.color='white';
    btn3.style.backgroundColor='skyblue'
    btn3.style.color='black'

    ct++;
  }
  else if(target.matches('.back_btn') && ct==3){
   container2.style.display='block'
   container3.style.display='none'
   btn3.style.backgroundColor='transparent';
   btn3.style.color='white';
   btn2.style.backgroundColor='skyblue'
   btn2.style.color='black'

   ct--;
 }
  else if(target.matches('.next_btn') && ct==3){
    container4.style.display='block'
    container3.style.display='none'
    btn3.style.backgroundColor='transparent';
    btn3.style.color='white';
    btn4.style.backgroundColor='skyblue'
    btn4.style.color='black'
    
    
    ct++;
    if(ct==4){
      nextBtn.textContent='Confirm';
    }
    else{
      nextBtn.textContent='Next Step';
    }
  }
  else if(target.matches('.back_btn') && ct==4){
    container3.style.display='block'
    container4.style.display='none'
    btn4.style.backgroundColor='transparent';
    btn4.style.color='white';
    btn3.style.backgroundColor='skyblue'
    btn3.style.color='black'
 
    ct--;
    if(ct<4){
      nextBtn.textContent='Next Step';
    }
  }
  else if(target.matches('.next_btn') && ct==4){
    container4.style.display='none';
    container5.style.display='block';

    btn.style.visibility='hidden';
    backBtn.style.visibility='hidden';
  }
});
  

function allChecked(){
   let checked=true;
  for(let i=0;i<forms.length;i++){
     const input=forms[i].querySelector('input');
     const error=forms[i].querySelector('label#error');

     if(input.value.trim() === ''){
      error.style.visibility='visible';
      checked=false;
     }else{
      error.style.visibility='hidden';
     }
  }

  return checked;
}

//container2


const options = document.querySelector('.options');

options.addEventListener('click', function(e) {
  const target = e.target;
  const arcade = document.querySelector('.arcade');
  const advanced = document.querySelector('.advanced');
  const pro = document.querySelector('.pro');
  

  const priceMon=document.querySelectorAll(".pricesMon");
  const priceYr=document.querySelectorAll(".pricesYr")

  const heading=document.querySelector('.heading');
  const total=document.querySelector('.total');

  const headingName=document.querySelector(".heading h5")
  const headingPrice=document.querySelector('.heading span');
  if (target.matches(".arcade")) {
    arcade.style.borderColor = 'grey';
    advanced.style.borderColor = 'grey';
    pro.style.borderColor = 'grey';
    target.style.borderColor = 'blue';

    headingName.textContent='Arcade(Monthly)'

   

    if(toggleSwitch.checked){
       headingPrice.textContent='$90/yr'
       sampleCt=90;
    }
    else{
      headingPrice.textContent='$9/mo'
      sampleCt=9;
    }

    heading.style.visibility='visible';
    total.style.visibility='visible'


} else if(target.matches(".advanced")) {
    arcade.style.borderColor = 'grey';
    advanced.style.borderColor = 'grey';
    pro.style.borderColor = 'grey';
    target.style.borderColor = 'blue';

    headingName.textContent='Advanced(Monthly)'
 
    heading.style.visibility='visible';
    total.style.visibility='visible';
    

    if(toggleSwitch.checked){
      headingPrice.textContent='$120/yr'
      sampleCt=120;
   }
   else{
     headingPrice.textContent='$12/mo'
     sampleCt=12
   }

   
} else if (target.matches(".pro")) {
    arcade.style.borderColor = 'grey';
    advanced.style.borderColor = 'grey';
    pro.style.borderColor = 'grey';
    target.style.borderColor = 'blue';

    headingName.textContent='Pro(Monthly)'

    heading.style.visibility='visible';
    total.style.visibility='visible';
    
    if(toggleSwitch.checked){
      headingPrice.textContent='$150/yr'
      sampleCt=150;
   }
   else{
     headingPrice.textContent='$15/mo'
     sampleCt=15;
   }
}

  
  if (target.matches(".toggle")) {
      if (target.previousElementSibling.checked) {
      if (arcade.style.borderColor === 'blue') {
        arcade.style.borderColor = 'blue';
      } else if (advanced.style.borderColor === 'blue') {
        advanced.style.borderColor = 'blue';
      } else if (pro.style.borderColor === 'blue') {
        pro.style.borderColor = 'blue';
      }
    }
    
     if (target.nextElementSibling.checked) {
      if (arcade.style.borderColor === 'blue') {
        arcade.style.borderColor = 'blue';
      } else if (advanced.style.borderColor === 'blue') {
        advanced.style.borderColor = 'blue';
      } else if (pro.style.borderColor === 'blue') {
        pro.style.borderColor = 'blue';
      }
    }
  }

const onlineSpan=document.querySelector('.online span');
const storageSpan=document.querySelector('.local span');
const profileSpan=document.querySelector('.customizedProfile span');
   
  if (toggleSwitch.checked) {
   
    for(let i=0;i<priceMon.length;i++){
      priceMon[i].style.display="none";
    }
    for(let i=0;i<priceYr.length;i++){
      priceYr[i].style.display='block'
    }


    onlineSpan.textContent='+$10/yr';
    storageSpan.textContent='+$20/yr';
    profileSpan.textContent='+$20/yr';

    
 }
 else{
  for(let i=0;i<priceMon.length;i++){
    priceMon[i].style.display="block";
  }
  for(let i=0;i<priceYr.length;i++){
    priceYr[i].style.display='none'
  }

  onlineSpan.textContent='+$1/mo';
  storageSpan.textContent='+$2/mo';
  profileSpan.textContent='+$2/mo';

  console.log("hhhh");
  
 }
});



//container 3

const addOptions = document.querySelector('.addOptions');
const totalSpan=document.querySelector('.total span');


addOptions.addEventListener('click', function(e) {
  const target = e.target;
  const onlineService = document.querySelector(".onlineservices");
  const largestStorage = document.querySelector(".largerstorage");
  const profile = document.querySelector(".profile");

  const online=document.querySelector('.online');
  const storage=document.querySelector('.local');
  const customProfile=document.querySelector('.customizedProfile')
  
  if (target.matches("#onlineServiceCheckbox")) {
    toggleBorderColor(onlineService,online);

    if(toggleSwitch.checked){
        sampleCt2=10;
    }
    else{
      sampleCt2=1;
    }
  }
  
  
  if (target.matches("#largerstorage")) {
    toggleBorderColor(largestStorage,storage);
    if(toggleSwitch.checked){
      sampleCt2+=20;
    }
    else{
    sampleCt2+=2;
    }
  }
  

  if (target.matches("#profile")) {
    toggleBorderColor(profile,customProfile);
    if(toggleSwitch.checked){
      sampleCt2+=20;
    }
    else{
      sampleCt2+=2;
    }
  }

  if(toggleSwitch.checked){
    totalSpan.textContent=`$${sampleCt+sampleCt2}/yr`;
  }
  else{
    totalSpan.textContent=`$${sampleCt+sampleCt2}/mo`;
  }

});

function toggleBorderColor(element1,element2) {
  if (element1.style.borderColor === 'blue') {
    element1.style.borderColor = '';
    element2.style.display='none';
    
  } else {
    element1.style.borderColor = 'blue';
    element2.style.display='block';
  }
}


const change=document.querySelector('#change-btn');

const nxt=document.querySelector('.next_btn');
const btn2=document.querySelector('.btn2');
const btn4=document.querySelector('.btn4')

 
change.addEventListener('click',function(e){
  const target=e.target;
  if(target.matches('#change-btn')){
       container2.style.display='block';
       container4.style.display='none';
       nxt.textContent='Next Step';
       btn2.style.backgroundColor='skyblue';
       btn2.style.color='black'
    
       btn4.style.backgroundColor='transparent'
       btn4.style.color='white'


       ct-=2;
       btnCt=ct-1;


  }
})

});



