package system

import (
	"context"
	"log"
	"time"

	"github.com/shirou/gopsutil/cpu"
)

type System struct {
	ctx context.Context
}

func NewSystem(ctx context.Context) *System {
	return &System{ctx: ctx}
}

func (s *System) GetCpuInfo() []cpu.InfoStat {

	cpuinfo, err := cpu.Info()
	if err != nil {
		log.Println(err)
	}
	return cpuinfo

}

func (s *System) GetCpuUses(interval time.Duration, parcpu bool) []float64 {
	uses, err := cpu.PercentWithContext(s.ctx, interval, parcpu)
	if err != nil {
		log.Println(err)
	}
	return uses
}
