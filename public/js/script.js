/*      - - - SEARCH BAR - - -         */

var sitePages = [
    {
        keyword: "home",
        link: '/home'
    },
    {
        keyword: "beginner",
        link: '/beginner'
    },
    {
        keyword: "basic",
        link: '/basic'
    },
    {
        keyword: "elliptical",
        link: '/elliptical'
    },
    {
        keyword: "bikes",
        link: '/bikes'
    },
    {
        keyword: "killer",
        link: '/killer'
    },
    {
        keyword: "calendar",
        link: '/calendar'
    },
    {
        keyword: "cardio",
        link: '/cardio'
    },
    {
        keyword: "profile",
        link: '/profile'
    },
    {
        keyword: "treadmill",
        link: '/treadmill'
    },
    {
        keyword: "weight",
        link: '/weightlift'
    },
    {
        keyword: "leg",
        link: '/leg'
    },
     {
        keyword: "abs",
        link: '/abs'
    },
     {
        keyword: "back",
        link: '/back'
    },
     {
        keyword: "chest",
        link: '/chest'
    },
     {
        keyword: "shoulder",
        link: '/shoulder'
    },
     {
        keyword: "triceps",
        link: '/triceps'
    }
]

function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}

function calInit(){

  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
  }

  // Checkmark when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
  }, false);

}

// Create a new list item by clicking the "Add" button
function newRoutine() {
  var remove = document.getElementsByClassName("remove");
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("userList").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
