package main

import (
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/data/binding"
)

func main() {

	a := app.New()
	a.Settings().SetTheme(newFysionTheme())
	w := a.NewWindow("Fysion App")

	ui := &gui{win: w, title: binding.NewString()}
	w.SetContent(ui.makeGUI())
	w.SetMainMenu(ui.makeMenu())

	ui.showCreate(ui.win)

	ui.title.AddListener(binding.NewDataListener(func() {
		name, _ := ui.title.Get()
		w.SetTitle("tempo Pilot" + name)
	}))

	w.ShowAndRun()
}
