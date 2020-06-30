/*
 * Add your JavaScript to this file to complete the assignment.
 */
function createTweet(){

  document.getElementById("modal-backdrop").classList.remove("hidden");
  document.getElementById("create-twit-modal").style.display ="block";
  
  }
  
  
function CloseModal(){
  document.getElementById("modal-backdrop").classList.add("hidden");
  document.getElementById("create-twit-modal").style.display ="none";
  
  //When the modal is closed, the values of all of the input fields should be cleared
  // so they don't appear the next time the modal is opened.
  
  document.getElementById("twit-text-input").value = "";
  document.getElementById("twit-attribution-input").value = "";
  
  
  }

function createTwit(){
  
  var text = document.getElementById("twit-text-input").value;
  var author = document.getElementById("twit-attribution-input").value;
  
  var elem = document.createElement('article');
  if (text=="" || author==""){
    alert('You have left the Author or Text boxes blank. You must fill out all boxes.')
  }
  else {
  var articeElem = elem;
  elem.setAttribute('class','twit');
  document.getElementById("twit-container-div").append(elem);
  
  var innerelem = document.createElement('div');
  innerelem.setAttribute('class','twit-icon');
  elem.append(innerelem);
  elem = innerelem;
  
  var innerelem = document.createElement('i');
  innerelem.setAttribute('class','fa fa-bullhorn');
  elem.append(innerelem);
  elem = innerelem;
  
  var innerelem = document.createElement('div');
  var twit_content_elem = innerelem;
  innerelem.setAttribute('class','twit-content');
  articeElem.append(innerelem);
  elem = innerelem;
  
  
  var innerelem = document.createElement('p');
  innerelem.setAttribute('class','twit-text');
  innerelem.textContent = text;
  elem.append(innerelem);
  elem = innerelem;
  
  
  var innerelem = document.createElement('p');
  innerelem.setAttribute('class','twit-author');
  twit_content_elem.append(innerelem);
  elem = innerelem;
  
  var innerelem = document.createElement('a');
  innerelem.setAttribute('href','#');
  innerelem.textContent = author;
  elem.append(innerelem);
  elem = innerelem;
  CloseModal();

    }
  }

$(function() {
    $("#navbar-search-button").click(search);
});

function search(){
  var searchfield = document.getElementById("navbar-search-input").value;//Captures what user types in the search box
  //Check for all the contents that is present under .twit-content whether any of those includes the text that user searched for
  document.querySelectorAll('.twit-content').forEach(function(item){
      var a = item.innerText.includes(searchfield); //if it matches then a stores true else false
      console.log(a);
      if(!a) {
          item.parentNode.remove();//removing all other vtwits which doe not contain the searched text
      }
  })
}

function newsearch(){
  var input, fil, ul, li, a, i, txtvalue;
  input = document.getElementById("myInput");
  fil = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i=0; i<li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    txtvalue = a.textContent || a.innerText;
    if (txtvalue.toUpperCase().indexOf(fil) > -1){
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}