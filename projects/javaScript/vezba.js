
var ourlist = document.getElementById("our-list");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var myTitle = document.getElementById('title');
var ourButton = document.getElementById("our-button");
var counter = 1;
for (i = 0; i<=listItems.length; i++) {
    listItems[i].addEventListener('click', activateItem);
}

function activateItem() {
    myTitle.innerHTML = this.innerHTML;
}

ourButton.addEventListener('click', addItem);

function addItem() {
    ourlist.innerHTML += "<li> New Item + counter</li>";
    counter ++;
}