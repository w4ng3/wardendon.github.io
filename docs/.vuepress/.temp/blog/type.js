export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-78726316","v-31297eae","v-0f7d1bf2","v-ce9f40b4","v-6ef429c6","v-2c0dae4e","v-190648d0","v-fffb8e28"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0f7d1bf2","v-ce9f40b4","v-6ef429c6","v-2c0dae4e","v-78726316","v-190648d0","v-31297eae"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
