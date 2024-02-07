const mode = document.getElementById('mode');
const root = document.getElementsByTagName( 'html' )[0];
const textMode = document.querySelector('.type-mode');

const navBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');

const browsering = document.getElementById('browsering');

/// mode functions

mode.addEventListener('click' , e =>{
    if (root.classList.contains('light')) {

        root.classList.remove('light')
        root.classList.add('dark')

    }else if(root.classList.contains('dark')){

        root.classList.remove('dark')
        root.classList.add('light')

    }

    changeTExtMode()
})

function changeTExtMode(){
    if (root.classList.contains('light')) {
        console.log('dark');
      return  textMode.textContent = 'DARK'
    }

    else if (root.classList.contains('dark')) {
        console.log('light');
       return textMode.textContent = 'LIGHT'
    }
} changeTExtMode()


/// nav list functions

navBtn.addEventListener('click' , e =>{
    if (navList.classList.contains('up')) {

        navList.classList.remove('up')
        navList.classList.add('dowen')

    }else if(navList.classList.contains('dowen')){

        navList.classList.remove('dowen')
        navList.classList.add('up')

    }

})

navList.addEventListener('click' , e =>{
    if (navList.classList.contains('up')) {

        navList.classList.remove('up')
        navList.classList.add('dowen')

    }else if(navList.classList.contains('dowen')){

        navList.classList.remove('dowen')
        navList.classList.add('up')

    }

})


window.addEventListener('scroll' , ()=>{
    console.log('d');
    if (root.scrollTop  > 70) {
        document.querySelector('.drop-arrow-wrapper').style.display = 'none';
    }else{
        //document.querySelector('.drop-arrow-wrapper').style.display = 'block';
    }
})


