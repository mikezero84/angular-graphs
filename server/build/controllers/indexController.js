"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestPromise = __importStar(require("request-promise"));
class IndexController {
    index(req, res) {
        res.send('Hello');
    }
    getCoinMarketData(req, res) {
        const options = {
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': 'f4cc0512-3877-4dce-95c2-ab930d764e4b'
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
exports.indexController = new IndexController();
