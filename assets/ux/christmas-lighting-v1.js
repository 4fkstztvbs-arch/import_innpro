(function(){
'use strict';
function placeBridge(){if(!document.body.classList.contains('type-detail'))return;var bridges=document.querySelectorAll('.ps-christmas-bridge'),header=document.querySelector('.p-detail-inner-header');if(!bridges.length||!header)return;var first=bridges[0];header.insertAdjacentElement('afterend',first);for(var i=1;i<bridges.length;i++)bridges[i].remove();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',placeBridge);else placeBridge();
function allowed(){var d=window.dataLayer||[];for(var i=d.length-1;i>=0;i--){if(d[i]&&d[i].cookie_consent)return d[i].cookie_consent.analytics==='granted';}return false;}
function track(name,params){if(!allowed()||typeof window.gtag!=='function')return;window.gtag('event',name,params);}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[data-christmas-link]');if(!a)return;var b=a.closest('.ps-christmas-bridge');track('christmas_navigation',{link_type:a.getAttribute('data-christmas-link'),lighting_group:b?b.getAttribute('data-christmas-group'):a.textContent.trim().slice(0,90),link_url:a.href,transport_type:'beacon'});});
})();
