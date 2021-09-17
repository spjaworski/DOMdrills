document.addEventListener("DOMContentLoaded", function() {
    let headContainer= document.createElement('div');
headContainer.className='header-container';

let head1 = document.createElement('h1');
 let firstHeaderText = document.createTextNode('This is an h1')
 head1.appendChild(firstHeaderText);
 headContainer.appendChild(head1);
 document.body.appendChild(headContainer);
});

