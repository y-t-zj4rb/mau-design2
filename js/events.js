var vm = new Vue({
  el: '#app',
  components: {
    Hooper: window.Hooper.Hooper,
    Slide: window.Hooper.Slide,
  },
  data: {
    year:'',
    month:'',
    year2:'',
    month2:'',
    isActive: '',
    src: null,
    isShow: false,
    sort: {
      key: 'close',
      isAsc: true
    },
    items:[],
  },
  
mounted () {
  axios
    .get('https://airevent-portal.microcms.io/api/v1/test?limit=100&orders=-publishedAt',{
      headers: {"X-API-KEY": "28a68804-33dd-4786-8488-dbedcd89272a"}
    })
    .then(response => (this.items = response.data.contents))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
},
computed:{
    result: function () {
        // sort()は元の配列の中身もソートされてしまうため、slice()で配列のコピーを作成してからソート
        let list = this.items.slice();
        const now=new Date()
        const formatNow=now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()
        const yearMonth=this.year+'/'+this.month
        const filterDate=new Date(yearMonth)
        const formatDate=filterDate.getFullYear()+'/'+(filterDate.getMonth()+1)
        //-----
        list = list.filter(item => {
          // 今日と募集日を比較=>募集中を表示
          const closeDate=new Date(item.close)
          const formatCloseDate=closeDate.getFullYear()+'/'+(closeDate.getMonth()+1)+'/'+closeDate.getDate()
          if (formatNow < formatCloseDate) {
            return true;
          }
          return false;
        })
        // 日程選択
        if (this.year > 0 && this.month > 0) {
            list = list.filter(item => {
            const closeDate=new Date(item.close)
            const formatCloseDate=closeDate.getFullYear()+'/'+(closeDate.getMonth()+1)
            // console.log(formatCloseDate)
            if (formatDate == formatCloseDate){
                return true;
            }
            return false;
            })
        }
        return list;
    },
    past: function () {
      // sort()は元の配列の中身もソートされてしまうため、slice()で配列のコピーを作成してからソート
      let list = this.items.slice();
      const now=new Date()
      const formatNow=now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate()
      const yearMonth=this.year2+'/'+this.month2
      const filterDate=new Date(yearMonth)
      const formatDate=filterDate.getFullYear()+'/'+(filterDate.getMonth()+1)
      //-----
      list = list.filter(item => {
        // 今日と募集日を比較=>募集終了済みを表示
        const closeDate=new Date(item.close)
        const formatCloseDate=closeDate.getFullYear()+'/'+(closeDate.getMonth()+1)+'/'+closeDate.getDate()
        if (formatNow > formatCloseDate) {
          return true;
        }
        return false;
      })
      // 日程選択
      if (this.year2 > 0 && this.month2 > 0) {
          list = list.filter(item => {
          const closeDate=new Date(item.close)
          const formatCloseDate=closeDate.getFullYear()+'/'+(closeDate.getMonth()+1)
          if (formatDate == formatCloseDate){
              return true;
          }
          return false;
          })
      }
      return list;
  }
},
  methods: {
    sortBy: function (key) {
      // ソート順をセット
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : true;
      // ソートキーをセット
      this.sort.key = key;
    },
    sortClass: function (key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}` : '';
    },
    //テキストボックス値削除
    removetext: function() {
      this.year='',
      this.month=''
    },
    removetext2: function() {
      this.year2='',
      this.month2=''
    },
    zoom: function (event) {
      this.src = event.currentTarget.getAttribute('href');
      this.isShow = true;
    },
    close: function () {
      this.isShow = false;
    },
    afterLeave: function () {
      this.src = null;
    }
  },
});