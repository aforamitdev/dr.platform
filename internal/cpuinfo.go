package systeminfo

import (
	"fmt"

	"github.com/shirou/gopsutil/host"
)

type CpuInfo struct {
	average      uint8  `json:"cpuinfo"`
	logicalCount int8   `json:"logicalCount"`
	hostInfo     string `json:"hostname"`
}

func NewCpuInfo() *CpuInfo {
	return &CpuInfo{}
}

func (cpu *CpuInfo) GetCpuInfo() (CpuInfo, error) {

	return CpuInfo{average: 12}, nil

}

func (cpu *CpuInfo) GetPhysicalCount(logical bool) (int, error) {

	hostInfo, _ := host.Info()
	fmt.Println(hostInfo)

	return 0, nil

}
