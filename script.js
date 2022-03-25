const navbar=document.querySelector('.topnav_bar_togglebutton');
const menubar=document.querySelector('.topnav_bar_menu');
     navbar.addEventListener('click' , ()=>{
     navbar.classList.toggle('open');
     menubar.classList.toggle('open');
 });

 function Currenttime(){
     var date= new Date();
     var today=date.getDay();
     var hour=date.getHours();
     var min=date.getMinutes();
     var sec=date.getSeconds();
     var currentdate=date.getDate();
     var year=date.getFullYear();
     var month=date.getMonth();
     var monthName=["January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var showDay=document.querySelectorAll('.day_wrapper span');
     var prepand= (hour>=12) ? "PM" : "AM";
     hour=(hour>=12) ?(hour-12) : hour;
     document.querySelector('.time').innerHTML =`${hour} : ${min}`;
     document.querySelector('.second').innerHTML = `${sec}`;
     document.querySelector('.prepand').innerHTML= `${prepand}`;
     document.querySelector('.date').innerHTML= `${monthName[month]}  ${currentdate} ${year};`
     showDay[today].style.opacity ='1';
 }

 setInterval(Currenttime, 1000);
