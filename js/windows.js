var win7 = "Windows 7 was released on October 22, 2009, but many users have used it so far - since it was becoming increasingly difficult to support old operating systems for new programs, Microsoft decided to stop supporting this OS in 2020, but they left the possibility of paid support until January 2023, when support will be completely discontinued..<br><br>More information can be found by clicking 'more details' on the Windows 7 card";
var win8 = "Windows 8 was released on October 26, 2012, it was the first operating system of the Windows family not with a skewomorphic design - it used a flat design in the Metro style. Since this product was the first with a similar design, there were many flaws in it, which the company fixed in the Windows 8.1 version.<br><br>More information can be found by clicking 'more details' on the Windows 8 card";
var win81 = "Windows 8.1 was released on October 17, 2013, initially it was a major update for all Windows 8 users, which was subsequently released as a separate operating system. It is focused on working with touch-sensitive PCs, but it can also be used in 'classic' computers.<br><br>More information can be found by clicking 'more details' on the Windows 8.1 card";
var win10 = "Windows 10 was released on July 29, 2015, now this operating system is the most popular among the Windows family, upgrading to this system was free for all users with Windows 7 and Windows 8 operating systems for a year after the release of Windows 10.<br><br>More information can be found by clicking 'more details' on the Windows 10 card";
var win11 = "Windows 11 was released on October 5, 2021, this is the last (at the moment) operating system of the Windows family, according to Microsoft, the further work of Windows will be provided as a service, that is, there will be no new operating systems, instead there will be updates and new builds for existing ones (Windows 10 and Windows 11 are currently relevant).<br><br>More information can be found by clicking 'more details' on the Windows 11 card";

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
