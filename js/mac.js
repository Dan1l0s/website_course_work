var mac = "The macOS family of operating systems is the second most common for the desktop (after Windows). The most popular version of macOS is Catalina (83.36% among all macOS versions), followed by Mojave (5.64%), High Sierra (5.05%), Sierra (2.1%), El Capitan (1.56%), Yosemite (1.21%).<br><br>More information can be found by clicking 'more details' on the macOS card";

function extra_info()   
{
    var element = document.getElementById("panel_mac");
    element.innerHTML = mac;
    if (element.classList.contains("visible") || element.classList.contains("visible2"))
    {
        if (element.classList.contains("visible"))
        {
            element.classList.remove("visible")
            element.classList.add("hidden");
        }
        if (element.classList.contains("visible2"))
        {
            element.classList.remove("visible2")
            element.classList.add("notvisible");
        }
    }
    else if (element.classList.contains("hidden"))
    {
        element.classList.remove("hidden");
        element.classList.add("visible2");
    }
    else 
    {
        element.classList.remove("notvisible");
        element.classList.add("visible");
    }
}
