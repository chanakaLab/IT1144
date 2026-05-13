let sbhd_cont = document.querySelector("#subhead-cont");

sbhd_cont.addEventListener('click', function(e){
    console.log(e.target);
    e.target.parentElement.removeChild(e.target);
    console.log(e.target.id + " " + e.target.className);
})


