package main

import (
	"changeme/internals/pkg/hwinfo"
	"context"
	"fmt"
	"log"
	"os/exec"
	"runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	stats := exec.Command("hostnamectl")
	log.Printf(runtime.GOOS)
	err := stats.Run()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(stats)

	hw := hwinfo.HwInfo{}

	hw.PlatFormInfo()

	return fmt.Sprintf("Hello %s, It's show time!", name)
}
