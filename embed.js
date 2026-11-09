/* SiteRefresh instant-price quoter. Paste where the quoter should appear on your website:
   <script src="https://mllewellyn1992.github.io/siterefresh-demos/embed.js" data-business="your-business" async></script>
   It adds a frame showing the quoter, sized to fit (no scrollbars).
   Optional: data-jobs="lawn,wash" starts with those jobs; data-hide-jobs="1" hides the quoter's own job buttons, for a site
   whose own tick boxes choose the jobs: call window.siteRefreshQuoter.setJobs(['lawn','hedge']) when they change. */
(function(){
 var s=document.currentScript||[].slice.call(document.querySelectorAll('script[data-business]')).pop();
 if(!s||s.getAttribute('data-sr-done'))return;s.setAttribute('data-sr-done','1');
 var slug=s.getAttribute('data-business'),base=new URL('.',s.src).href,src=base+encodeURIComponent(slug)+'/widget.html',
  jobs=s.getAttribute('data-jobs'),hide=s.getAttribute('data-hide-jobs');
 if(jobs!==null||hide)src+='?'+(jobs!==null?'jobs='+encodeURIComponent(jobs):'')+(hide?'&nojobs=1':'');
 var f=document.createElement('iframe');f.src=src;f.title='Instant price';f.loading='lazy';
 f.style.cssText='display:block;width:100%;max-width:100%;border:0;height:900px;overflow:hidden;background:transparent';
 f.setAttribute('scrolling','no');f.setAttribute('allow','clipboard-write; fullscreen');f.setAttribute('allowfullscreen','');
 s.parentNode.insertBefore(f,s.nextSibling);
 var origin=new URL(src).origin;
 window.addEventListener('message',function(e){
  if(e.origin!==origin||e.source!==f.contentWindow||!e.data||!e.data.srQuoter)return;
  var h=+e.data.height;if(h>200&&h<6000)f.style.height=h+'px';
 });
 var pending=null;f.addEventListener('load',function(){if(pending)f.contentWindow.postMessage({srJobs:pending},origin);});
 window.siteRefreshQuoter={frame:f,setJobs:function(ids){pending=ids;if(f.contentWindow)f.contentWindow.postMessage({srJobs:ids},origin);}};
})();
