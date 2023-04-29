var ubuntu = "Ubuntu was released on October 20, 2004, now it is one of the most popular Linux distributions. The main developer and sponsor is Canonical. Currently, the project is actively developing and supported by the free community.<br><br>More information can be found by clicking 'more details' on the Ubuntu card";
var mint = "Linux Mint was released on August 27, 2006, Linux Mint provides full support for a variety of multimedia formats, includes some proprietary programs and comes bundled with an extensive set of open source applications.<br><br>More information can be found by clicking 'more details' on the Linux Mint card";
var astra = "Astra Linux is an operating system based on the Linux kernel, which is being implemented in Russia as an alternative to Microsoft Windows.Ensures the degree of protection of the processed information up to the level of state secrets of 'special importance' inclusive.<br><br>More information can be found by clicking 'more details' on the Astra Linux card";
var kali = "Kali Linux - GNU/Linux-LiveCD, which arose as a result of the merger of WHAX and Auditor Security Collection. The project was created by Mati Aharoni and Max Moser. It is intended primarily for conducting safety tests. The heir of the BackTrack distribution that developed before 2013.<br><br>More information can be found by clicking 'more details' on the Kali Linux card";

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
