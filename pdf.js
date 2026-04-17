function generatePDF(){

const {jsPDF}=window.jspdf

let doc=new jsPDF()

doc.text("Sistema Articular",20,20)

let imgs=document.querySelectorAll(".gallery img")

let y=40

imgs.forEach(img=>{

doc.addImage(img.src,"JPEG",20,y,160,90)

y+=100

})

doc.save("articulacoes.pdf")

}
