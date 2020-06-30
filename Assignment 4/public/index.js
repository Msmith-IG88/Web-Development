/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.  This is not required for your grade on this
 * assignment, but it'll allow you to have the full experience of the site
 * as we've implemented it so far.
 */

alert('JS successfully loaded.');
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
  document.getElementById("twit-text-input").value = "";
  document.getElementById("twit-attribution-input").value = "";
  
  }

function createTwit(){
  var text, author, element, element_two, inner_element, twit_content;
  text = document.getElementById("twit-text-input").value;
  author = document.getElementById("twit-attribution-input").value;
  
  element = document.createElement('article');
  if (text=="" || author==""){
    alert('You have left the Author or Text boxes blank. You must fill out all boxes.')
  }
  else {
  element_two = element;
  element.setAttribute('class','twit');
  document.getElementById("twit-container-div").append(element);
  inner_element = document.createElement('div');
  inner_element.setAttribute('class','twit-icon');
  element.append(inner_element);
  element = inner_element;
  inner_element = document.createElement('i');
  inner_element.setAttribute('class','fa fa-bullhorn');
  element.append(inner_element);
  element = inner_element;
  inner_element = document.createElement('div');
  twit_content = inner_element;
  inner_element.setAttribute('class','twit-content');
  element_two.append(inner_element);
  element = inner_element;
  inner_element = document.createElement('p');
  inner_element.setAttribute('class','twit-text');
  inner_element.textContent = text;
  element.append(inner_element);
  element = inner_element;
  inner_element = document.createElement('p');
  inner_element.setAttribute('class','twit-author');
  twit_content.append(inner_element);
  element = inner_element;
  inner_element = document.createElement('a');
  inner_element.setAttribute('href','#');
  inner_element.textContent = author;
  element.append(inner_element);
  element = inner_element;
  CloseModal();

    }
  }

$(function() {
    $("#navbar-search-button").click(search);
});

function search(){
  var search, x;
  search = document.getElementById("navbar-search-input").value;
  document.querySelectorAll('.twit-content').forEach(function(item){
      x = item.innerText.includes(search);
      console.log(x);
      if(!x) {
          item.parentNode.remove();
      }
  })
}

function live_search(){
  var input, fil, ul, li, x, i, txtvalue;
  input = document.getElementById("myInput");
  fil = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i=0; i<li.length; i++){
    x = li[i].getElementsByTagName("a")[0];
    txtvalue = a.textContent || x.innerText;
    if (txtvalue.toUpperCase().indexOf(fil) > -1){
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}