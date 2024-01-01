package systeminfo

import (
	"fmt"
	"time"

	"github.com/shirou/gopsutil/cpu"
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

func (c *CpuInfo) GetPhysicalCount(logical bool) ([]cpu.InfoStat, error) {

	cpuInfo, _ := cpu.Info()
	fmt.Println(cpu.Percent(time.Second*2, false))
	// fmt.Println(cpuInfo)

	return cpuInfo, nil

}

func (c *CpuInfo) GetCpuUses() ([]float64, error) {

	average, err := cpu.Percent(time.Second*10, false)
	if err != nil {
		fmt.Println("Error getting cpu uses")
	}

	return average, err
}
