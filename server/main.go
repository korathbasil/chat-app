package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"github.com/korathbasil/chat-app/server/auth"
	"github.com/korathbasil/chat-app/server/users"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	// Or extend your config for customization
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	apiGroup := app.Group("/api")
	v1ApiGroup := apiGroup.Group("/v1")

	usersRouter := v1ApiGroup.Group("/users")
	users.InitializeRoutes(usersRouter)

	authRouter := v1ApiGroup.Group("/auth")
	auth.InitializeRoutes(authRouter)

	log.Fatal(app.Listen(":8000"))
}
