// const TagCloudMin = require("./TagCloud.min");



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


//Skill add
const skill =[
    "Front-end Development",
    "React.Js",
    "Redux",
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Git & Github",
    "Data Structure & Algorithms",
    "Problem Solving",
    "Node Js",
    "MongoDB",
    "OOPs",
    "Express",
]

var tagcloud = TagCloud(".sk", skill,{
    radius: 280, // rolling radius, unit `px`
    maxSpeed: 'normal', // rolling max speed, optional: `slow`, `normal`(default), `fast`
    initSpeed: 'fast', // rolling init speed, optional: `slow`, `normal`(default), `fast`
    direction: 225, // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
    keep: true, // whether to keep rolling after mouse out area, optional: `false`, `true`(default)(decelerate to rolling init speed, and keep rolling with mouse)
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
    containerClass: 'tagcloud',
    itemClass: 'tagcloud--item'
})
