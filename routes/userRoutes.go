package routes

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func InitializeUserRoute(subRouter *mux.Router) {
	subRouter.HandleFunc("/", userHandler).Methods("GET");
}

func userHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer,"User Route")
}