package main

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/theme"
)

type FysionTheme struct {
	fyne.Theme
}

func newFysionTheme() fyne.Theme {
	return &FysionTheme{Theme: theme.DefaultTheme()}
}

func (t *FysionTheme) Color(name fyne.ThemeColorName, variant fyne.ThemeVariant) color.Color {
	return t.Theme.Color(name, theme.VariantDark)
}
