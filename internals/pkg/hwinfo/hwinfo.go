package hwinfo

import (
	"log"
	"runtime"
)

type HwInfo struct {
	Platform string `json:"platform,omitempty"`
}

func (hw *HwInfo) PlatFormInfo() {
	platform := runtime.GOOS
	log.Println(platform, "plaform")

}
