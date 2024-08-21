import express from 'express';

const app = express();
const port = 3000;

const createApp = () => {
  app.get('/', (req: any, res: any) => {
    res.send('Hello world!');
  })

  app.listen(port, () => {
    console.log('server listening on port ' + port)
  });  
};

export { app };
export default createApp;