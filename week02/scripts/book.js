const button = document.querySelector('button');
const input = document.querySelector('#favchap');

button.addEventListener('click', function(){
    if(input.value.trim() !== '') {
        const list = document.querySelector('ul');
        
        const li = document.createElement('li');
        
        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();
        
    }
});
