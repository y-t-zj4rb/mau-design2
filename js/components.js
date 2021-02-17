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
                <li><a href="health.html">健康</a></li>
                <li><a href="life.html">生活</a></li>
                <li><a href="ready.html">飼う前に</a></li>
            </ul>
        </div>
    `
  })
  Vue.component('side', {
    template: `
        <div class="side-wrapper pc-display">
            <ul class="side-inner">
                <li><a href="./">ホーム</a></li>
                <li><a href="./">お知らせ</a></li>
                <li><a href="./">このサイトについて</a></li>
                <li><a href="./">うちの子について</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="overview.html">ボーダーコリー概要</a></li>
                <li><a href="overview.html">遊び</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="ready.html">飼う前のはなし</a></li>
                <li><a href="ready.html">出会い</a></li>
                <li><a href="ready.html">準備</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="life.html">生活</a></li>
                <li><a href="life.html">遊び</a></li>
                <li><a href="life.html">しつけ</a></li>
            </ul>
            <ul class="side-inner">
                <li><a href="health.html">健康</a></li>
                <li><a href="health.html">怪我・傷</a></li>
                <li><a href="health.html">体調不良</a></li>
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
                <li><a href="./">ホーム</a></li>
                <li><a href="health.html">健康</a></li>
                <li><a href="life.html">生活</a></li>
                <li><a href="ready.html">飼う前に</a></li>
            </ul>
            <div class="copyright">&copy;201089 安田大輝</div>
        </div>
    `
  })