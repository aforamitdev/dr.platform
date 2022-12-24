package hwinfo

import (
	"runtime"
)

type HwInfo struct {
	Platform string `json:"platform,omitempty"`
}

func (hw *HwInfo) PlatFormInfo() {
	hw.Platform = runtime.GOOS
}
