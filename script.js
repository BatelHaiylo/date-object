function getLiveDate(){
    var liveDate = new Date()
    console.log(liveDate);
} 

function printStringDate(str){
    var strDate = new Date(str)
    console.log(strDate)
}

function printUserDate (){
    var dateInput = prompt()
    var strDate = new Date(dateInput) 
    console.log(strDate)
}

function getDateMonth(){
    var userDate = prompt()
    return strDate = new Date(userDate).getMonth()
}

function getDateHour(){
    var userDate = prompt()
    return strDate = new Date(userDate).getHours()
}

function getDateYear(){
    var userDate = prompt()
    return strDate = new Date(userDate).getFullYear()
}

function getDateMinutes(){
    var userDate = prompt()
    return strDate = new Date(userDate).getMinutes()
}

function getErlyDate(){
    var userDate1 = new Date(prompt())
    var userDate2 = new Date(prompt())

    if(userDate1 >userDate2){
        return userDate2
    }
    return userDate1
}

function calculkateYourAge (){
    var userDate = new Date(prompt())

    return new Date().getFullYear() -userDate.getFullYear()
}

function webEntry(){
    var userDate = new Date(prompt())
    var userAge = new Date().getFullYear()-userDate.getFullYear()

    if(userAge>18){
        alert("you may enter")
    }
    else{
        alert("you may not enter")
    }
}

function printLocation(){

    console.log(dateOb = new Date().getUTC())
}


function getRandomDate(){

    console.log (Math.floor(Math.random()*12) + "/" + Math.floor(Math.random()*(31-1)+1) + "/" + Math.floor(Math.random()*(2022-1990)+1990));
}
getRandomDate()