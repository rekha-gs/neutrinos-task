let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class userdetailservice {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'userdetailservice';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new userdetailservice(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_userdetailservice_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: userdetailservice');

    //appendnew_flow_userdetailservice_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: userdetailservice');

    if (!this.swaggerDocument['paths']['/insertuserdata']) {
      this.swaggerDocument['paths']['/insertuserdata'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/insertuserdata']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/insertuserdata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_epAguVC5PGNzBXPA(bh);
          //appendnew_next_sd_gzhHgRFOKTdVV1SG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gzhHgRFOKTdVV1SG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_userdetailservice_HttpIn
  }
  //   service flows_userdetailservice

  //appendnew_flow_userdetailservice_start

  async sd_epAguVC5PGNzBXPA(bh) {
    try {
      console.log(bh.input.body);
      bh.local.query =
        'INSERT INTO userdetails(name ,email ,phonenumber, dob, address, pincode,city, state) VALUES (' +
        "'" +
        bh.input.body.name +
        "'" +
        ',' +
        "'" +
        bh.input.body.email +
        "'" +
        ',' +
        "'" +
        bh.input.body.phonenumber +
        "'" +
        ',' +
        "'" +
        bh.input.body.dob +
        "'" +
        ',' +
        "'" +
        bh.input.body.address +
        "'" +
        ',' +
        "'" +
        bh.input.body.pincode +
        "'" +
        ',' +
        "'" +
        bh.input.body.city +
        "'" +
        ',' +
        "'" +
        bh.input.body.state +
        "'" +
        ');';
      bh = await this.sd_VDD8BFVcleIiX75f(bh);
      //appendnew_next_sd_epAguVC5PGNzBXPA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_epAguVC5PGNzBXPA');
    }
  }

  async sd_VDD8BFVcleIiX75f(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_0DFdrBziU26BWJ82'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      await this.sd_BT9CelWw3pJZdFNV(bh);
      //appendnew_next_sd_VDD8BFVcleIiX75f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VDD8BFVcleIiX75f');
    }
  }

  async sd_BT9CelWw3pJZdFNV(bh) {
    try {
      bh.web.res.status(200).send('Inserted data successfully');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BT9CelWw3pJZdFNV');
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
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_userdetailservice_Catch
}
