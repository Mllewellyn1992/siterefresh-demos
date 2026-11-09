/* SiteRefresh instant-price quoter. Paste where the quoter should appear on your website:
   <script src="https://mllewellyn1992.github.io/siterefresh-demos/embed.js" data-business="your-business" async></script>
   It adds a frame showing the quoter, sized to fit (no scrollbars). */
(function(){
 var s=document.currentScript||[].slice.call(document.querySelectorAll('script[data-business]')).pop();
 if(!s||s.getAttribute('data-sr-done'))return;s.setAttribute('data-sr-done','1');
 var slug=s.getAttribute('data-business'),base=new URL('.',s.src).href,src=base+encodeURIComponent(slug)+'/widget.html';
 var f=document.createElement('iframe');f.src=src;f.title='Instant price';f.loading='lazy';
 f.style.cssText='display:block;width:100%;max-width:100%;border:0;height:900px;overflow:hidden;background:transparent';
 f.setAttribute('scrolling','no');f.setAttribute('allow','clipboard-write');
 s.parentNode.insertBefore(f,s.nextSibling);
 var origin=new URL(src).origin;
 window.addEventListener('message',function(e){
  if(e.origin!==origin||e.source!==f.contentWindow||!e.data||!e.data.srQuoter)return;
  var h=+e.data.height;if(h>200&&h<6000)f.style.height=h+'px';
 });
})();
