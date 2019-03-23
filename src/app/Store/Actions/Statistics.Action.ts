import { Action } from '@ngrx/store';
import { AnimalStat, CameraStats } from '../model';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum StatsActionTypes {
    updateLabel = '[Stats] updateLabel',
    addCameraStat = '[Stats] addCameraStat',
    updateAnimalsStats = '[Stats] updateAnimalsStats'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class updateLabel implements Action {
    readonly type = StatsActionTypes.updateLabel;

    constructor(public payload: any[]) { }
}

export class addCameraStat implements Action {
    readonly type = StatsActionTypes.addCameraStat;

    constructor(public payload: CameraStats) { }
}
export class updateAnimalsStats implements Action {
    readonly type = StatsActionTypes.updateAnimalsStats;

    constructor(public payload: number[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type StatsActions
                        = updateLabel
                        | addCameraStat
                        | updateAnimalsStats;
                        