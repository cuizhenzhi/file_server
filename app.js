const express = require('express');
const app = express();
const port = 3002; // 服务器端口

// 设置静态文件目录
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`File server running at http://localhost:${port}`);
});
