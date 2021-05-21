const express = require('express');
const apiServer = express();
const port = 3333;

apiServer.get('/users', (req, res) => {
  // JSON形式で返却する
  res.json({
    username: 'enjin'
  });
});

// Expressサーバ起動
apiServer.listen(port, () => {
  console.log(`Start API Server at http://localhost:${port}`);
});