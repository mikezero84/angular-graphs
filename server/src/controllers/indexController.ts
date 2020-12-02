import { Request, Response } from 'express';
import * as requestPromise from 'request-promise';

class IndexController {
    public index(req: Request, res: Response) {
        res.send('Hello');
    }

    public getCoinMarketData (req: Request, res: Response) {

        const options = {
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY' : 'f4cc0512-3877-4dce-95c2-ab930d764e4b'
            },
            json: true,
            gzip: true
        };

        requestPromise.get(options).then(response => {
            res.json(response);
          }).catch((err) => {
            console.log('API call error:', err.message);
          });

    }
}

export const indexController = new IndexController();