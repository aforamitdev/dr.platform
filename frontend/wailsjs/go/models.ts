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

