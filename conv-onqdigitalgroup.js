  jQuery(document).ready(function(){    
    if(jQuery('.odg-st-container').length == 0){
      onqSticky();
     }
        if(jQuery('.odg-exit-lightbox').length == 0){
     	onqExit();
     }
  });

jQuery("body").keydown(function(event){

    if((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey|| (event.metaKey || event.ctrlKey) && event.keyCode == 13) {
/*     if(jQuery('.odg-st-container').length == 0){
      onqSticky();
     }
        if(jQuery('.odg-exit-lightbox').length == 0){
     	onqExit();
     }
*/

	}
});
  function onqSticky()
  {
  jQuery('body').prepend(`<div class="odg-st-container" id="odg-st-containerID"><div class="odg-st-container__outer"><div class="odg-st-container__inner"><div class="odg-st-item__copy"><p>Transform your communication strategy with innovative and cutting-edge digital signage solutions</p></div><div class="odg-st-item_column__button"><a href="https://www.onqdigitalgroup.com.au/contact" class="odg-st-item__button" rel="nofollow">Request a Quote</a></div></div></div></div>`);
var mc = window.matchMedia("(min-width: 768px)");
mc.addListener(slideshow);
function slideshow() {
   if (mc.matches) {
        document.querySelector("#odg-st-containerID").style.bottom = "0px";
    } else {
         document.querySelector("#odg-st-containerID").style.bottom = "0px";
    } 
document.querySelector('chat-widget').shadowRoot.querySelector('.lc_text-widget--btn').setAttribute('style', 'margin-bottom:100px');
if(document.querySelector('chat-widget').shadowRoot.querySelector('.Prompt') !=  null){
  document.querySelector('chat-widget').shadowRoot.querySelector('.Prompt').setAttribute('style', 'margin-bottom:120px');
}
}
function slideHide() {
   
     document.querySelector("#odg-st-containerID").style.bottom = "-120px";
   document.querySelector('chat-widget').shadowRoot.querySelector('.lc_text-widget--btn').setAttribute('style', 'margin-bottom:0');
if(document.querySelector('chat-widget').shadowRoot.querySelector('.Prompt') !=  null){
document.querySelector('chat-widget').shadowRoot.querySelector('.Prompt').setAttribute('style', 'margin-bottom:0');
}

    }
window.addEventListener("scroll", function (e) {
    var y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (y > 500) {
        slideshow();
    } else {
        slideHide();
    }
});
    


  
  
  }
  
  
  function onqExit()
  {
  jQuery('body').prepend(` <div class="odg-exit-lightbox" id="odg-exit-text" > <div class="odg-exit-box"> <div class='odg-exit-container'> <div class='odg-exit-bg'> <div class="odg-exit-left"> </div><div class="odg-exit-right"> <div class="odg-exit-header"> Discover Why Industry Leaders Choose onQ Digital for Their Digital Signage Needs </div><div class="odg-exit-BulletHeader">Join our impressive client list and experience cutting-edge solutions, expert support, and personalized services. </div><div class="odg-exit-buttons"> <a  class="odg-exit-CTA" href="https://www.onqdigitalgroup.com.au/contact">Request a Quote Today </a></div><ul class="odg-exit-clients"> <li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/6400ec439c4a821823bddedf_5d9a5fedc33c896f12812b61_5d9a5c20c33c89f5fa810ffa_5d61bf4aad30d3f37e359e4c_honda.png"/></li><li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/63fd3156aa092d466454eb94_62d62b5e70c0a909ab8e5428_image001%20(dcb619b2-604e-4fbf-ace4-3e557794a084)-p-1080.png"/></li><li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/6400eaf45d22611e8db45072_61db943262249360a50d9190_585990234f6ae202fedf28cf.png"/></li><li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/60a434a74fd6a327568ca889_politix.png"/></li><li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/5d9a5fd58997ee905ebb6cff_5d9a5be78997ee509dbb4f74_5d8a9c0559c446ed8cffe0ea_mazda-p-500.png"/></li><li><img src="https://assets.website-files.com/5d601dfc38c00e564ab01f4d/64075c1677668a179c693a93_wonder-pies.png"/></li></ul> </div></div><div class='odg-exit-closeright-contaier'><div class='odg-exit-closeright odg-exit-close'></div></div></div></div></div>`);
    function DialogTrigger(callback, options) {
    // Becomes this.options
    const defaults = {
        trigger: 'timeout',
        target: '',
        timeout: 0,
        percentDown: 50, // Used for 'percent' to define a down scroll threshold of significance (based on page height)
        percentUp: 10, // Used for 'percent' to define a threshold of upward scroll after down threshold is reached
        scrollInterval: 1000 // Frequency (in ms) to check for scroll changes (to avoid bogging the UI)
    }

    this.complete = false; // Let's us know if the popup has been triggered

    this.callback = callback;
    this.timer = null;
    this.interval = null;


    this.options = extend(defaults, options);

    function extend(defaults, options) {
        for (var key in options)
            if (options.hasOwnProperty(key))
                defaults[key] = options[key];
        return defaults;
    }


    this.init = function() {
        if (this.options.trigger == 'exitIntent' || this.options.trigger == 'exit_intent') {
            var parentThis = this;



            function addEvent(obj, evt, fn) {
                if (obj.addEventListener) {
                    obj.addEventListener(evt, fn, false);
                } else if (obj.attachEvent) {
                    obj.attachEvent("on" + evt, fn);
                }
            }
            addEvent(document, 'mouseout', function(e) {
                //console.log(e.clientX + ',' + e.clientY); // IE returns negative values on all sides

                if (!parentThis.complete && e.clientY < 0) { // Check if the cursor went above the top of the browser window
                    parentThis.callback();
                    parentThis.complete = true;
                    //jQuery(document).off('mouseout');
                    Element.prototype.on = function(name, callback) {
                        this.addEventListener(name, callback, false);
                    };

                }
            });

        } else if (this.options.trigger == 'target') {
            if (this.options.target !== '') {
                // Make sure the target exists
                if (document.querySelector(this.options.target).length == 0) {
                    this.complete = true;
                } else {
                    var targetScroll = document.querySelector(this.options.target).offset().top;

                    var parentThis = this;

                    // Only check the scroll position every few seconds, to avoid bogging the UI
                    this.interval = setInterval(function() {
                        if (document.querySelector(window).scrollTop() >= targetScroll) {
                            clearInterval(parentThis.interval);
                            parentThis.interval = null;

                            if (!parentThis.complete) {
                                parentThis.callback();
                                parentThis.complete = true;
                            }
                        }
                    }, this.options.scrollInterval);
                }
            }

        } else if (this.options.trigger == 'scrollDown') {
            // Let the user scroll down by some significant amount
            var scrollStart = window.scrollY;

            var body = document.body,
                html = document.documentElement;

            var pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);


            var parentThis = this;

            if (pageHeight > 0) {
                // Only check the scroll position every few seconds, to avoid bogging the UI
                this.interval = setInterval(function() {
                    var scrollAmount = window.scrollY; - scrollStart;
                    if (scrollAmount < 0) {
                        scrollAmount = 0;
                        scrollStart = window.scrollY;
                    }
                    var downScrollPercent = parseFloat(scrollAmount) / parseFloat(pageHeight);

                    if (downScrollPercent > parseFloat(parentThis.options.percentDown) / 100) {
                        clearInterval(parentThis.interval);
                        parentThis.interval = null;

                        if (!parentThis.complete) {
                            parentThis.callback();
                            parentThis.complete = true;
                        }
                    }

                }, this.options.scrollInterval);
            }

        } else if (this.options.trigger == 'scrollUp') {
            // Let the user scroll down by some significant amount
            var scrollStart = window.scrollY;
            var body = document.body,
                html = document.documentElement;

            var pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);



            var parentThis = this;

            if (pageHeight > 0) {
                // Only check the scroll position every few seconds, to avoid bogging the UI
                this.interval = setInterval(function() {
                    var scrollAmount = scrollStart - window.scrollY;
                    if (scrollAmount < 0) {
                        scrollAmount = 0;
                        scrollStart = window.scrollY;
                    }
                    var upScrollPercent = parseFloat(scrollAmount) / parseFloat(pageHeight);

                    if (upScrollPercent > parseFloat(parentThis.options.percentUp) / 100) {
                        clearInterval(parentThis.interval);
                        parentThis.interval = null;

                        if (!parentThis.complete) {
                            parentThis.callback();
                            parentThis.complete = true;
                        }
                    }

                }, this.options.scrollInterval);
            }

        } else if (this.options.trigger == 'timeout') {
            this.timer = setTimeout(this.callback, this.options.timeout);
        }

    };

    this.cancel = function() {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }

        this.complete = true;
    }

    this.init();
}


function testPopup() {

    /**** SET COKIE STARTS HERE***/
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var counter = getCookie("CookieVar");
        console.log(counter);

        if (counter == "1") {
            setCookie("CookieVar", "2", 1);
            console.log("counter2");


        }
        if (counter == "") {
            console.log(counter);

            document.querySelector('.odg-exit-lightbox').style.display = 'flex';


            setCookie("CookieVar", "1", 1);

        }
    }

    checkCookie();


    /**** SET COKIE ENDS HERE***/




}

if (document.body.clientWidth < 800) {
    // Triggers can also be chained for a sequence of behaviors (such as scroll down by 50%, then up by 10%)
    var dtPercentDown = new DialogTrigger(function() {
        var dtPercentUp = new DialogTrigger(testPopup, {
            trigger: 'scrollUp',
            percentUp: 5
        });
    }, {
        trigger: 'scrollDown',
        percentDown: 10
    })
};

if (document.body.clientWidth > 800) {
    // A trigger based on "exit intent" when the cursor is detected to go above the top of the browser window (useful in desktop scenarios)
    var dtExit = new DialogTrigger(testPopup, {
        trigger: 'exitIntent'
    })
};

// Closing the Popup Box


document.querySelector('.odg-exit-close').onclick = function(e) {
    document.querySelector('.odg-exit-lightbox').style.display = 'none';

};

document.querySelector('.odg-exit-CTA').onclick = function(e) {
    document.querySelector('.odg-exit-lightbox').style.display = 'none';

};
  }
  
