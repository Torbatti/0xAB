package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func main() {
	dfRouter := chi.NewRouter()

	src_files := http.FileServer(http.Dir("./src"))
	dfRouter.Handle("/*", src_files)

	server := http.Server{
		Addr:    ":8090",
		Handler: dfRouter,
	}
	log.Println("Starting server on :", server.Addr)

	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}

}
