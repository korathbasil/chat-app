package handlers

import (
	"fmt"
	"net/http"
)

type UserHandler struct{}

func (userController *UserHandler) LoginUserHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "User Login Route")

}
