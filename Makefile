make_assembly:
	cd wasm && GOOS=js GOARCH=wasm go build -o main.wasm
	cp wasm/main.wasm appui/public
	

copy_ui:
	cp -r appui/dist server/dist

dev_ui:
	cd appui && yarn run dev

start_server:
	go run server/main.go

