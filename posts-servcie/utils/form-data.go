package utils

import (
	"errors"
	"mime/multipart"

	"github.com/gofiber/fiber/v2"
)

func ParseMultipartFormData(c *fiber.Ctx, identifier string) ([]*multipart.FileHeader, error) {
	form, err := c.MultipartForm()

	if err != nil {
		return nil, errors.New("can't parse Multipart Form")
	}

	files := form.File[identifier]

	return files, nil
}
