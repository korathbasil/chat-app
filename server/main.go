package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/korathbasil/chat-app/server/users"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	apiGroup := app.Group("/api")
	v1ApiGroup := apiGroup.Group("v1")

	usersRouter := v1ApiGroup.Group("/users")

	users.InitializeRoutes(usersRouter)

	log.Fatal(app.Listen(":8000"))
}
