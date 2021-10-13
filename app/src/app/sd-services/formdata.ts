/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class formdata {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_formdata

  async formdata(formdata: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          formdata: formdata,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_g5iwdPFJ6wWsLCnE(bh);
      //appendnew_next_formdata
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e1bu70dMzDYBRnfn');
    }
  }

  //appendnew_flow_formdata_start

  async sd_g5iwdPFJ6wWsLCnE(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `insertuserdetails/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.formdata,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_XOfG4SxLmSrIyGfw(bh);
      //appendnew_next_sd_g5iwdPFJ6wWsLCnE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g5iwdPFJ6wWsLCnE');
    }
  }

  async sd_XOfG4SxLmSrIyGfw(bh) {
    try {
      this.matSnackBar.open('Submitted the form successfully!', 'Okay', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //appendnew_next_sd_XOfG4SxLmSrIyGfw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XOfG4SxLmSrIyGfw');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_formdata_Catch
}
