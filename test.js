// 创建 Vue 实例
new Vue({
  el: "#app",
  data: {
    jsonData: [],
  },
  methods: {
    fetchData() {
      // 使用 Fetch API 发送 POST 请求获取 JSON 数据
      fetch("http://127.0.0.1:18080/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "value" }), // 替换为需要发送的数据
      })
        .then((response) => response.json())
        .then((jsonData) => {
          // 将获取到的 JSON 数据赋值给 Vue 实例的数据属性
          this.jsonData = jsonData;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
});
