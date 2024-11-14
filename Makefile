make_assembly:
	cd wasm && GOOS=js GOARCH=wasm go build -o main.wasm
	cp wasm/main.wasm appui/public
	rm ./wasm/main.wasm

copy_ui:
	cp -r appui/dist server/dist

start_server:
	go run server/main.go