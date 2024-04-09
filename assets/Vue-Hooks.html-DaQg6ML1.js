import{g as r,h as g,i as b,r as k,o as f,c as _,d as n,t as d,u as m,b as a,w as p,e as s,f as v}from"./app-r9bIGRu-.js";import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";const x=()=>{const c=r(-1),e=r(-1),o=l=>{c.value=l.pageX,e.value=l.pageY};return g(()=>{document.addEventListener("click",o)}),b(()=>{document.removeEventListener("click",o)}),{x:c,y:e}},w=v('<div class="hint-container info"><p class="hint-container-title">hook(钩子 🪝)</p><p>hook 本质上是一个函数，是一种编程机制<br> 作用是将 setup 函数中使用的<code>Composition API</code>(ref、reactive、computed、watch、生命周期)进行了封装，提供了一种更明确的方式来组织代码，使得代码能重用，更重要的是，它允许不同的逻辑部分进行通信、协同工作。</p></div><h2 id="一般使用" tabindex="-1"><a class="header-anchor" href="#一般使用" aria-hidden="true">#</a> 一般使用</h2><ul><li>将可复用功能抽离为外部 js 文件</li><li>函数名文件名以<code>use</code>开头，形如 useXXX</li><li>引用时，在 setup 中解构出自定义 hooks 的变量和方法，如: <code>const { name } = useXXX()</code></li></ul><h2 id="hook-的意义" tabindex="-1"><a class="header-anchor" href="#hook-的意义" aria-hidden="true">#</a> Hook 的意义</h2><ul><li>提取重复逻辑，优化代码结构</li><li>代替 Mixin</li><li>体现编程思想</li></ul><h2 id="demo-自定义-hook-函数" tabindex="-1"><a class="header-anchor" href="#demo-自定义-hook-函数" aria-hidden="true">#</a> Demo 自定义 hook 函数</h2><h3 id="收集用户鼠标点击的页面坐标" tabindex="-1"><a class="header-anchor" href="#收集用户鼠标点击的页面坐标" aria-hidden="true">#</a> 收集用户鼠标点击的页面坐标</h3>',7),V={style:{color:"pink"}},M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// hooks/useMousePosition.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" onUnmounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 初始化坐标数据"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// 用于收集点击事件坐标的函数"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updatePosition"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"e"),n("span",{class:"token operator"},":"),s(" MouseEvent")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    x`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("pageX"),n("span",{class:"token punctuation"},";"),s(`
    y`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("pageY"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// 挂载后绑定点击监听"),s(`
  `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(" updatePosition"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},"// 卸载前解绑点击监听"),s(`
  `),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(" updatePosition"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" x"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Vue logo"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("../assets/logo.png"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h2")]),n("span",{class:"token punctuation"},">")]),s("x: {{ x }}, y: {{ y }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h2")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(" useMousePosition "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@/hooks/useMousePosition"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" x"),n("span",{class:"token punctuation"},","),s(" y "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useMousePosition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h3",{id:"demo-逻辑关注点分离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo-逻辑关注点分离","aria-hidden":"true"},"#"),s(" Demo 逻辑关注点分离")],-1),E=n("blockquote",null,[n("p",null,"Compostion API 最核心要解决的问题并不是逻辑复用，而是==逻辑关注点分离==。因为应用生命周期 60%时间都是在维护的，而维护性体现在代码是否符合单一职责原则，单一职责就是把相同的业务代码内聚到一个地方。"),n("p",null,"所以你不要过于纠结代码是否需要复用，应用适当的冗余反而增加应用的维护性，《架构整洁之道》书中提到：对于大多数应用，可维护性比可重用性更加重要。")],-1),j={href:"https://w2gd.top/code/ts/vue+ts%E5%AE%9E%E7%8E%B0TodoList.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"todoAction.ts",-1),X=n("h2",{id:"vueuse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vueuse","aria-hidden":"true"},"#"),s(" VueUse")],-1),A={href:"https://vueuse.org/guide/",target:"_blank",rel:"noopener noreferrer"},C=v(`<p>这里也是使用了一个<code>VueUse</code>中的获取鼠标坐标的 hook: <code>useMouse</code>，并且用<code>useTransition</code>给响应性变量施加过度动画。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vue logo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/logo.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>x: {{ Math.round(pointX) }}, y: {{ Math.round(pointY) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> TransitionPresets<span class="token punctuation">,</span> useTransition<span class="token punctuation">,</span> useMouse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vueuse/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pointX <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> TransitionPresets<span class="token punctuation">.</span>easeInOutCubic<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pointY <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span>y<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> TransitionPresets<span class="token punctuation">.</span>easeInOutCubic<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://riddler.oss-cn-shanghai.aliyuncs.com/blog/vue-use.gif" alt="demo:vue-use.gif" tabindex="0" loading="lazy"><figcaption>demo:vue-use.gif</figcaption></figure><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,4),L={href:"https://zhuanlan.zhihu.com/p/462631261",target:"_blank",rel:"noopener noreferrer"},U={href:"https://juejin.cn/post/7016955285784756255",target:"_blank",rel:"noopener noreferrer"},H={href:"https://qdmana.com/2022/207/202207261252551584.html#1_hooks_5",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.vue-js.com/topic/6114829f120d99003158dad7",target:"_blank",rel:"noopener noreferrer"},Y={__name:"Vue-Hooks.html",setup(c){const{x:e,y:o}=x();return(l,B)=>{const h=k("CodeTabs"),t=k("ExternalLinkIcon");return f(),_("div",null,[w,n("h2",V,"X: "+d(m(e))+" 💚 Y: "+d(m(o)),1),a(h,{id:"53",data:[{id:"useMousePosition.js"},{id:"HomeView.vue"}],"tab-id":"language"},{title0:p(({value:u,isActive:i})=>[s("useMousePosition.js")]),title1:p(({value:u,isActive:i})=>[s("HomeView.vue")]),tab0:p(({value:u,isActive:i})=>[M]),tab1:p(({value:u,isActive:i})=>[P]),_:1},8,["data"]),q,E,n("p",null,[s("可参考另一篇的"),n("a",j,[s("TodoList Demo"),a(t)]),s(",将承载具体的业务逻辑分离到"),T,s("里。")]),X,n("p",null,[s("VueUse 是 vue3 的一个 hook 库，帮我们封装了一些常用的功能。 "),n("a",A,[s("官网指南"),a(t)])]),C,n("ul",null,[n("li",null,[n("a",L,[s("简单理解 VUE3 hook"),a(t)])]),n("li",null,[n("a",U,[s("Vue 3 中的 Hook 特性"),a(t)])]),n("li",null,[n("a",H,[s("Vue3 学习笔记 4 自定义 hooks"),a(t)])]),n("li",null,[n("a",I,[s("VueUse 中的这 5 个函数，也太好用了吧"),a(t)])])])])}}},z=y(Y,[["__file","Vue-Hooks.html.vue"]]);export{z as default};