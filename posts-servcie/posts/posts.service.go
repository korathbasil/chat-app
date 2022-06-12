package posts

import "go.mongodb.org/mongo-driver/mongo"

func CreatePost(post CraetePostDto) (*mongo.InsertOneResult, error) {
	newPost := Post{
		Text:    post.Text,
		Media:   post.Media,
		Caption: post.Caption,
		Likes:   0,
	}

	result, err := InsertOnePost(newPost)

	if err != nil {
		return nil, err
	}

	return result, nil
}
