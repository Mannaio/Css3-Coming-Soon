/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */var ModalEffects=function(){function e(){var e=document.querySelector(".md-overlay");[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(t,n){function s(e){classie.remove(r,"md-show");e&&classie.remove(document.documentElement,"md-perspective")}function o(){s(classie.has(t,"md-setperspective"))}var r=document.querySelector("#"+t.getAttribute("data-modal")),i=r.querySelector(".md-close");t.addEventListener("click",function(n){classie.add(r,"md-show");e.removeEventListener("click",o);e.addEventListener("click",o);classie.has(t,"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)});i.addEventListener("click",function(e){e.stopPropagation();o()})})}e()}();