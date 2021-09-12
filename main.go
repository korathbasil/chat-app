package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
);

func main() {
	fmt.Println("App Stared");

	router := mux.NewRouter();

	userRouter := router.PathPrefix("/api/user").Subrouter();

	userRouter.

	log.Fatal(http.ListenAndServe(":8000", router));
}

func homeHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "Hello World");
}
