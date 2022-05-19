const http = require('http');


http.createServer((req,res)=>{

res.send(req.url);
});


http.listen(3500, () => {
  console.log('listening...');
});
