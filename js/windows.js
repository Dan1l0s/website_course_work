var win7 = "Windows 7 была выпущена 22 октября 2009 года, но многие пользователи пользовались ей до сих пор - так как поддержку старых операционных систем для новых программ становилось делать всё сложнее, то Microsoft приняли решение прекратить поддержку этой ОС в 2020 году, но они оставили возможность платной поддержки до января 2023 года, когда поддержка будет полностью прекращена.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 7";
var win8 = "Windows 8 была выпущена 26 октября 2012 года, это была первая операционная система семейства Windows не с скевоморфическим дизайном - в ней использовался плоский дизайн в стиле Metro. Так как этот продукт был первым с подобным дизайном, в нём было много недоработок, которые компания исправила в версии Windows 8.1.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 8";
var win81 = "Windows 8.1 была выпущена 17 октября 2013 года, изначально это было крупное обновление для всех пользователей Windows 8, которое впоследствии было выпущено как отдельная операционная система. Ориентирована на работу с сенсорными ПК, но также может быть использована и в 'классических' компьютерах.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 8.1";
var win10 = "Windows 10 была выпущена 29 июля 2015 года, сейчас эта операция система является самой популярной среди семейства Windows, обновление до этой системы было бесплатным для всех пользователей с операционными система Windows 7 и Windows 8 в течение года после выхода Windows 10.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 10";
var win11 = "Windows 11 была выпущена 5 октября 2021 года, это последняя (на данный момент) операционная система семейства Windows, по заявлению Microsoft, дальнейшая работа Windows будет предоставляться как услуга, то есть не будет новых операционных систем, вместо них будут обновления и новые сборки для существующих (на данный момент актуальны Windows 10 и Windows 11).<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Windows 11";

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
                return;
            }
            else if (element.classList.contains("hidden"))
            {
                element.classList.remove("hidden");
                element.classList.add("visible2");
            }
            else if (element.classList.contains("notvisible"))
            {
                element.classList.remove("notvisible");
                element.classList.add("visible");
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
                return;
            }
            else if (element.classList.contains("hidden"))
            {
                element.classList.remove("hidden");
                element.classList.add("visible2");
            }
            else if (element.classList.contains("notvisible"))
            {
                element.classList.remove("notvisible");
                element.classList.add("visible");
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
                else if (element.classList.contains("notvisible"))
                {
                    element.classList.remove("notvisible");
                    element.classList.add("visible");
                } 
                return;
            }
            else if (element.classList.contains("hidden"))
            {
                element.classList.remove("hidden");
                element.classList.add("visible2");
            }
            else if (element.classList.contains("notvisible"))
            {
                element.classList.remove("notvisible");
                element.classList.add("visible");
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
                return;
            }
            else if (element.classList.contains("hidden"))
            {
                element.classList.remove("hidden");
                element.classList.add("visible2");
            }
            else if (element.classList.contains("notvisible"))
            {
                element.classList.remove("notvisible");
                element.classList.add("visible");
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
                return;
            }
            else if (element.classList.contains("hidden"))
            {
                if (element.classList.contains("visible")) element.classList.remove("visible");
                element.classList.remove("hidden");
                element.classList.add("visible2");
            }
            else if (element.classList.contains("notvisible"))
            {
                element.classList.remove("notvisible");
                element.classList.add("visible");
            } 
            element.innerHTML = win7;
            break;
    }
}
