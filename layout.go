package main

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/theme"
)

type fysionLayout struct {
	top, left, right, content fyne.CanvasObject
	dividers                  [3]fyne.CanvasObject
}

func newFysionLayout(top, left, right, content fyne.CanvasObject, dividers [3]fyne.CanvasObject) fyne.Layout {

	return &fysionLayout{top: top, left: left, right: right, content: content, dividers: [3]fyne.CanvasObject(dividers)}

}

func (l *fysionLayout) Layout(objects []fyne.CanvasObject, size fyne.Size) {
	topHeight := l.top.MinSize().Height
	sizeWidth := 220
	l.top.Resize(fyne.NewSize(size.Width, topHeight))

	l.left.Move(fyne.NewPos(0, topHeight))
	l.left.Resize(fyne.NewSize(float32(sizeWidth), size.Height-topHeight))

	l.right.Move(fyne.NewPos(size.Width-float32(sizeWidth), topHeight))
	l.right.Resize(fyne.NewSize(float32(sizeWidth), size.Height-topHeight))

	l.content.Move(fyne.NewPos(float32(sizeWidth), topHeight))
	l.content.Resize(fyne.NewSize(size.Width-float32(sizeWidth)*2, size.Height-topHeight))

	dividerThickness := theme.SeparatorThicknessSize()
	l.dividers[0].Move(fyne.NewPos(0, topHeight))
	l.dividers[0].Resize(fyne.NewSize(size.Width, dividerThickness))

	l.dividers[1].Move(fyne.NewPos(float32(sizeWidth), topHeight))
	l.dividers[1].Resize(fyne.NewSize(dividerThickness, size.Height-topHeight))
}

func (l *fysionLayout) MinSize(objects []fyne.CanvasObject) fyne.Size {

	return fyne.Size{800, 600}
}
