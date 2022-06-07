package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	apiGroup := app.Group("/api")
	v1ApiGroup := apiGroup.Group("v1")

	usersGroup := v1ApiGroup.Group("/users")

	log.Fatal(app.Listen(":3000"))
}
