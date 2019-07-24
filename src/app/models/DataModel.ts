import { CoinInfo } from "./CoinInfoModel"
import { Display } from './DisplayModel'
import { Raw } from './RawModel'

export interface Data {  
    CoinInfo: {[key: string]: CoinInfo};
    RAW: {[key: string]: Raw}
    DISPLAY: {[key: string]: Display};
    Data?
    
}




