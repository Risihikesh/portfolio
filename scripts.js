


//navigation remove and add
let navAdd = document.getElementById("nav-btn");
let navBar = document.getElementById("navigation");
let navRemove = document.getElementById("remove-nav");
let navList = document.querySelectorAll("#navigation ul li");

navAdd.addEventListener('click', ()=>{
    navBar.style.transform= "translateY(0)";
    navAdd.style.display = "none";
})

navRemove.addEventListener('click',()=>{
    navBar.style.transform = "translateY(-150%)";
    navAdd.style.display = "block";
})

navList.forEach((element) =>{
    element.addEventListener('click',()=>{
        navBar.style.transform = "translateY(-150%)";
        navAdd.style.display = "block"
    });
})
