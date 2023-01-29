import app from './index';
import { AppDataSource } from './data-source';

function startServer() {
  AppDataSource.initialize()
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

startServer();
