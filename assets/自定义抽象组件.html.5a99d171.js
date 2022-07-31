import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as k,c as r,b as a,w as o,a as n,e as d,d as s}from"./app.14f72578.js";const m={},v=d(`<p>\u8BF8\u5982 <code>&lt;keep-alive&gt;</code>\u3001<code>&lt;transition&gt;</code>\u3001<code>&lt;transition-group&gt;</code> \u548C <code>&lt;teleport&gt;</code> \u7B49\u7EC4\u4EF6\u662FVue\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u79F0\u4E3A\u62BD\u8C61\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u7684\u5B9E\u73B0\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</p><blockquote><p>Vue \u7684\u6587\u6863\u6CA1\u6709\u63D0\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u5728\u62BD\u8C61\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9\u5305\u88F9\u7684\u5B50\u7EC4\u4EF6\u76D1\u542C\u7684\u4E8B\u4EF6\u8FDB\u884C\u62E6\u622A\uFF0C\u4E5F\u53EF\u4EE5\u5BF9\u5B50\u7EC4\u4EF6\u8FDB\u884C Dom \u64CD\u4F5C\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5BF9\u6211\u4EEC\u9700\u8981\u7684\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u4E0D\u9700\u8981\u5173\u5FC3\u5B50\u7EC4\u4EF6\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p></blockquote><h2 id="\u5B9E\u73B0\u4E00\u4E2A-debounce-\u7EC4\u4EF6-\u5BF9\u5B50\u7EC4\u4EF6\u7684-click-\u4E8B\u4EF6\u8FDB\u884C\u62E6\u622A" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A-debounce-\u7EC4\u4EF6-\u5BF9\u5B50\u7EC4\u4EF6\u7684-click-\u4E8B\u4EF6\u8FDB\u884C\u62E6\u622A" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A debounce \u7EC4\u4EF6\uFF0C\u5BF9\u5B50\u7EC4\u4EF6\u7684 click \u4E8B\u4EF6\u8FDB\u884C\u62E6\u622A</h2><p>\u9632\u6296\u4F9D\u9760 lodash.js \u7684debounce\uFF08\u9632\u6296\u52A8\uFF09\u51FD\u6570\u6765\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ pnpm add --save lodash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8282\u6D41: n \u79D2\u5185\u53EA\u8FD0\u884C\u4E00\u6B21\uFF0C\u82E5\u5728 n \u79D2\u5185\u91CD\u590D\u89E6\u53D1\uFF0C\u53EA\u6709\u4E00\u6B21\u751F\u6548<br> \u9632\u6296: n \u79D2\u540E\u5728\u6267\u884C\u8BE5\u4E8B\u4EF6\uFF0C\u82E5\u5728 n \u79D2\u5185\u88AB\u91CD\u590D\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6</p></div><p>\u63A5\u4E0B\u6765\u662F\u5C06\u5B83\u5C01\u88C5\u4E3A\u4E00\u4E2A\u62BD\u8C61\u7EC4\u4EF6</p>`,7),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" get"),n("span",{class:"token punctuation"},","),s(" debounce"),n("span",{class:"token punctuation"},","),s(" set "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"lodash"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"debounce"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"abstract"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u6807\u8BB0\u4E3A\u62BD\u8C61\u7EC4\u4EF6"),s(`

  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" vnode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$slots"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"default"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u5B50\u7EC4\u4EF6\u7684vnode"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u5B50\u7EC4\u4EF6\u7684vnode"'),n("span",{class:"token punctuation"},","),s(" vnode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("vnode"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" event "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("vnode"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"props.onClick"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u7684click\u4E8B\u4EF6"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"event"'),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"typeof"),s(" event "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'"function"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("vnode"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"props.onClick"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" vnode"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-vue ext-vue line-numbers-mode"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49\u62BD\u8C61\u7EC4\u4EF6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("debounce")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NButton")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("++count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u9632\u6296\u8BA1\u6570: {{ count }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("NButton")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("debounce")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("hr")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NButton")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("error"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("++count"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u666E\u901A\u8BA1\u6570: {{ count }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("NButton")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" debounce "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../components/debounce'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("p",null,[n("img",{src:"https://oss.w2gd.top/blog/debounce.gif",alt:"\u9632\u6296",loading:"lazy"}),s(" \u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u88AB\u9632\u6296\u7EC4\u4EF6\u5305\u88F9\u7684\u8282\u70B9\uFF0C\u65E0\u8BBA\u8FDE\u7EED\u70B9\u51FB\u591A\u5C11\u6B21\uFF0C\u90FD\u53EA\u5728\u7ED3\u675F\u70B9\u51FB\u7684\u4E00\u79D2\u540E\u89E6\u53D1\u4E00\u6B21 "),n("img",{src:"https://oss.w2gd.top/blog/20220731175122.png",alt:"\u5B50\u7EC4\u4EF6\u7684vnode",width:"400",height:"341"})],-1),_=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),f={href:"https://juejin.cn/post/6844903838470635528",target:"_blank",rel:"noopener noreferrer"},y=s("\u7528 Vue \u7F16\u5199\u62BD\u8C61\u7EC4\u4EF6"),E={href:"https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E9%9D%A2%E8%AF%95%E5%AE%98-%E4%BB%80%E4%B9%88%E6%98%AF%E9%98%B2%E6%8A%96%E5%92%8C%E8%8A%82%E6%B5%81-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},w=s("\u4EC0\u4E48\u662F\u9632\u6296\u548C\u8282\u6D41\uFF1F");function B(x,A){const c=e("CodeTabs"),t=e("ExternalLinkIcon");return k(),r("div",null,[v,a(c,{data:[{title:"debounce.js"},{title:"Abstract.vue"}],"tab-id":"language"},{tab0:o(({title:p,value:l,isActive:u})=>[g]),tab1:o(({title:p,value:l,isActive:u})=>[b]),_:1},8,["data"]),h,_,n("ul",null,[n("li",null,[n("a",f,[y,a(t)])]),n("li",null,[n("a",E,[w,a(t)])])])])}var N=i(m,[["render",B],["__file","\u81EA\u5B9A\u4E49\u62BD\u8C61\u7EC4\u4EF6.html.vue"]]);export{N as default};
