package posts

import "go.mongodb.org/mongo-driver/mongo"

func CreatePost(post CraetePostDto, imageFiles []string, videoFiles []string) (*mongo.InsertOneResult, error) {
	var media []Media

	for _, filename := range imageFiles {
		newMedia := Media{
			Type:    "IMG",
			Content: filename,
		}

		media = append(media, newMedia)
	}

	for _, filename := range videoFiles {
		newMedia := Media{
			Type:    "VDO",
			Content: filename,
		}
		media = append(media, newMedia)
	}

	newPost := Post{
		Text:    post.Text,
		Media:   &media,
		Caption: post.Caption,
		Likes:   0,
	}

	result, err := InsertOnePost(newPost)

	if err != nil {
		return nil, err
	}

	return result, nil
}
