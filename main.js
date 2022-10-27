let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = '40px'

let paragraphMess = document.querySelector('p.mess-with-me');
paragraphMess.style.background = 'green';

let hideMe = document.querySelector('#hide-me');
hideMe.style.display = 'none'


let firstDInosaur = document.querySelector('#triceratops');
firstDInosaur.style.width = '324px';


//EVent Listeners

spanMess.addEventListener('click',function(){
    spanMess.style.color = 'orange';
})


firstDInosaur.addEventListener('click',function(){
    firstDInosaur.style.border = '3px solid red'
});


let featherDino = document.querySelector('#feathers');
featherDino.addEventListener('click',function(){
    featherDino.style.opacity='.5'})

let roww=document.querySelector('#row');

let switchBackground = document.querySelector('#toggle');
switchBackground.addEventListener('click',function(){
    if(roww.style.background==='black'){
        row.style.background = '';
     } else{
            row.style.background = 'black'
        }
    });

let bigger = document.querySelector('#biggify');

bigger.addEventListener('mouseover',function(){
    bigger.style.width = '200px';
})

bigger.addEventListener('mouseleave',function(){
    bigger.style.width = '162px'
})
