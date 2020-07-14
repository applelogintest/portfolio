window.onload = function(){
    var skill_imgs=document.getElementsByClassName('skill_img');
    console.log(skill_imgs);

    for(var i=0; i<skill_imgs.length; i++){
        skill_imgs[i].onmouseover = function(){
            this.src='../img/img_background.png';
            console.log(this.src);
        }
    }
}

