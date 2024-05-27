package main

import (
	"fmt"

	"github.com/shirou/gopsutil/v3/mem"
)

func main() {

	// rc, ep, err := smbios.Stream()
	// if err != nil {
	// 	log.Fatalln("failed ot open stream")
	// }
	// defer rc.Close()
	// d := smbios.NewDecoder(rc)

	// ss, err := d.Decode()
	// if err != nil {
	// 	log.Fatalf("failed to decode structure %v", err)
	// }
	// major, minor, rev := ep.Version()
	// addr, size := ep.Table()

	// fmt.Printf("SMBIOS %d.%d.%d - table: address: %#x, size: %d\n",
	// 	major, minor, rev, addr, size)

	// for _, s := range ss {
	// 	fmt.Println(s)
	// }

	// v, _ := mem.VirtualMemory()
	// fmt.Println(v)
	// s, _ := mem.SwapDevices()
	// fmt.Print(s)
	fmt.Println(mem.VirtualMemory())

}
