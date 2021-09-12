package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main()  {
	fmt.Println("App Stared");

	router := mux.NewRouter();

	router.HandleFunc("/", homeHandler).Methods("GET");

	log.Fatal(http.ListenAndServe(":8000", router))
	
}

func homeHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Hello World")
}
