export interface detection {
    id: number,
    timestamp: Date,
    class: string,
    confidence: number,
    camera: string,
    imageURL: string,
    seen:boolean,
    square: any[]
    moduleId?: null
}

userId: 1
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