export interface CustomResponse {
    timeStamp: Date;
    statusCode: number,
    status: string,
    reason: string,
    message: string,
    developerMessage: string,
    data: { tasks?: Task[], task?: Task }; //question marks tell typescript that this info is optional
}