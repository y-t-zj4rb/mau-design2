Vue.component('navi', {
    template: `
        <div class="nav-wrapper">
            <div class="logo">
                <a href="./">
                    <img src="img/logo.svg">
                    <span class="pc-display">ボーダーコリー<br>と暮らす</span>
                </a>
            </div>
            <ul class="g-nav">
                <li><a href="./">ホーム</a></li>
                <li><a href="news.html">健康</a></li>
                <li><a href="works.html">生活</a></li>
                <li><a href="works.html">飼う前に</a></li>
            </ul>
        </div>
    `
  })
  Vue.component('side', {
    template: `
        <div class="side-wrapper pc-display">
            <ul class="side-inner">
                <li><a href="news.html">ホーム</a></li>
                <li><a href="works.html">お知らせ</a></li>
                <li><a href="works.html">このサイトについて</a></li>
                <li><a href="works.html">うちの子について</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="news.html">生活</a></li>
                <li><a href="works.html">遊び</a></li>
                <li><a href="works.html">しつけ</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="news.html">健康</a></li>
                <li><a href="works.html">怪我・傷</a></li>
                <li><a href="works.html">体調不良</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="news.html">飼う前のはなし</a></li>
                <li><a href="works.html">遊び</a></li>
                <li><a href="works.html">しつけ</a></li>
            </ul>
        </div>
    `
  })
  Vue.component('foot', {
    template: `
        <div class="foot-wrapper">
            <div class="logo">
                <a href="./">
                    <img src="img/logo.svg">
                    <span class="pc-display">ボーダーコリー<br>と暮らす</span>
                </a>
            </div>
            <ul class="foot-nav">
                <li><a href="./">Home</a></li>
                <li><a href="news.html">Health</a></li>
                <li><a href="works.html">Life</a></li>
            </ul>
            <div class="copyright">2020&copy;FictiousFoodsCompany</div>
        </div>
    `
  })