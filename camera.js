function openCamera(){

let input = document.createElement("input")

input.type="file"
input.accept="image/*"
input.capture="environment"
input.multiple=true

input.onchange=e=>{

let files=e.target.files

for(let file of files){

let reader=new FileReader()

reader.onload=function(ev){

let img=document.createElement("img")

img.src=ev.target.result

document.querySelector(".tab.active .gallery")
.appendChild(img)

}

reader.readAsDataURL(file)

}

}

input.click()

}
