
import { Request, Response } from 'express';

import Route from './route.interface';



export class MainRoutes implements Route {

  _app: any;

  // EndPoints declarations
  public static MAIN_ENDPOINT: string = '/api';
  public static INFO_ENDPOINT: string = '/info';


  constructor(app: any) {
    this._app = app;
    this._generateEndPoints();
  }// Constructor



  /**
   * @method
   * @private
   * @description
   */
  _generateEndPoints() {


    // MAIN ENDPOINT
    this._app.route( MainRoutes.MAIN_ENDPOINT )
      .get((req: Request, res: Response) => {
        res.status( 200 ).send({
          message: ' GET request succesfull!!!'
        });
      });


    // INFO ENDPOINT
    this._app.route( MainRoutes.INFO_ENDPOINT )
      .get((req: Request, res: Response) => {
        res.status( 200 ).send({
          endpoints: "This is info of api backend with typescript!"
        });
      });// GEt



  }// GenerateEndPoints

}// MainRoutes