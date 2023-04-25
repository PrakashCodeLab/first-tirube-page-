const year =document.querySelector(".year");

const date =new Date();

const currentYear=date.getFullYear();

year.innerHTML=currentYear.toString();