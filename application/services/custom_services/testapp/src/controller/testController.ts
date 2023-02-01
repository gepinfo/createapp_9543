import { Request, Response } from 'express';
import { testService } from '../service/testService';
import { CustomLogger } from '../config/Logger'
let test = new testService();

export class testController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetNounById');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetNounCreatedBy');
    })}


}