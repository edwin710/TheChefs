function addItem(){
  var ul = document.getElementById("dynamic-list2");
  var candidate = document.getElementById("candidate2");
  var li = document.createElement("li");
  li.setAttribute('id2',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeItem(){
  var ul = document.getElementById("dynamic-list2");
  var candidate = document.getElementById("candidate2");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}