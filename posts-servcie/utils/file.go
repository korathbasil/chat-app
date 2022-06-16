package utils

import (
	"errors"
	"io"
	"mime/multipart"
	"os"
	"path"

	"github.com/google/uuid"
)

func UploadFiles(files []*multipart.FileHeader, dir string) ([]string, error) {
	var uploadedFiles []string
	for _, file := range files {
		id := uuid.New()

		filename := path.Base(id.String() + file.Filename)
		dest, err := os.Create("files/" + dir + "/" + filename)

		if err != nil {
			panic(err)
		}

		defer dest.Close()

		file, _ := file.Open()

		if _, err := io.Copy(dest, file); err != nil {
			break
		}

		uploadedFiles = append(uploadedFiles, filename)
	}

	if len(uploadedFiles) != len(files) {
		return nil, errors.New("cant perform action")
	}

	return uploadedFiles, nil

}
