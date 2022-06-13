package posts

import (
	"fmt"
	"io"
	"os"
	"path"

	"github.com/gofiber/fiber/v2"

	"github.com/korathbasil/chat-app/posts-service/utils"
)

func InitializeRoutes(router fiber.Router) {
	router.Post("/", createPost)
}

func createPost(c *fiber.Ctx) error {
	images, err := utils.ParseMultipartFormData(c, "images")

	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Cannot parse FormData",
			"error":   err,
		})
	}

	for _, value := range images {
		filename := path.Base(value.Filename)
		fmt.Println(filename)
		dest, err := os.Create("files/" + filename)

		if err != nil {
			panic(err)
		}

		defer dest.Close()

		file, _ := value.Open()

		res, err := io.Copy(dest, file)
		fmt.Println(res)

		if err != nil {
			break
		}

	}

	// var post CraetePostDto
	// err := c.BodyParser(&post)

	// if err != nil {
	// 	return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
	// 		"success": false,
	// 		"message": "Cannot parse JSON",
	// 		"error":   err,
	// 	})
	// }

	// result, err := CreatePost(post)

	// if err != nil {
	// 	return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
	// 		"success": false,
	// 		"message": "Database operation failed",
	// 		"error":   err,
	// 	})
	// }

	// return c.JSON(result)
	return c.JSON("donme")
}
