import { StatsActionTypes } from './../Actions/Statistics.Action';
import { CameraStats,AnimalStat } from './../model';
import { BarChartOptions } from '../model';
import { StatsActions } from '../Actions/Statistics.Action';

export interface State {

    animals: AnimalStat[],
    barChartOptions: BarChartOptions,
    barChartLabels: any[],
    barChartType: string,
    barChartData: CameraStats[],
    barChartLegend: boolean
};

const initialState: State = {
    animals: [{name:'dog',views:60},{name:'cat',views:30},{name:'rat',views:46},{name:'lion',views:1}],
    barChartOptions: {
        scaleShowVerticalLines: false,
        responsive: true
    },
    barChartLabels: [], // x's
    barChartData : [{data: [20,10,50,5,2,30,20,10,50,5,2,30,20,10,50,5,2,30,20,10,50,5,2,30], label: 'model'}],// Y's
    barChartType: 'line',//type de chart  exmple : bar line etc..
    barChartLegend: true
};

export function reducer(state = initialState, action: StatsActions): State {
    switch (action.type) {
        case StatsActionTypes.addCameraStat: {
            return state;
        }
        case StatsActionTypes.updateAnimalsStats: {
            state.barChartData[0].data = action.payload;
            return state;
        }
        case StatsActionTypes.updateLabel: {
            state.barChartLabels = action.payload;
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getAnimals = (state: State) => state.animals;
export const getBarChartOptions = (state: State) => state.barChartOptions;
export const getBarChartLabels = (state: State) => state.barChartLabels;
export const getBarChartType = (state: State) => state.barChartType;
export const getBarChartData = (state: State) => state.barChartData;
export const getBarChartLegend = (state: State) => state.barChartLegend;
