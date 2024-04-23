import { HttpStatusCode } from "@angular/common/http"

export interface ResponseMessage<T>{
    Code:HttpStatusCode,
    Message:String
    data:T
}