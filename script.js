const menuIcon= document.getElementById('menu-icon');
const menuItem= document.getElementById('menu-container');
const heading= document.getElementById('heading');
const arrow= document.getElementById('arrow');



const transformImage= document.getElementById('transform');
const standOutImage= document.getElementById('stand-out');
const graphicDesignImage= document.getElementById('graphic-design');
const photographyImage= document.getElementById('Photography');
const milkImage= document.getElementById('milk');
const orangeImage= document.getElementById('orange');
const coneImage= document.getElementById('cone');
const sugarImage= document.getElementById('sugar-cube');

const twitter= document.getElementById('twitter');

if (window.innerWidth<= 726){
    transformImage.src = "images/mobile/image-transform.jpg";
    standOutImage.src= "images/mobile/image-stand-out.jpg";
    graphicDesignImage.src= "images/mobile/image-graphic-design.jpg";
    photographyImage.src= "images/mobile/image-photography.jpg";
    coneImage.src = "images/mobile/image-gallery-cone.jpg";
    milkImage.src = "images/mobile/image-gallery-milkbottles.jpg";
    orangeImage.src = "images/mobile/image-gallery-orange.jpg";
    sugarImage.src = "images/mobile/image-gallery-sugar-cubes.jpg";
    
} else{
    transformImage.src = "images/desktop/image-transform.jpg";
    standOutImage.src= "images/desktop/image-stand-out.jpg";
    graphicDesignImage.src= "images/desktop/image-graphic-design.jpg";
    photographyImage.src= "images/desktop/image-photography.jpg";
    coneImage.src = "images/desktop/image-gallery-cone.jpg";
    milkImage.src = "images/desktop/image-gallery-milkbottles.jpg";
    orangeImage.src = "images/desktop/image-gallery-orange.jpg";
    sugarImage.src = "images/desktop/image-gallery-sugarcubes.jpg";
    
}


twitter.addEventListener('mouseover', ()=>{
    twitter.src= "images/twitter-white.svg";
})
twitter.addEventListener('mouseout', ()=>{
    twitter.src = "images/icon-twitter.svg";
})

menuIcon.addEventListener('click', ()=> {
    menuItem.classList.toggle('show');
    heading.classList.toggle('title');
    arrow.classList.toggle('title');
})

