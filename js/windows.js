var win7 = "Windows 7 была выпущена 22 октября 2009 года, но многие пользователи пользовались ей до сих пор - так как поддержку старых операционных систем для новых программ становилось делать всё сложнее, то Microsoft приняли решение прекратить поддержку этой ОС в 2020 году, но они оставили возможность платной поддержки до января 2023 года, когда поддержка будет полностью прекращена.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 7";
var win8 = "Windows 8 была выпущена 26 октября 2012 года, это была первая операционная система семейства Windows не с скевоморфическим дизайном - в ней использовался плоский дизайн в стиле Metro. Так как этот продукт был первым с подобным дизайном, в нём было много недоработок, которые компания исправила в версии Windows 8.1.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 8";
var win81 = "WINDOWS81_text";
var win10 = "WINDOWS10_text";
var win11 = "WINDOWS11_text";

function extra_info(text)   
{
    var element = document.getElementById("panel_win");
    switch (text)
    {
        case 'win11':
            if (element.innerHTML == win11)
            {
                if (element.classList.contains("visible") || element.classList.contains("visible2"))
                {
                    if (element.classList.contains("visible"))
                    {
                        element.classList.remove("visible")
                    }
                    if (element.classList.contains("visible2"))
                    {
                        element.classList.remove("visible2")
                    }
                    element.classList.add("hidden");
                }
                else if (element.classList.contains("hidden"))
                {
                    element.classList.remove("hidden");
                    element.classList.add("visible2");
                }
                return;
            }    
            element.innerHTML = win11;
            break;
        case 'win10':
            if (element.innerHTML == win10)
            {
                if (element.classList.contains("visible") || element.classList.contains("visible2"))
                {
                    if (element.classList.contains("visible"))
                    {
                        element.classList.remove("visible")
                    }
                    if (element.classList.contains("visible2"))
                    {
                        element.classList.remove("visible2")
                    }
                    element.classList.add("hidden");
                }
                else if (element.classList.contains("hidden"))
                {
                    element.classList.remove("hidden");
                    element.classList.add("visible2");
                }
                return;
            }
            element.innerHTML = win10;
            break;
        case 'win81':
            if (element.innerHTML == win81)
            {
                if (element.classList.contains("visible") || element.classList.contains("visible2"))
                {
                    if (element.classList.contains("visible"))
                    {
                        element.classList.remove("visible")
                    }
                    if (element.classList.contains("visible2"))
                    {
                        element.classList.remove("visible2")
                    }
                    element.classList.add("hidden");
                }
                else if (element.classList.contains("hidden"))
                {
                    element.classList.remove("hidden");
                    element.classList.add("visible2");
                }
                return;
            }
            element.innerHTML = win81;
            break;
        case 'win8':
            if (element.innerHTML == win8)
            {
                if (element.classList.contains("visible") || element.classList.contains("visible2"))
                {
                    if (element.classList.contains("visible"))
                    {
                        element.classList.remove("visible")
                    }
                    if (element.classList.contains("visible2"))
                    {
                        element.classList.remove("visible2")
                    }
                    element.classList.add("hidden");
                }
                else if (element.classList.contains("hidden"))
                {
                    element.classList.remove("hidden");
                    element.classList.add("visible2");
                }
                return;
            }
            element.innerHTML = win8;
            break;
        case 'win7':
            if (element.innerHTML == win7)
            {
                if (element.classList.contains("visible") || element.classList.contains("visible2"))
                {
                    if (element.classList.contains("visible"))
                    {
                        element.classList.remove("visible")
                    }
                    if (element.classList.contains("visible2"))
                    {
                        element.classList.remove("visible2")
                    }
                    element.classList.add("hidden");
                }
                else if (element.classList.contains("hidden"))
                {
                    element.classList.remove("hidden");
                    element.classList.add("visible2");
                }
                return;
            }
            element.innerHTML = win7;
            break;
    }
    if (element.classList.contains("notvisible")){
        element.classList.remove("notvisible");
        element.classList.add("visible");
    }
    if (element.classList.contains("hidden"))
    {
        element.classList.add("visible2");
    }
}
