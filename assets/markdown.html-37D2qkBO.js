import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as v,c as b,a as r,d as n,e as s,b as a,w as t,f as p}from"./app-r9bIGRu-.js";const _={},g=n("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),f=n("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),q=n("h2",{id:"markdown-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),s(" Markdown 介绍")],-1),y={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"markdown-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),s(" Markdown 配置")],-1),z=n("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),A={class:"hint-container info"},E=n("p",{class:"hint-container-title"},"相关信息",-1),M={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},V=n("h2",{id:"markdown-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),s(" Markdown 扩展")],-1),U={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},j=n("h3",{id:"vuepress-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),s(" VuePress 扩展")],-1),T=n("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),F={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},P=n("h3",{id:"主题扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),s(" 主题扩展")],-1),J={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"vuepress-plugin-md-enhance",-1),L={class:"hint-container tip"},S=n("p",{class:"hint-container-title"},"一键启用",-1),X=n("code",null,"plugins.mdEnhance.enableAll: true",-1),R={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},B=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  theme`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    plugins`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      mdEnhance`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        enableAll`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" hopeTheme "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"vuepress-theme-hope"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"theme"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"hopeTheme"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"mdEnhance"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"enableAll"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=p(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#markdown">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),O={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},K=n("h4",{id:"代码块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),s(" 代码块")],-1),N=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-theme-hope
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),G={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},Y=n("h4",{id:"自定义对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),s(" 自定义对齐")],-1),Q=n("div",{style:{"text-align":"center"}},[n("p",null,"我是居中的")],-1),$=n("div",{style:{"text-align":"right"}},[n("p",null,"我在右对齐")],-1),nn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},sn=n("h4",{id:"上下角标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),s(" 上下角标")],-1),an=n("p",null,[s("19"),n("sup",null,"th"),s(" H"),n("sub",null,"2"),s("O")],-1),en={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},tn=p('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),on={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ln=n("h4",{id:"标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),s(" 标记")],-1),pn=n("p",null,"你可以标记 ==重要的内容== 。",-1),rn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},cn=n("h4",{id:"任务列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),s(" 任务列表")],-1),un=n("li",null,[n("p",null,"[x] 计划 1")],-1),dn=n("li",null,[n("p",null,"[ ] 计划 2")],-1),hn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},kn=n("h3",{id:"图片增强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),s(" 图片增强")],-1),mn=n("p",null,"支持为图片设置颜色模式和大小",-1),vn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},bn=p(`<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4><p>::: chart 一个散点图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),_n={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},gn=p(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts 一个折线图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),fn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},qn=n("h4",{id:"流程图",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),s(" 流程图")],-1),yn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},wn=n("h4",{id:"mermaid",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),s(" Mermaid")],-1),xn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},zn=n("h4",{id:"导入文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),s(" 导入文件")],-1),An=n("p",null,"@include(./README.md{11-17})",-1),En={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("h4",{id:"代码演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),s(" 代码演示")],-1),Vn=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("VuePress Theme Hope"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("very"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("非常"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s("强大!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#very"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"click"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"非常强大"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cn=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" red"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Tn=n("h4",{id:"样式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),s(" 样式化")],-1),Fn=n("p",null,[s("设置它"),n("span",{style:{color:"red"}},"没有"),s("任何效果，请"),n("span",{style:{color:"red"}},"不要"),s("这样使用")],-1),Pn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},Jn=n("h4",{id:"幻灯片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),s(" 幻灯片")],-1),Dn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},Ln=p('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function Sn(Xn,Rn){const e=i("ExternalLinkIcon"),c=i("CodeTabs"),u=i("FlowChart"),d=i("Mermaid"),h=i("CodeDemo"),k=i("RevealJs");return v(),b("div",null,[g,f,r(" more "),q,n("p",null,[s("如果你是一个新手，还不会编写 Markdown，请先阅读 "),n("a",y,[s("Markdown 介绍"),a(e)]),s(" 和 "),n("a",w,[s("Markdown 演示"),a(e)]),s("。")]),x,z,n("div",A,[E,n("p",null,[s("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),n("a",M,[s("Frontmatter 介绍"),a(e)]),s("。")])]),V,n("p",null,[s("VuePress 会使用 "),n("a",U,[s("markdown-it"),a(e)]),s(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),n("a",C,[s("语法扩展"),a(e)]),s(" 。")]),j,T,n("p",null,[s("关于这些扩展，请阅读 "),n("a",F,[s("VuePress 中的 Markdown 扩展"),a(e)]),s("。")]),P,n("p",null,[s("通过 "),n("a",J,[D,a(e)]),s("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),n("div",L,[S,n("p",null,[s("你可以设置在主题选项中设置 "),X,s(" 启用 "),n("a",R,[s("md-enhance"),a(e)]),s(" 插件的所有功能。")]),a(c,{id:"49",data:[{id:"TS"},{id:"JS"}],"tab-id":"language"},{title0:t(({value:o,isActive:l})=>[s("TS")]),title1:t(({value:o,isActive:l})=>[s("JS")]),tab0:t(({value:o,isActive:l})=>[B]),tab1:t(({value:o,isActive:l})=>[H]),_:1})]),I,n("ul",null,[n("li",null,[n("a",O,[s("查看详情"),a(e)])])]),K,a(c,{id:"105",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:t(({value:o,isActive:l})=>[s("pnpm")]),title1:t(({value:o,isActive:l})=>[s("yarn")]),title2:t(({value:o,isActive:l})=>[s("npm")]),tab0:t(({value:o,isActive:l})=>[N]),tab1:t(({value:o,isActive:l})=>[W]),tab2:t(({value:o,isActive:l})=>[Z]),_:1}),n("ul",null,[n("li",null,[n("a",G,[s("查看详情"),a(e)])])]),Y,Q,$,n("ul",null,[n("li",null,[n("a",nn,[s("查看详情"),a(e)])])]),sn,an,n("ul",null,[n("li",null,[n("a",en,[s("查看详情"),a(e)])])]),tn,n("ul",null,[n("li",null,[n("a",on,[s("查看详情"),a(e)])])]),ln,pn,n("ul",null,[n("li",null,[n("a",rn,[s("查看详情"),a(e)])])]),cn,n("ul",null,[un,dn,n("li",null,[n("p",null,[n("a",hn,[s("查看详情"),a(e)])])])]),kn,mn,n("ul",null,[n("li",null,[n("a",vn,[s("查看详情"),a(e)])])]),bn,n("ul",null,[n("li",null,[n("a",_n,[s("查看详情"),a(e)])])]),gn,n("ul",null,[n("li",null,[n("a",fn,[s("查看详情"),a(e)])])]),qn,a(u,{id:"flowchart-252",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),n("ul",null,[n("li",null,[n("a",yn,[s("查看详情"),a(e)])])]),wn,a(d,{id:"mermaid-263",code:"eJxLy8kvT85ILCpRCHHiUgCCZENdXbtEIzC7uDQpvSixIEMhPy8VLJCIJJmal4KqqKQ8HyyQBFKUhEtRRlEqxCywRcmoyoD2KABF4UaBVaOKlOeD+UCNAP9rL9s="}),n("ul",null,[n("li",null,[n("a",xn,[s("查看详情"),a(e)])])]),r(` #### Tex 语法

$$
\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)
= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}
$$

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tex.html) `),zn,An,n("ul",null,[n("li",null,[n("a",En,[s("查看详情"),a(e)])])]),Mn,a(h,{id:"code-demo-288",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:t(()=>[Vn,Un,Cn]),_:1}),n("ul",null,[n("li",null,[n("a",jn,[s("查看详情"),a(e)])])]),Tn,r(" markdownlint-disable MD033 "),Fn,n("ul",null,[n("li",null,[n("a",Pn,[s("查看详情"),a(e)])])]),r(" markdownlint-enable MD033 "),Jn,a(k,{id:"revealjs-318",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),n("ul",null,[n("li",null,[n("a",Dn,[s("查看详情"),a(e)])])]),Ln])}const In=m(_,[["render",Sn],["__file","markdown.html.vue"]]);export{In as default};