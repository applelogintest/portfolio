function clickIcon(){
    var nav_list=document.getElementById('nav_list');
    if(nav_list.className === 'nav_list'){
        nav_list.className += " responsive";

    }
    else{
        nav_list.className = "nav_list";
    }
}