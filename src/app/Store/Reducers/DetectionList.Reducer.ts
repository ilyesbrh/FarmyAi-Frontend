import { detection } from './../model';
import { DetectionActions, DetectionActionTypes } from './../Actions/DetectionList.Action';

export interface State {

    detections: detection[],
    Notification: detection,
};

const initialState: State = {
    detections: [
    ],
    Notification: null
};
/* 
{
    id: 123,
    timestamp: new Date(1234564),
    class: "animal",
    confidence: 26,
    camera: "position 2",
    seen:false,
    imageURL: "https://www.elastic.co/assets/blt3541c4519daa9d09/maxresdefault.jpg?uid=blt3541c4519daa9d09",
    square: [1, 2, 3, 4]
} 
*/
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
        case DetectionActionTypes.MarkSeen: {

            state.detections.forEach(element => {
                if(element.id == action.payload ){
                    element.seen = true;
                }
            });
            
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getDetections = (state: State) => state.detections;
export const getUnseen = (state: State) => state.detections.filter(isSeen);
export const getNotification = (state: State) => state.Notification;
function isSeen(element:detection, index, array) { 
   return !element.seen ; 
} 

