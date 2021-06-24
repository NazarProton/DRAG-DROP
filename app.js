const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart' , dragstart)
item.addEventListener('dragend' , dragend)

for (const placeholder of placeholders) {
    // console.log(placeholder);
    placeholder.addEventListener('dragover' , dragover)
    placeholder.addEventListener('dragenter' , dragenter)
    placeholder.addEventListener('dragleave' , dragleave)
    placeholder.addEventListener('drop' , dragdrop)
}

function dragstart (event) {
    document.querySelector('.item').innerHTML = 'Хочу новое место!' 
    // console.log('drag start' , event.target);
    // console.log('drag start' , this);
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add
    ('hide'), 0)
}

function dragend (event) {
    document.querySelector('.item').innerHTML = 'Перетащи меня!'
    // console.log('drag end');
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
    // event.target.classList.remove('hide')
    
}

function dragover(event) {
    event.preventDefault()
    // console.log('drag over');
    
}
function dragenter (event) {
    // console.log('drag enter');
    event.target.classList.add('hovered')
    
}
function dragleave (event) {
    // console.log('drag leave');
    event.target.classList.remove('hovered')

}
function dragdrop (event) {
    event.target.append(item)
    // console.log('drop');
    event.target.classList.remove('hovered')
}