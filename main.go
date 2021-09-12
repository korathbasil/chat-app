package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/korathbasil/chat-app-api/routes"
);

func main() {
	fmt.Println("App Stared");

	router := mux.NewRouter();

	userRouter := router.PathPrefix("/user").Subrouter();



	routes.InitializeUserRoute(userRouter);

	log.Fatal(http.ListenAndServe(":8000", router));
}
