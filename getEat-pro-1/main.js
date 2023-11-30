let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('.navbar a');
window.onscroll=()=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetheight;
    let id=sec.offsetheight;
    if(top >offset && top < offset +height){
        navlink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+id+']').classList.add('active')
        })
    }
}