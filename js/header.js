var app1 = new Vue({
  el: '#header',
  data: {
    items:[],
    message:'ありがとう',
  },
  
mounted () {
  axios
    .get('https://y-t-zj4rb.microcms.io/api/v1/information',{
      headers: {"X-API-KEY": "da755a34-ebf7-4727-aaec-3484d7bb1f1f"}
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
        return list;
    },
},
});