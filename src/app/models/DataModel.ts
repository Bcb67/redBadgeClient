import { CoinInfo } from "./CoinInfoModel"
import { Display } from './DisplayModel'

export interface Data {  
    CoinInfo: {[key: string]: CoinInfo};
    RAW: any;
    DISPLAY: {[key: string]: Display};
    
}




