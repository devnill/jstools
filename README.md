jstools
=======

This is where I put code that helps me code. 

To run as a bookmarklet use: 

javascript:(function()%7Bvar%20el=document.createElement(%22div%22),b=document.getElementsByTagName(%22body%22)%5B0%5D,otherlib=!1,msg=%22%22;el.style.position=%22fixed%22,el.style.height=%2232px%22,el.style.width=%22220px%22,el.style.marginLeft=%22-110px%22,el.style.top=%220%22,el.style.left=%2250%25%22,el.style.padding=%225px%2010px%22,el.style.zIndex=1001,el.style.fontSize=%2212px%22,el.style.color=%22%23222%22,el.style.backgroundColor=%22%23f99%22;function%20showMsg()%7Bvar%20txt=document.createTextNode(msg);el.appendChild(txt),b.appendChild(el),window.setTimeout(function()%7Btxt=null,typeof%20jQuery==%22undefined%22?b.removeChild(el):(jQuery(el).fadeOut(%22slow%22,function()%7BjQuery(this).remove()%7D),otherlib&&(window.$jq=jQuery.noConflict()))%7D,2500)%7Dif(typeof%20jQuery!=%22undefined%22)return%20msg=%22This%20page%20already%20using%20jQuery%20v%22+jQuery.fn.jquery,showMsg(),$.getScript('https://raw.github.com/devnill/jstools/master/scripts/jstools.js');typeof%20$==%22function%22&&(otherlib=!0);function%20getScript(url,success)%7Bvar%20script=document.createElement(%22script%22);script.src=url;var%20head=document.getElementsByTagName(%22head%22)%5B0%5D,done=!1;script.onload=script.onreadystatechange=function()%7B!done&&(!this.readyState%7C%7Cthis.readyState==%22loaded%22%7C%7Cthis.readyState==%22complete%22)&&(done=!0,success(),script.onload=script.onreadystatechange=null,head.removeChild(script))%7D,head.appendChild(script)%7DgetScript(%22http://code.jquery.com/jquery-latest.min.js%22,function()%7B$.getScript('https://raw.github.com/devnill/jstools/master/scripts/jstools.js');return%20typeof%20jQuery==%22undefined%22?msg=%22Sorry,%20but%20jQuery%20was%20not%20able%20to%20load%22:(msg=%22This%20page%20is%20now%20jQuerified%20with%20v%22+jQuery.fn.jquery,otherlib&&(msg+=%22%20and%20noConflict().%20Use%20$jq(),%20not%20$().%22)),showMsg()%7D)%7D)();

 Thanks to Karl Swedberg for his jQuerify bookmarklet found <a href="http://www.learningjquery.com/2008/06/updated-jquery-bookmarklet">here.</a> 
