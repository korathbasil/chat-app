package posts

import "github.com/gofiber/fiber/v2"

func InitializeRoutes(router fiber.Router) {
	router.Post("/", createPost)
}

func createPost(c *fiber.Ctx) error {
	return c.SendString("Gefs")
}
