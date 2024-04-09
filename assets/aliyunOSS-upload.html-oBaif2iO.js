import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,d as n,e as s,b as t,f as l}from"./app-r9bIGRu-.js";const i={},u=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"Web 端常见的上传方法是用户在浏览器或 App 端上传文件到应用服务器，应用服务器再把文件上传到 OSS。这种方式需通过应用服务器中转，传输效率明显低于数据直传至 OSS 的方式。"),n("p",null,"数据直传至 OSS 是利用 OSS 的 PostObject 接口，使用表单上传方式上传文件至 OSS。")],-1),r=n("h2",{id:"demo-vue-项目上传图片到-oss",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo-vue-项目上传图片到-oss","aria-hidden":"true"},"#"),s(" Demo: Vue 项目上传图片到 OSS")],-1),k={href:"https://help.aliyun.com/document_detail/31925.htm?spm=a2c4g.11186623.0.0.4e5f43d3YpqQOt#concept-frd-4gy-5db",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),m={href:"https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1028.70652f08sBl5jq",target:"_blank",rel:"noopener noreferrer"},v=l(`<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><ul><li><p>设置跨域资源共享 在 OSS 的<code>Bucket - 权限管理 - 跨域设置 - 创建规则</code></p><div style="text-align:center;"><img src="https://riddler.oss-cn-shanghai.aliyuncs.com/blog/20220808231525.png" style="height:400px;"></div></li><li><p>安装 SDK 开发包</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add ali-oss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取 AccessKey 打开阿里云 OSS，鼠标移到用户头像处，出现<code>AccessKey管理</code>入口，验证后获取<code>accessKeyId</code>和<code>accessKeySecret</code></li></ul><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><p>我的使用场景是在 vue 项目中结合 Naive-ui 框架的上传组件来实现功能。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NUpload</span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:default-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">multiple</span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">file-list-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>display:none<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NButton</span><span class="token punctuation">&gt;</span></span>修改头像<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NUpload</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgurl<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token constant">OSS</span> <span class="token keyword">from</span> <span class="token string">&quot;ali-oss&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NUpload<span class="token punctuation">,</span> NButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;naive-ui&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> imgurl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>
  <span class="token string">&quot;https://riddler.oss-cn-shanghai.aliyuncs.com/upload/1659968470000.png&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> file <span class="token operator">=</span> options<span class="token punctuation">.</span>fileList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>file<span class="token punctuation">;</span>
  <span class="token comment">// sdk提供的创建客户端实例方法</span>
  <span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OSS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">&quot;oss-cn-shanghai&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 创建Bucket时会选择不同地区，根据自己的选择填入对应名称</span>
    <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> <span class="token string">&quot;***************&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 填入你的accessKeyId</span>
    <span class="token literal-property property">accessKeySecret</span><span class="token operator">:</span> <span class="token string">&quot;***************&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 填入你的accessKeySecret</span>
    <span class="token literal-property property">bucket</span><span class="token operator">:</span> <span class="token string">&quot;****&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 填入你的bucket名</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> Name <span class="token operator">=</span> file<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token keyword">const</span> suffix <span class="token operator">=</span> Name<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>Name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文件后缀</span>
  <span class="token keyword">const</span> filename <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> suffix<span class="token punctuation">;</span> <span class="token comment">// 组成新文件名</span>
  <span class="token comment">// 上传文件到bucket的指定文件夹:【upload】</span>
  client
    <span class="token punctuation">.</span><span class="token function">multipartUpload</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">upload/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> file<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上传成功：&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// ... 你的操作，可以拼接图片url，用于显示等...</span>
      imgurl<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://riddler.oss-cn-shanghai.aliyuncs.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上传失败：&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://riddler.oss-cn-shanghai.aliyuncs.com/blog/1659968721000.gif" alt="上传图片到oss" tabindex="0" loading="lazy"><figcaption>上传图片到oss</figcaption></figure><h3 id="自己封装上传工具" tabindex="-1"><a class="header-anchor" href="#自己封装上传工具" aria-hidden="true">#</a> 自己封装上传工具</h3>`,9),g=n("code",null,"ali-oss",-1),h={href:"https://github.com/wardendon/uploadFileToOSS",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"服务端签名后直传",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务端签名后直传","aria-hidden":"true"},"#"),s(" 服务端签名后直传")],-1),f={href:"https://help.aliyun.com/document_detail/31926.htm?spm=a2c4g.11186623.0.0.1b9e4f77HUmpYT#concept-en4-sjy-5db",target:"_blank",rel:"noopener noreferrer"},_={href:"https://help.aliyun.com/document_detail/100624.htm?spm=a2c4g.11186623.0.0.1b9e344enBNbM0#concept-xzh-nzk-2gb",target:"_blank",rel:"noopener noreferrer"},y=n("blockquote",null,[n("p",null,"还没尝试，代码暂无，待续")],-1),S=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),q={href:"https://help.aliyun.com/document_detail/64041.html?spm=a2c4g.11186623.6.1028.70652f08sBl5jq",target:"_blank",rel:"noopener noreferrer"},x={href:"https://juejin.cn/post/6844903799945953287",target:"_blank",rel:"noopener noreferrer"},w={href:"https://codeantenna.com/a/wuAMIhSFIQ",target:"_blank",rel:"noopener noreferrer"};function O(N,B){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",k,[s("阿里云文档：JavaScript 客户端签名直传"),t(a)]),d,n("a",m,[s("OSS Browser.js SDK 的安装"),t(a)])]),v,n("p",null,[s("也可以不安装"),g,s("，自己封装上传工具,定制 policy。 "),n("a",h,[s("代码仓库"),t(a)])]),b,n("p",null,[s("在客户端通过 JavaScript 代码完成签名，无需过多配置，即可实现直传，非常方便。但是客户端通过 JavaScript 把 AccesssKey ID 和 AccessKey Secret 写在代码里面有泄露的风险，强烈建议使用"),n("a",f,[s("服务端签名后直传"),t(a)]),s("或者"),n("a",_,[s("使用 STS 临时访问凭证访问 OSS"),t(a)])]),y,S,n("ul",null,[n("li",null,[n("a",q,[s("OSS Browser.js SDK 的安装"),t(a)])]),n("li",null,[n("a",x,[s("vue 中图片上传到阿里云 oss 记录"),t(a)])]),n("li",null,[n("a",w,[s("vue 上传图片到 oss / uniapp 上传图片到 oss"),t(a)])])])])}const I=e(i,[["render",O],["__file","aliyunOSS-upload.html.vue"]]);export{I as default};