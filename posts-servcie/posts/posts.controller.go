package posts

import (
	"io/ioutil"

	"github.com/gofiber/fiber/v2"

	"github.com/korathbasil/chat-app/posts-service/utils"
)

func InitializeRoutes(router fiber.Router) {
	router.Get("/", getPosts)
	router.Post("/", createPost)
	router.Get("/files/images/:filename", getImage)
	router.Get("/files/videos/:filename", getVideo)
}

func getPosts(c *fiber.Ctx) error {
	posts := GetAllPosts()

	return c.JSON(posts)
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

func getImage(c *fiber.Ctx) error {
	filename := c.Params("filename")

	dat, err := ioutil.ReadFile("./files/images/" + filename)
	if err != nil {
		return err
	}

	c.Set("Content-Type", "image/jpeg")
	return c.Send(dat)
}

func getVideo(c *fiber.Ctx) error {
	filename := c.Params("filename")

	dat, err := ioutil.ReadFile("./files/videos/" + filename)
	if err != nil {
		return err
	}

	c.Set("Content-Type", "video/mp4")
	return c.Send(dat)
}
