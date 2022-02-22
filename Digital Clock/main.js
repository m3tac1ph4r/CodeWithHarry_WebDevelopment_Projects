class DigitalClock{
    constructor(element){
        this.element=element;
    }

    start(){
        setInterval(() => this.update(), 1000);
    }
    update(){
        const parts=this.getTimeParts();
        const upmin=parts.min.toString().padStart(2,"0");
        const sec=parts.sec.toString().padStart(2,"0");
        const timeformatted=`${parts.hours}:${upmin}:${sec}`;
        const ampm=parts.isAm?"AM":"PM";
        // console.log(timeformatted);
        this.element.querySelector(".clock-time").textContent = timeformatted;
        this.element.querySelector(".clock-ampm").textContent = ampm;
    }

    getTimeParts(){
        const now=new Date();
        return{
            hours:now.getHours()%12||12,    // it is same as if(now.getHours()%12!=0) then hours:now.getHours()%12 elif(now.getHours()%12==0) hours:12
            min:now.getMinutes(),
            sec:now.getSeconds(),
            isAm:now.getHours()<12          // return true or false
        };
    }

}

const clockElement=document.querySelector(".clock");
const clockObject=new DigitalClock(clockElement);

// console.log(clockObject.getTimeParts());
clockObject.start();