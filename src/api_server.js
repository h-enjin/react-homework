const express = require('express');
const apiServer = express();
const port = 3333;

apiServer.get('/users', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )
  
  // JSON形式で返却する
  res.json({
    username: 'enjin'
  });
});

// Expressサーバ起動
apiServer.listen(port, () => {
  console.log(`Start API Server at http://localhost:${port}`);
});