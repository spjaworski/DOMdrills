document.addEventListener("DOMContentLoaded", function() {
    let headContainer= document.createElement('div');
headContainer.className='header-container';

let head1 = document.createElement('h1');
head1.className='h1 heading';
 let firstHeaderText = document.createTextNode('This is an h1')
 head1.appendChild(firstHeaderText);
 headContainer.appendChild(head1);

 let head2 = document.createElement('h2');
 head2.className='h2 heading';
 let secoundHeaderText = document.createTextNode('This is an h2')
 head2.appendChild(secoundHeaderText);
 headContainer.appendChild(head2);

 let head3 = document.createElement('h3');
 head3.className='h3 heading';
 let thirdHeaderText = document.createTextNode('This is an h3')
 head3.appendChild(thirdHeaderText);
 headContainer.appendChild(head3);

 let head4 = document.createElement('h4');
 head4.className='h4 heading';
 let fourthHeaderText = document.createTextNode('This is an h4')
 head4.appendChild(fourthHeaderText);
 headContainer.appendChild(head4);
 
 let head5 = document.createElement('h5');
 head5.className='h5 heading';
 let fifthHeaderText = document.createTextNode('This is an h5')
 head5.appendChild(fifthHeaderText);
 headContainer.appendChild(head5);

 let head6 = document.createElement('h6');
 head6.className='h6 heading';
 let sixthHeaderText = document.createTextNode('This is an h6')
 head6.appendChild(sixthHeaderText);
 headContainer.appendChild(head6);

 document.body.appendChild(headContainer);

 var colors = ["magenta", "blue", "red", "grey", "green", "brown", "purple", "yellow"];

 function randomColor() {
     return colors[Math.floor(Math.random() * colors.length)]
 };

 document.querySelectorAll('.heading').forEach(function(item) {
     item.addEventListener('dblclick', function(){
         item.style.color = randomColor();
     })
 })
 
 let timesClicked = 0;
 
 function listBuilder() {
     let newListItem = document.createElement('li');
     timesClicked += 1;
     let listText = document.createTextNode('This is list item ' + timesClicked);
     newListItem.appendChild(listText);
     document.body.appendChild(newListItem);
 }

 let button = document.createElement('button');
 let btnText = document.createTextNode('Click to add new list item');
 button.appendChild(btnText);
 document.body.appendChild(button);

 button.addEventListener("click", function() {
     listBuilder();
 })

});

