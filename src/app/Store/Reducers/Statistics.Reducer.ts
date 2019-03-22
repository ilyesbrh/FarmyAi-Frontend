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
    barChartLabels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    barChartData : [{data: [28, 48, 40, 19, 86, 27, 90], label: 'position A'},{data: [28, 48, 40, 19, 86, 27, 90], label: 'position B'}],
    barChartType: 'line',
    barChartLegend: true
};

export function reducer(state = initialState, action: StatsActions): State {
    switch (action.type) {
        case StatsActionTypes.addCameraStat: {
            
        }
        case StatsActionTypes.updateAnimalsStats: {
            
        }
        case StatsActionTypes.updateLabel: {
            
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
