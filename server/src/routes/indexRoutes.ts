import { Router } from 'express';
import { indexController } from '../controllers/indexController';

class IndexRoutes {
    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/api/coinmarketcap', indexController.getCoinMarketData);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;