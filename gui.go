//go:generate fyne bundle -o bundles.go assets
package main

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/data/binding"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
	"github.com/aforamitdev/dr.platform/internal/dialogs"
)

type gui struct {
	win       fyne.Window
	directory *widget.Label
	title     binding.String
}

func makeBanner() fyne.CanvasObject {
	toolBar := widget.NewToolbar(widget.NewToolbarAction(theme.HomeIcon(), func() {}))

	logo := canvas.NewImageFromResource(resourceLogoJpg)
	logo.FillMode = canvas.ImageFillContain

	return container.NewStack(toolBar, container.NewPadded(logo))
}
func (g *gui) makeGUI() fyne.CanvasObject {
	top := makeBanner()
	left := canvas.NewRectangle(color.Gray{Y: 0x11})

	right := widget.NewLabel("right")

	directory := widget.NewLabelWithData(g.title)
	content := container.NewStack(canvas.NewRectangle(color.Gray{}), directory)

	dividers := [3]fyne.CanvasObject{widget.NewSeparator(), widget.NewSeparator(), widget.NewSeparator()}
	objs := []fyne.CanvasObject{content, top, left, right, dividers[0], dividers[1], dividers[2]}
	return container.New(newFysionLayout(top, left, right, content, dividers), objs...)
}

func (g *gui) openProject() {

	dialog.ShowFolderOpen(func(dir fyne.ListableURI, err error) {

		if err != nil {
			dialog.ShowError(err, g.win)
			return
		}
		if dir == nil {
			return
		}
		name := dir.Name()
		// g.directory.SetText(name)
		g.win.SetTitle("Tempo:" + name)
		g.title.Set(name)
	}, g.win)
}

func (ui *gui) makeMenu() *fyne.MainMenu {
	// return &fyne.NewMenu("File",
	// 	[]*fyne.NewMainMenu("File Menu", *fyne.MenuItem{fyne.NewMenuItem("Open a Project")}),
	// )

	file := fyne.NewMenu("File", fyne.NewMenuItem("Open Project", ui.openProject))

	return fyne.NewMainMenu(file)
}

func (ui *gui) showCreate(w fyne.Window) {

	home := widget.NewLabel(`create project gome oasmda sdap mapsd maspdm as
	asdasd

	asdasd
	`)
	wizard := dialogs.NewWizard("create project", home)
	wizard.Show(w)
}
