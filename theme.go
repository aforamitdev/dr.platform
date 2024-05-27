package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/theme"
)

type FysionTheme struct {
	fyne.Theme
}

func newFysionTheme() fyne.Theme {
	return &FysionTheme{Theme: theme.DefaultTheme()}
}
