package posts

import (
	"github.com/gofiber/fiber/v2"

	"github.com/korathbasil/chat-app/posts-service/utils"
)

func InitializeRoutes(router fiber.Router) {
	router.Post("/", createPost)
}

func createPost(c *fiber.Ctx) error {
	var (
		isImagesAvailable = true
		isVideosAvailable = true
	)

	images, err := utils.ParseMultipartFormData(c, "images")

	if err != nil {
		isImagesAvailable = false
	}

	imageFiles, err := utils.UploadFiles(images, "images")
	if isImagesAvailable {

		if err != nil {
			isImagesAvailable = false
		}
	}

	videos, err := utils.ParseMultipartFormData(c, "videos")

	if err != nil {
		isVideosAvailable = false
	}

	videosFiles, err := utils.UploadFiles(videos, "videos")
	if isVideosAvailable {

		if err != nil {
			isVideosAvailable = false
		}

	}

	if !isImagesAvailable && !isVideosAvailable {
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"success": false,
				"message": "Cannot parse FormData",
				"error":   err,
			})
		}
	}

	var post CraetePostDto

	if err := c.BodyParser(&post); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"success": false,
			"message": "Cannot parse JSON",
			"error":   err,
		})
	}

	result, _ := CreatePost(post, imageFiles, videosFiles)

	// return c.JSON(result)
	return c.JSON(result)
}
