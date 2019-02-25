
import * as express from "express";
import * as bodyparser from "body-parser";

import { Router } from './routes/router';



class App {

  public app: express.Application;
  public router: Router = new Router();

  

  constructor() {
    this.app = express();
    this.config();
    this.router.generateRoutes( this.app );
  }// Constructor



  /**
   * @method
   * @private
   * @description
   */
  private config(): void {
    
    // Support application/json type post data
    this.app.use(bodyparser.json());

    // Support application/x-www-form-urlencoded post data
    this.app.use(bodyparser.urlencoded({extended: false}));

  }// Config



}// App


export default new App().app;