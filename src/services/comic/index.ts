import { api } from "../../api/api"
import { GetComicRequestBody, ComicResponse, BaseResponse } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function GetComic(requestBody: any) : AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_COMIC, requestBody);
}
