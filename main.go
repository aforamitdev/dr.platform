package main

import (
	systeminfo "changeme/internal"
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func (a *App) GetExample() string {
	return "TEST APP"
}

func main() {
	// Create an instance of the app structure
	app := NewApp()
	host := systeminfo.NewHostInfo()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "drlinux",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			host,
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}