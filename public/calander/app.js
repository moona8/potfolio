const date =new Date();
const renderCalender=()=>{


date.setDate(1); 
const monthDays=document.querySelector('.days')
const lastDay =new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
// console.log("lastDay")
const prevlastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();
const firstDayIndex=date.getDay();
const lastDayIndex =new Date(date.getFullYear(),date.getMonth(),0).getDay();
const nextdays=7-lastDayIndex-1;

const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
document.querySelector('.date h1').innerHTML=months[date.getMonth()];
document.querySelector('.date p').innerHTML=new Date().toDateString();
let days ="";
for(let x=firstDayIndex; x>0; x--){
    days +=`<div class="prev-date">${prevlastDay-x+1}</div>`;
}
for(let i=1; i<=lastDay; i++ ){
    if(i === new Date().getDate() &&  date.getMonth() === new Date().getMonth()){
        days +=`<div class="today">${i}</div>`;
    }else{
        days +=`<div>${i}</div>`;
    }
}
for(let j=1; j<=nextdays; j++){
    days +=`<div class="next-date">${j}</div>`;
    monthDays.innerHTML=days;  
}
}
document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth( date.getMonth()-1)
    renderCalender()
})
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth( date.getMonth()+1)
    renderCalender()
})
renderCalender()        