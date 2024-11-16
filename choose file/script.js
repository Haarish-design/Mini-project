const image=document.querySelector("img")
const inputfile=document.querySelector("input")

inputfile.addEventListener("change",function(){
    image.src=
    URL.createObjectURL(inputfile.files[0])
})