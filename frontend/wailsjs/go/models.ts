export namespace cpu {
	
	export class InfoStat {
	    cpu: number;
	    vendorId: string;
	    family: string;
	    model: string;
	    stepping: number;
	    physicalId: string;
	    coreId: string;
	    cores: number;
	    modelName: string;
	    mhz: number;
	    cacheSize: number;
	    flags: string[];
	    microcode: string;
	
	    static createFrom(source: any = {}) {
	        return new InfoStat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.cpu = source["cpu"];
	        this.vendorId = source["vendorId"];
	        this.family = source["family"];
	        this.model = source["model"];
	        this.stepping = source["stepping"];
	        this.physicalId = source["physicalId"];
	        this.coreId = source["coreId"];
	        this.cores = source["cores"];
	        this.modelName = source["modelName"];
	        this.mhz = source["mhz"];
	        this.cacheSize = source["cacheSize"];
	        this.flags = source["flags"];
	        this.microcode = source["microcode"];
	    }
	}

}

export namespace host {
	
	export class InfoStat {
	    hostname: string;
	    uptime: number;
	    bootTime: number;
	    procs: number;
	    os: string;
	    platform: string;
	    platformFamily: string;
	    platformVersion: string;
	    kernelVersion: string;
	    kernelArch: string;
	    virtualizationSystem: string;
	    virtualizationRole: string;
	    hostid: string;
	
	    static createFrom(source: any = {}) {
	        return new InfoStat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hostname = source["hostname"];
	        this.uptime = source["uptime"];
	        this.bootTime = source["bootTime"];
	        this.procs = source["procs"];
	        this.os = source["os"];
	        this.platform = source["platform"];
	        this.platformFamily = source["platformFamily"];
	        this.platformVersion = source["platformVersion"];
	        this.kernelVersion = source["kernelVersion"];
	        this.kernelArch = source["kernelArch"];
	        this.virtualizationSystem = source["virtualizationSystem"];
	        this.virtualizationRole = source["virtualizationRole"];
	        this.hostid = source["hostid"];
	    }
	}

}

export namespace systeminfo {
	
	export class CpuInfo {
	    cpuinfo: number;
	    logicalCount: number;
	    hostname: string;
	
	    static createFrom(source: any = {}) {
	        return new CpuInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.cpuinfo = source["cpuinfo"];
	        this.logicalCount = source["logicalCount"];
	        this.hostname = source["hostname"];
	    }
	}

}

