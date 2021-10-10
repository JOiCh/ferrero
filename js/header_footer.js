const header = Vue.component("the-header", {
    template: `
        <div>
            <img src="./imgs/x2/header.png" class="fullHeader">
            <img src="./imgs/pop_header.png" class="narrowHeader">
        </div>
    `,
})

const footer = Vue.component("the-footer", {
    template: `
        <div>
           <p>活動期間：2021/12/1-2022/2/15</p>
           <p>*此抽獎條款及細節約束</p>
           <p>*不接受所有雲端發票(有隨機碼的雲端發票亦不接受)</p>
           <p>*必須保留紙本電子發票的證明聯及交易明細聯</p>
        </div>
    `,
})