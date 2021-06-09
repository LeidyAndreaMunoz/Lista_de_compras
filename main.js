var button = document.getElementById('button');
var input = document.getElementById('input');
var ul = document.querySelector('ul');

button.addEventListener('click', function(){
    if (input.value.length > 0) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = '';
    var buttonDelete = document.createElement('button');
    buttonDelete.appendChild(document.createTextNode('Eliminar'));
    buttonDelete.onclick = Delete;
    li.appendChild(buttonDelete);
    }    
})

function Delete(e) {
    e.target.parentNode.remove();
}