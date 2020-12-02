import { ICryptoCoinModel } from 'app/models/crypto-coin.model';
import { LoaderModel } from 'app/models/loader.model';

export class GetAllCryptoDataAction {
    static readonly type = 'GET_ALL_CRYTO_DATA';
}

export class GetAllCryptoDataSuccessAction {
    static readonly type = 'GET_ALL_CRYTO_SUCCESS';
}

export class ShowLoader {
    static readonly type = 'SHOW_LOADER';
    constructor(public loader: LoaderModel ) { }
}