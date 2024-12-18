let slideposition=0;
const sliders=document.querySelectorAll('.slider-item')
const totalslider=sliders.length
const btnprev=document.querySelector('#btn-previous')
const btnnext=document.querySelector('#btn-forward')
btnprev.addEventListener('click',function(){
    prevslide();
})
btnnext.addEventListener('click',function(){
    nextslide();
})

function updateposition(){
    sliders.forEach(slide=>{
        slide.classList.remove('active')
        slide.classList.add('hidden')
    })
    sliders[slideposition].classList.add('active')
    dots.forEach(dot=>{
        dot.classList.remove('dot-active')
    })
    dots[slideposition].classList.add('dot-active')

}
function prevslide(){
    if(slideposition==0)
        {
            slideposition=totalslider-1;
        }
        else{
            slideposition--;
    
        }
    updateposition()
}
function nextslide(){
    if(slideposition==totalslider-1)
    {
        slideposition=0;
    }
    else{
        slideposition++;

    }
    updateposition()
}


const dotcontainer=document.querySelector('.dots')

sliders.forEach(slide=>{
    const dot=document.createElement('div');
    dot.classList.add('dot')
    dotcontainer.appendChild(dot)
})
const dots=document.querySelectorAll('.dot')
dots[slideposition].classList.add('dot-active')

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        slideposition=index;
        updateposition()
    })
})
// setInterval(()=>{
// if(slideposition==totalslider-1){
//     slideposition=0;
// }
// else{
//     slideposition++;
// }
// updateposition()
// },4000)