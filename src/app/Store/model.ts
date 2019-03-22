export interface detection {
    iD: number,
    timestamp: Date,
    class: string,
    accuracy: number,
    camera: string,
    imageURL: string,
    square: any[]
}
export interface CameraStats {
    data: number[],
    label: string
}
export interface BarChartOptions {
    scaleShowVerticalLines: boolean,
    responsive: boolean
};
export interface AnimalStat {
    name: string,
    views: number
};
export interface User{
    id:number,
    username:string,
    password:string
}