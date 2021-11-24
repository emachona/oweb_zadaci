var date=new Date();
var hour=date.getHours();
var minutes=date.getMinutes();
var godina=date.getUTCFullYear();
var mesec=date.getUTCMonth();
var den=date.getDay();

var username;
username = window.prompt("Hi there! \n Внеси го твоето име:");

document.getElementById("zdravo").innerHTML="Добредојде на мојата страна, " + username + "!";

/*function toggleText(){
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }*/
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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

function getcomment() {
    var comm = document.getElementById("komentarprashaj").value;
    document.getElementById("komentar").innerHTML += "<div>"+ "<strong>"+username+"</strong>"+" : " + comm +
     "<br>"+ den+"-"+mesec+"-"+godina+" "+hour+":"+minutes +"<hr></div>";
    document.getElementById("komentarprashaj").value = "";
}

