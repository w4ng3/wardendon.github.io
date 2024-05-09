import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "文笏", icon: "article", link: "/literary/" },
  { text: "软件指北", icon: "creative", link: "/guide/" },
  {
    text: "代码笔记",
    icon: "edit",
    prefix: "/code/",
    children: [
      { text: "Vue.js", icon: "vue", link: "vue/异步组件" },
      { text: "JavaScript", icon: "javascript", link: "js/" },
      { text: "TypeScript", icon: "typescript", link: "ts/" },
      { text: "Node.js", icon: "nodeJS", link: "nodejs/" },
      { text: "Flutter", icon: "dart", link: "flutter/" },
      { text: "踩坑记录", icon: "javascript", link: "hole/" },
    ],
  },
]);
