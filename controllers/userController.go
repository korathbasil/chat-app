package controllers

import (
	"fmt"
	"net/http"
)

type UserController struct{}

func (userController *UserController) LoginUserHandler(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writer, "User Login Route")

}
