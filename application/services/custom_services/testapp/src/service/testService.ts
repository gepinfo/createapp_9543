import { Request, Response } from 'express';
import {testDao} from '../dao/testDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test = new testDao();

export class testService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpDelete')
     let  testId = req.params.id;
     test.GpDelete(testId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpGetAllValues')
     
     test.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpCreate')
     let  testData = req.body;
     test.GpCreate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpUpdate')
     let  testData = req.body;
     test.GpUpdate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpSearch')
     let  testData = req.query;
     test.GpSearch(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpSearchForUpdate')
     let  testData = req.body;
     test.GpSearchForUpdate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpGetNounById')
     let  testId = req.params.id;
     test.GpGetNounById(testId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpGetNounCreatedBy')
     let  testData = { created_by: req.query.createdby };
     test.GpGetNounCreatedBy(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}