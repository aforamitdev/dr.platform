// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {systeminfo} from '../models';
import {cpu} from '../models';

export function GetCpuInfo():Promise<systeminfo.CpuInfo>;

export function GetCpuUses():Promise<Array<number>>;

export function GetPhysicalCount(arg1:boolean):Promise<Array<cpu.InfoStat>>;
