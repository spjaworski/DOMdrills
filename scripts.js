document.addEventListener("DOMContentLoaded", function() {
    let headContainer= document.createElement('div');
headContainer.className='header-container';

let head1 = document.createElement('h1');
head1.className='h1';
 let firstHeaderText = document.createTextNode('This is an h1')
 head1.appendChild(firstHeaderText);
 headContainer.appendChild(head1);

 let head2 = document.createElement('h2');
 head2.className='h2';
 let secoundHeaderText = document.createTextNode('This is an h2')
 head2.appendChild(secoundHeaderText);
 headContainer.appendChild(head2);

 let head3 = document.createElement('h3');
 head2.className='h3';
 let thirdHeaderText = document.createTextNode('This is an h3')
 head3.appendChild(thirdHeaderText);
 headContainer.appendChild(head3);

 let head4 = document.createElement('h4');
 head4.className='h4';
 let fourthHeaderText = document.createTextNode('This is an h4')
 head4.appendChild(fourthHeaderText);
 headContainer.appendChild(head4);
 
 let head5 = document.createElement('h5');
 head5.className='h5';
 let fifthHeaderText = document.createTextNode('This is an h5')
 head5.appendChild(fifthHeaderText);
 headContainer.appendChild(head5);

 let head6 = document.createElement('h6');
 head6.className='h6';
 let sixthHeaderText = document.createTextNode('This is an h6')
 head6.appendChild(sixthHeaderText);
 headContainer.appendChild(head6);

 document.body.appendChild(headContainer);

});

