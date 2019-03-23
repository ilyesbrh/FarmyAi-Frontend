import * as detection from './Reducers/DetectionList.Reducer';
import * as Stats from './Reducers/Statistics.Reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
export interface State {
  Detection: detection.State,
  Statistics: Stats.State
}

export const reducers: ActionReducerMap<State> = {
  Detection: detection.reducer,
  Statistics: Stats.reducer
};

export const selectDetection = createFeatureSelector<detection.State>('Detection');
export const getDetections = createSelector(selectDetection, detection.getDetections);
export const getUnseen = createSelector(selectDetection, detection.getUnseen);
export const getNotification = createSelector(selectDetection, detection.getNotification);

export const selectStats = createFeatureSelector<Stats.State>('Statistics');
export const getAnimalsStat = createSelector(selectStats, Stats.getAnimals);
export const getData = createSelector(selectStats, Stats.getBarChartData);
export const getLabel = createSelector(selectStats, Stats.getBarChartLabels);
export const getLegend = createSelector(selectStats, Stats.getBarChartLegend);
export const getOptions = createSelector(selectStats, Stats.getBarChartOptions);
export const getType = createSelector(selectStats, Stats.getBarChartType);
