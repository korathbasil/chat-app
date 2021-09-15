package routes

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/korathbasil/chat-app-api/handlers"
)

func InitializeUserRoute(subRouter *mux.Router) {
	subRouter.HandleFunc("/", userHandler).Methods("GET")

	userHandler := handlers.UserHandler{}

	subRouter.HandleFunc("/login", userHandler.LoginUserHandler)
}

func userHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "User Route")
}
