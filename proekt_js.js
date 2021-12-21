var date=new Date();
var hour=date.getHours();
var minutes=date.getMinutes();
var godina=date.getUTCFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var mesec = months[date.getMonth()];
var den = days[date.getDay()];

var username;
username = window.prompt("Hi there! \n Внеси го твоето име:");
if(username==null){
 username="Anonymous";
}
document.getElementById("zdravo").innerHTML="Добредојде на мојата страна, " + username + "!";
  
  const nav=document.querySelector(".menu");
  let lastScrollY=window.scrollY;

  window.addEventListener("scroll",() => {
    if(lastScrollY< window.scrollY){
      nav.classList.add("nav--hidden");
    }
    else{
     nav.classList.remove("nav--hidden");
    }
    lastScrollY=window.scrollY;
  });

  function myFunction(x) {
    x.classList.toggle("dislike");
  }

function getwords() {
    var text=document.getElementById("words").value;
    document.getElementById("para").innerHTML +="<div>" + username + " : "+ text + "</div>";
    document.getElementById("words").value = "Коментирај";
}

function getwords2() {
    var text2 = document.getElementById("words2").value;
    document.getElementById("para2").innerHTML +="<div>" + username + " : " + text2 + "</div>";
    document.getElementById("words2").value = "Коментирај";
}

function getwords3() {
    var text3 = document.getElementById("words3").value;
    document.getElementById("para3").innerHTML += "<div>" + username + " : " +text3+ "</div>"; 
    document.getElementById("words3").value = "Коментирај";
}

function getwords4() {
    var text4 = document.getElementById("words4").value;
    document.getElementById("para4").innerHTML += "<div>"+ username +" : "+text4 + "</div>";
    document.getElementById("words4").value = "Коментирај";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function getSavedValuePost(v) {
  if (!localStorage.getItem(v)) {
      localStorage.setItem(v, "");
      return "";
  }
  return localStorage.getItem(v);
}

var pamti; 
function post(){
  var title = document.getElementById("myTitle").value;
  var text = document.getElementById("myText").value;
  var sodrzhina = '<div class="card"><h2>' + title + '</h2><h5>By ' + username + ',<br>' 
  +den+ ", "+date.getDate() +" "+mesec+" "+godina+" "+hour+":"+minutes + 
  '</h5> <p class="blog-txt">' + text + '</p></div>'
  pamti = getSavedValuePost("overlay");
  document.getElementById("overlay").innerHTML = sodrzhina+pamti;

            pamti=sodrzhina+pamti;
            localStorage.setItem("overlay", pamti);
}

function getcomment() {
    var comm = document.getElementById("komentarprashaj").value;
    document.getElementById("komentar").innerHTML += "<div>"+ "<strong>"+username+"</strong>"+" : " + comm +
     "<br>"+ den+ ", "+date.getDate() +" "+mesec+" "+godina+" "+hour+":"+minutes +"<hr></div>";
    document.getElementById("komentarprashaj").value = "";
    // localStorage.clear();
}

