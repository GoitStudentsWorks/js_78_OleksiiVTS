!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire480d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire480d=o);var a,i=o("bpxeT"),c=o("1t1Wn"),s=o("8nrFW"),l=o("2TvXO"),d=document.getElementById("hero-random-film"),u=document.getElementById("hero-container"),m="9073999c285844087924fd0e24160fae";function p(){return v.apply(this,arguments)}function v(){return(v=e(i)(e(l).mark((function t(){var n,r,o,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(m),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent.results,a=o.map((function(e){return e.id})),u.classList.add("hero-hide"),e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(1),console.log("Помилка при виконанні запиту до API:",e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function f(){return y.apply(this,arguments)}function y(){return(y=e(i)(e(l).mark((function t(){var n,r,o,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return n=e.sent,r=Math.floor(Math.random()*n.length),a=n[r],e.next=7,g(a);case 7:return o=e.sent,e.next=10,b(a);case 10:return i=e.sent,e.abrupt("return",{filmDetails:o,trailerDetails:i});case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=e(i)(e(l).mark((function t(n){var r,o,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(m),e.prev=1,e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.log("Error occurred while making API request:",e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=e(i)(e(l).mark((function t(n){var r,o,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/videos?api_key=").concat(m),e.prev=1,e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a.results);case 11:e.prev=11,e.t0=e.catch(1),console.log("Error occurred while making API request:",e.t0);case 14:case"end":return e.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",e(i)(e(l).mark((function t(){var n,r,o,a,i,s,u,m;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],(r=localStorage.getItem("libraryFilms"))?n=JSON.parse(r):localStorage.setItem("libraryFilms",JSON.stringify(n)),t.next=5,f();case 5:o=t.sent,a=o.filmDetails,i=o.trailerDetails,s=e(c)(i.filter((function(e){return"Official Trailer"===e.name})),1),u=s[0],"https://www.youtube.com/watch?v=".concat(u.key),v=void 0,y=void 0,g=void 0,h=void 0,b=void 0,v=(p=a).title,y=p.vote_average,g=p.backdrop_path,h=p.overview.split(" "),b=h.slice(0,30).join(" "),h.length>30&&(b+="..."),m='\n    <section class="hero-section">\n    <div class="container hero-container" style="background-image: linear-gradient(\n      86.77deg,\n      #111111 30.38%,\n      rgba(17, 17, 17, 0) 65.61%\n    ), url(https://image.tmdb.org/t/p/original/'.concat(g,');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;">\n        <h1 class="hero-title">').concat(v,'</h1>\n        <div class="hero-rating">\n          <div class="hero-rating__body">\n            <div class="hero-rating__active" style="width: ').concat(10*y.toFixed(1),'%;"></div>\n            <div class="hero-rating__items">\n              <input type="radio" class="hero-rating__item" name="rating" value="1">\n              <input type="radio" class="hero-rating__item" name="rating" value="2">\n              <input type="radio" class="hero-rating__item" name="rating" value="3">\n              <input type="radio" class="hero-rating__item" name="rating" value="4">\n              <input type="radio" class="hero-rating__item" name="rating" value="5">\n            </div>\n          </div>\n        </div>\n        <p class="hero-text">').concat(b,'</p>\n        <div class="hero-homepage-buttons">\n          <button id="watchTrailerButton" class="button-watch-trailer">Watch trailer</button>\n          <button id="moreDetailsButton" class="button-more-details">More Details</button>\n        </div>\n      </div>\n    </section>\n  '),l=m,d.insertAdjacentHTML("afterbegin",l),document.getElementById("watchTrailerButton").addEventListener("click",k),document.getElementById("moreDetailsButton").addEventListener("click",B);case 16:case"end":return t.stop()}var l,p,v,y,g,h,b}),t)}))));var x=document.getElementById("myModal");function k(){x.classList.toggle("m-w-t-is-hidden"),document.addEventListener("keydown",L),window.addEventListener("click",_),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"}function E(){x.classList.toggle("m-w-t-is-hidden"),document.removeEventListener("keydown",L),window.removeEventListener("click",_),J()}function L(e){"Escape"===e.key&&E()}function _(e){e.target===x&&E()}document.getElementById("closeModal").addEventListener("click",E);var S=document.getElementById("moreDetails");function I(e){var t=e.title,n=e.overview,r=e.vote_average,o=e.vote_count,a=(e.release_date,e.popularity),i=e.genres,c=e.poster_path,s="Add to My Library",l=JSON.parse(localStorage.getItem("libraryFilms")),d=!0,u=!1,m=void 0;try{for(var p,v=l[Symbol.iterator]();!(d=(p=v.next()).done);d=!0){p.value.title===t&&(s="Remove from My Library")}}catch(e){u=!0,m=e}finally{try{d||null==v.return||v.return()}finally{if(u)throw m}}return'\n    <div class="more-details-modal">\n      <div class="close-button-box">\n        <button class="more-details-close-button" id="closeDetails" type="button">X\n       </button>\n      </div>\n      <div class="details-wrapper">\n\n      <div class="more-details-img-box">\n        <img width="248px" class="more-detail-img" src="https://image.tmdb.org/t/p/original/'.concat(c,'" alt="').concat(t,'" />\n      </div>\n      \n      <div class="more-details-info">\n        <h2 class="film-title-modal film-title">').concat(t,'</h2>\n\n        <table>\n        <tr>\n          <td class="table-row table-column-name">Vote / Votes:</td>\n          <td ><span class="vote-average">').concat(r.toFixed(1),'</span> /\n          <span class="vote-count">').concat(o,'</span>\n       </td>\n        </tr>\n        <tr>\n          <td class="table-row table-column-name">Popularity:</td>\n          <td>').concat(a.toFixed(1),'</td>\n        </tr>\n        <tr>\n        <td class="table-row table-column-name">Genre:</td>\n        <td >').concat(i.map((function(e){return e.name})).join(", "),'</td>\n      </tr>\n      </table>\n\n               <span class="description-about">About:</span>\n        <span class="more-details-about">').concat(n,'</span>\n\n        <div class="more-details-adml-box">\n        <button id="addToLibraryButton" class="button-rem-me">').concat(s,"</button>\n      </div>\n      </div> \n\n      </div>\n     </div>\n    </div>\n  ")}document.getElementById("closeDetails");function F(e){j(),S.insertAdjacentHTML("afterbegin",e)}function B(){return M.apply(this,arguments)}function M(){return(M=e(i)(e(l).mark((function t(){var n,r,o,i,c,d,u;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",S.classList.toggle("more-details-is-hidden"),document.addEventListener("keydown",N),window.addEventListener("click",A),t.next=7,g(a);case 7:if(n=t.sent,F(I(n)),"dark"!==localStorage.getItem("ui-theme")){t.next=14;break}t.next=38;break;case 14:for(document.querySelector(".more-details-modal").style.backgroundColor="#FFFFFF",document.querySelector(".more-details-modal").style.boxShadow="1px 1px 14px 4px rgba(0, 0, 0, 0.22)",document.querySelector(".more-details-close-button").style.color="#282828",document.querySelector(".film-title").style.color="#111111",document.querySelector(".more-details-about").style.color="#282828",document.querySelector(".description-about").style.color="#111111",r=e(s)(document.getElementsByTagName("td")),o=!0,i=!1,c=void 0,t.prev=22,d=r[Symbol.iterator]();!(o=(u=d.next()).done);o=!0)u.value.style.color="#111111";t.next=30;break;case 26:t.prev=26,t.t0=t.catch(22),i=!0,c=t.t0;case 30:t.prev=30,t.prev=31,o||null==d.return||d.return();case 33:if(t.prev=33,!i){t.next=36;break}throw c;case 36:return t.finish(33);case 37:return t.finish(30);case 38:document.getElementById("closeDetails").addEventListener("click",q),document.getElementById("addToLibraryButton").addEventListener("click",D);case 40:case"end":return t.stop()}}),t,null,[[22,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function D(){return T.apply(this,arguments)}function T(){return(T=e(i)(e(l).mark((function t(){var n,r,o,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector(".button-rem-me"),e.next=3,g(a);case 3:r=e.sent,o=O(),"Add to My Library"===n.textContent?(n.textContent="Remove from My Library",-1===o.findIndex((function(e){return e.title===r.title}))&&(o.push(r),localStorage.setItem("libraryFilms",JSON.stringify(o)))):(n.textContent="Add to My Library",-1!==(i=o.findIndex((function(e){return e.title===r.title})))&&(o.splice(i,1),localStorage.setItem("libraryFilms",JSON.stringify(o))));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function O(){var e=[],t=localStorage.getItem("libraryFilms");return t?e=JSON.parse(t):localStorage.setItem("libraryFilms",JSON.stringify(e)),e}function q(){document.body.style.overflow="",document.documentElement.style.overflow="",J(),S.classList.toggle("more-details-is-hidden"),document.removeEventListener("keydown",N),window.removeEventListener("click",A),j()}function N(e){"Escape"===e.key&&q()}function A(e){e.target===S&&q()}function j(){S.innerHTML=""}function J(){document.body.style.overflow="",document.documentElement.style.overflow=""}}();
//# sourceMappingURL=index.30d3f948.js.map
