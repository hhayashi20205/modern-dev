const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');

// CORS設定
app.use(cors({
  origin: 'http://localhost:3000', // フロントエンドのURL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // 許可するHTTPメソッド
  credentials: true // クッキーなどの認証情報を許可する場合
}));

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})