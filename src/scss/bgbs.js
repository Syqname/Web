const panels = document.querySelectorAll(".panel");
    panels.forEach((panel)=>{
        panel.addEventListener("click",()=>{
            qq();
            panel.classList.add("active");
        });
    });
    function qq(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    });
}