package system

import (
	"fmt"

	"github.com/shirou/gopsutil/v3/mem"
)

type MemoryInformation struct {
	memInfo mem.VirtualMemoryStat
}

func (s *System) GetMemoryInfo() MemoryInformation {
	v, _ := mem.VirtualMemory()
	fmt.Println(v)
	return MemoryInformation{
		memInfo: *v,
	}
}
