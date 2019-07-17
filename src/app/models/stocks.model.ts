import { coinModel } from "./coinModel.model";
// import { KeyValue } from "@angular/common";

export interface Stocks {
  baseImageUrl: string,
  baseLinkUrl: string,
  data: {[key: string]: coinModel};
  hasWarning: boolean;
  message: string;
  rateLimit: any;
  response: string;
  type: number;
}