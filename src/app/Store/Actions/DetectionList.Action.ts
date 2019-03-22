import { detection } from '../model';
import { Action } from '@ngrx/store';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum DetectionActionTypes {
    All = '[Detection] All',
    Notification = '[Detection] Notification',
    Add = '[Detection] Add',
    MarkSeen = '[Detection] MarkSeen'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */

export class Add implements Add {
    readonly type = DetectionActionTypes.Add;

    constructor(public payload: detection) { }
}

export class All implements Action {
    readonly type = DetectionActionTypes.All;

    constructor(public payload: detection[]) { }
}

export class Notification implements Action {
    readonly type = DetectionActionTypes.Notification;

    constructor(public payload: detection) { }
}

export class MarkSeen implements Action {
    readonly type = DetectionActionTypes.MarkSeen;

    constructor(public payload: number) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DetectionActions
                        = All
                        | Add
                        | MarkSeen
                        | Notification;
