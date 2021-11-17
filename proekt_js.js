var date=new Date();
var hour=now.getHours();

var username;
username = window.prompt("Hi there! \n Внеси го твоето име:");

document.getElementById("zdravo").innerHTML="Добредојде на мојата страна, " + username + "!";

function getwords() {
    var text = words.value;
    document.getElementById("para").innerHTML += '<p>'+ username +" : "+ text;
    document.getElementById("words").value = "коментар";
}

function getwords2() {
    var text2 = words.value;
    document.getElementById("para2").innerHTML += '<p>' + username +" : "+text2;
    document.getElementById("words").value = "коментар";
}

function getwords3() {
    var text3 = words.value;
    document.getElementById("para3").innerHTML += '<p>'+ username +" : " +text3;
    document.getElementById("words").value = "коментар";
}

function getwords4() {
    var text4 = words.value;
    document.getElementById("para4").innerHTML += '<p>'+ username +" : "+text4;
    document.getElementById("words").value = "коментар";
}

function getcomment() {
    var comm = comment.value;
    document.getElementById("komentar").innerHTML += '<p>'+ username +" : '"+comm +
     "'\n - "+ date + hour;
    document.getElementById("comment").value = "коментар";
}

