import { detection } from './../model';
import { DetectionActions, DetectionActionTypes } from './../Actions/DetectionList.Action';

export interface State {

    detections: detection[],
    Notification: detection,
};

const initialState: State = {
    detections: [
        {
            iD: 123,
            timestamp: new Date(1234564),
            class: "animal",
            accuracy: 26,
            camera: "position 2",
            imageURL: "https://www.elastic.co/assets/blt3541c4519daa9d09/maxresdefault.jpg?uid=blt3541c4519daa9d09",
            square: [1, 2, 3, 4]
        }
    ],
    Notification: null
};

export function reducer(state = initialState, action: DetectionActions): State {
    switch (action.type) {
        case DetectionActionTypes.All: {
            return { detections: action.payload, Notification: null };
        }
        case DetectionActionTypes.Notification: {
            return { detections: state.detections, Notification: action.payload }
        }
        case DetectionActionTypes.Add: {
            return { detections: [...state.detections, action.payload], Notification: null }
        }

        default: {
            return state;
        }
    }
}

export const getDetections = (state: State) => state.detections;
export const getNotification = (state: State) => state.Notification;
