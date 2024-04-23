import { HttpStatusCode } from "@angular/common/http";

export interface TokenModel{
    status : HttpStatusCode,
    message : String,
    token : String
}