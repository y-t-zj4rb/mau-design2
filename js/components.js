Vue.component('navi', {
    template: `
        <div class="nav-wrapper">
            <div class="logo"><a href="./"><img src="img/wheat.png">F.F.C</a></div>
            <ul class="g-nav">
                <li><a href="./">Home</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="works.html">Works</a></li>
            </ul>
        </div>
    `
  })
  Vue.component('foot', {
    template: `
        <div class="foot-wrapper">
            <div class="logo"><a href="./"><img src="img/wheat.png">F.F.C</a></div>
            <ul class="foot-nav">
                <li><a href="./">Home</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="works.html">Works</a></li>
            </ul>
            <div class="copyright">2020&copy;FictiousFoodsCompany</div>
        </div>
    `
  })