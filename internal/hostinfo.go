package systeminfo

import (
	"fmt"

	"github.com/shirou/gopsutil/host"
)

type HostInfo struct{}

func NewHostInfo() *HostInfo {
	return &HostInfo{}
}

func (h *HostInfo) GetHostInfo() (*host.InfoStat, error) {
	var g host.InfoStat
	info, err := host.Info()
	if err != nil {
		fmt.Println("Error getting ")
		return nil, err
	}
	g.BootTime = info.BootTime
	return info, nil
}
