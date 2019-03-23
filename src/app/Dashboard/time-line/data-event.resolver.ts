import { Add } from './../../Store/Actions/DetectionList.Action';
import { ApiInterfaceService } from './../../api-interface.service';
import { State } from './../../Store/index';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { detection } from 'src/app/Store/model';
import { Store } from '@ngrx/store';

@Injectable()
export class dataEvent implements Resolve<detection[]> {

    constructor( public api: ApiInterfaceService) {

    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {

        console.log('resolver works');
        let offset = route.paramMap.get("from");
        let limit = route.paramMap.get("to");
        this.api.events(offset,limit);
        return null;
    }
    
}
