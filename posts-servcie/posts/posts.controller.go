package posts

import (
	"github.com/gofiber/fiber/v2"
)

func InitializeRoutes(router fiber.Router) {
	router.Post("/", createPost)
}

func createPost(c *fiber.Ctx) error {
	var post CraetePostDto
	err := c.BodyParser(&post)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Cannot parse JSON",
			"error":   err,
		})
	}

	result, err := CreatePost(post)

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Database operation failed",
			"error":   err,
		})
	}

	return c.JSON(result)
}
