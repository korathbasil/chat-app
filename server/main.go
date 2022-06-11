package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"github.com/korathbasil/chat-app/server/posts"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	apiGroup := app.Group("/api")
	v1ApiGroup := apiGroup.Group("/v1")

	postsRouter := v1ApiGroup.Group("/posts")
	posts.InitializeRoutes(postsRouter)

	log.Fatal(app.Listen(":8000"))
}
