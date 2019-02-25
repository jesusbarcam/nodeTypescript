
import { MainRoutes } from "./main";


export class Router {

  public mainRoutes: MainRoutes;


  /**
   * @method
   * @public
   * @param app
   * @description 
   */
  public generateRoutes(app: any): void {
    this.mainRoutes = new MainRoutes( app );
  }// CreateRoutes

}// Routes