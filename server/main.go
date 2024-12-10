package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
)

var (
	//go:embed all:dist
	dist embed.FS
	//go:embed dist/index.html
	indexHTML embed.FS
)

func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(dist, "dist")
	if err != nil {
		panic(err)
	}
	return http.FS(fsys)
}

func main() {
	fs := http.FileServer(getFileSystem())

	http.Handle("/", fs)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("error starting server", err)
	}
}
