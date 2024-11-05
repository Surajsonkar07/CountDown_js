const endDate='21 april 2025 00:00 AM'
document.getElementById("end-date").innerText=endDate;
const inputs =document.querySelectorAll("input");

const clock=(id)=>{
    const end=new Date(endDate)
    const now=new Date()
    console.log(end);
    const diff=(end-now)/1000;
if(diff<0)return;
inputs[0].value =Math.floor(diff /3600/24);//days
inputs[1].value =Math.floor(diff /3600) % 24;//hours
inputs[2].value =Math.floor(diff /60)%60;//minuts
inputs[3].value =Math.floor(diff )%60; //seconds
}
clock();
setInterval(() => {
    clock()
}, 1000);












