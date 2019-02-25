
import app from './app';
import Settings from './settings';



app.listen( Settings.LISTEN_PORT, () => {
  console.log("Express server listen on port: ", Settings.LISTEN_PORT );
});// App.listen