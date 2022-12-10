var mac = "Семейство операционных систем macOS является вторым по распространённости для десктопа (после Windows). Самой популярной версией macOS является Catalina (83,36 % среди всех версий macOS), следом идут Mojave (5,64 %), High Sierra (5,05 %), Sierra (2,1 %), El Capitan (1,56 %), Yosemite (1,21 %).<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c macOS";

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
