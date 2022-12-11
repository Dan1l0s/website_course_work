var ubuntu = "Ubuntu выпущен 20 октября 2004 года, сейчас это один из самых популярных Linux-дистрибутивов. Основным разработчиком и спонсором является компания Canonical. В настоящее время проект активно развивается и поддерживается свободным сообществом.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Ubuntu";
var mint = "Linux Mint выпущен 27 августа 2006 года, Linux Mint предоставляет полную поддержку разнообразных форматов мультимедиа, включает в себя некоторые проприетарные программы и поставляется в комплекте с обширным набором приложений с открытым исходным кодом.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Linux Mint";
var astra = "Astra Linux - операционная система на базе ядра Linux, которая внедряется в России в качестве альтернативы Microsoft Windows.Обеспечивает степень защиты обрабатываемой информации до уровня государственной тайны «особой важности» включительно.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Astra Linux";
var kali = "Kali Linux -  GNU/Linux-LiveCD, возникший как результат слияния WHAX и Auditor Security Collection. Проект создали Мати Ахарони и Макс Мозер. Предназначен прежде всего для проведения тестов на безопасность. Наследник развивавшегося до 2013 года дистрибутива BackTrack.<br><br>Больше информации можно узнать, нажав 'подробнее' на карточке c Kali Linux";

function extra_info(text)   
{
    var element = document.getElementById("panel_linux");
    switch (text)
    {
        case 'kali':
            if (element.innerHTML == kali)
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
            element.innerHTML = kali;
            break;
        case 'astra':
            if (element.innerHTML == astra)
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
            element.innerHTML = astra;
            break;
        case 'mint':
            if (element.innerHTML == mint)
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
            element.innerHTML = mint;
            break;
        case 'ubuntu':
            if (element.innerHTML == ubuntu)
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
            element.innerHTML = ubuntu;
            break;
    }
}
