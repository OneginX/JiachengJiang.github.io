var clickTrackerTime = {
    count: 0,
    getmessageTime: function () {
        var messageTime;
    
        switch (this.count) {
            case 0:
                messageTime = "00:00";
            case 1:
                messageTime = "1:00";
                break;
            case 2:
                messageTime = "2:00";
                break;
            case 3:
            case 4:
            case 5:    
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:       
            case 23:
                messageTime = this.count + ":00";
                break;
            default:
                messageTime = "0:00"
        }
        return messageTime;
    }
};

var clickTrackerWeek = {
    count: 0,
    getmessageWeek: function () {
        var messageWeek;
    
        switch (this.count) {
            case 1:
                messageWeek = "Tuesday";
                break;
            case 2:
                messageWeek = "Wednesday";
                break;
            case 3:
                messageWeek = "Thursday";
                break;
            case 4:
                messageWeek = "Friday";
                break;
            case 5:
                messageWeek = "Saturday";
                break;    
            case 6:
                messageWeek = "Sunday";
                break; 
            default:
                messageWeek = "Monday"
        }
        return messageWeek;
    }
};

var clickTrackerDate = {
    count: 0,
    getmessageDate: function () {
        var messageDate;
    
        switch (this.count) {
            case 1:
                messageDate = "February";
                break;
            case 2:
                messageDate = "March";
                break;
            case 3:
                messageDate = "April";
                break;
            case 4:
                messageDate = "May";
                break;
            case 5:
                messageDate = "June";
                break;    
            case 6:
                messageDate = "July";
                break; 
            case 7:
                messageDate = "August";
                break; 
            default:
                messageDate = "January"
        }
        return messageDate;
    }
};
    


function pop1(){
    document.getElementById("popup1").style.visibility="visible"
}

function close1(){
    document.getElementById("popup1").style.visibility="hidden"
}

function pop2(){
    document.getElementById("popup2").style.visibility="visible"
}

function close2(){
    document.getElementById("popup2").style.visibility="hidden"
}

function pop3(){
    document.getElementById("popup3").style.visibility="visible"
}

function close3(){
    document.getElementById("popup3").style.visibility="hidden"
}

function pop4(){
    document.getElementById("popup4").style.visibility="visible"
}

function close4(){
    document.getElementById("popup4").style.visibility="hidden"
}

function pop5(){
    document.getElementById("popup5").style.visibility="visible"
}

function close5(){
    document.getElementById("popup5").style.visibility="hidden"
}

function pop6(){
    document.getElementById("popup6").style.visibility="visible"
}

function close6(){
    document.getElementById("popup6").style.visibility="hidden"
}

document.addEventListener('DOMContentLoaded', async function () {});

function scrollDownTime(){
    document.getElementById("wndTime").scrollBy({
      top: 412,
      behavior: "smooth"
    })

    clickTrackerTime.count++;
    document.getElementById("messageTime").innerHTML = clickTrackerTime.getmessageTime();


}

function scrollUpTime(){
    document.getElementById("wndTime").scrollBy({
      top: -412,
      behavior: "smooth"
    })
    clickTrackerTime.count--;
    document.getElementById("messageTime").innerHTML = clickTrackerTime.getmessageTime();
}

function scrollDownWeek(){
    document.getElementById("wndWeek").scrollBy({
      top: 445,
      behavior: "smooth"
    })

    clickTrackerWeek.count++;
    document.getElementById("messageWeek").innerHTML = clickTrackerWeek.getmessageWeek();


}

function scrollUpWeek(){
    document.getElementById("wndWeek").scrollBy({
      top: -445,
      behavior: "smooth"
    })
    clickTrackerWeek.count--;
    document.getElementById("messageWeek").innerHTML = clickTrackerWeek.getmessageWeek();
}

function scrollDownDate(){
    document.getElementById("wndDate").scrollBy({
      top: 445,
      behavior: "smooth"
    })

    clickTrackerDate.count++;
    document.getElementById("messageDate").innerHTML = clickTrackerDate.getmessageDate();
}

function scrollUpDate(){
    document.getElementById("wndDate").scrollBy({
      top: -445,
      behavior: "smooth"
    })

    clickTrackerDate.count--;
    document.getElementById("messageDate").innerHTML = clickTrackerDate.getmessageDate()
}