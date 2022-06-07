package main

import (
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/korathbasil/chat-app/server/auth"
	"github.com/korathbasil/chat-app/server/users"
)

func main() {
	app := fiber.New()

	apiGroup := app.Group("/api")
	v1ApiGroup := apiGroup.Group("v1")

	usersRouter := v1ApiGroup.Group("/users")
	users.InitializeRoutes(usersRouter)

	authRouter := v1ApiGroup.Group("/auth")
	auth.InitializeRoutes(authRouter)

	log.Fatal(app.Listen(":8000"))
}
