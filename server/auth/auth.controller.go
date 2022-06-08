package auth

import (
	"github.com/gofiber/fiber/v2"
)

func InitializeRoutes(router fiber.Router) {
	router.Post("/google/login", googleLoginHandler)
}

func googleLoginHandler(c *fiber.Ctx) error {
	return c.SendString("Google login")
}
