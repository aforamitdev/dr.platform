package main

import (
	systeminfo "changeme/internal"
	"context"
	"embed"
	"time"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

//go:embed all:frontend/dist
var assets embed.FS

func (a *App) GetExample() string {
	return "TEST APP"
}

type CpuUses struct {
	Average float64 `json:"average"`
}

func main() {
	// Create an instance of the app structure
	app := NewApp()
	host := systeminfo.NewHostInfo()
	cpu := systeminfo.NewCpuInfo()
	// Create application with options
	err := wails.Run(&options.App{

		Title:  "drlinux",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup: func(ctx context.Context) {
			app.startup(ctx)
			func() {
				for {
					runtime.EventsEmit(ctx, "cpu_uses", CpuUses{Average: 12.0})
					time.Sleep(time.Second)
				}
			}()
		},
		Bind: []interface{}{
			host,
			cpu,
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
