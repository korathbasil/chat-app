package posts

import (
	"context"
	"errors"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"

	db "github.com/korathbasil/chat-app/posts-service/database"
)

func InsertOnePost(post Post) (*mongo.InsertOneResult, error) {
	result, err := db.PostsCollection.InsertOne(context.TODO(), post)

	if err != nil {
		return nil, errors.New("operation failed")
	}

	return result, nil
}

func FindPostByFilter(filter primitive.M) bson.M {
	var post bson.M
	err := db.PostsCollection.FindOne(context.Background(), filter).Decode(&post)

	if err != nil {
		return nil
	}

	return post
}

func FindAllPosts() []primitive.M {
	cursor, err := db.PostsCollection.Find(context.Background(), bson.D{})

	if err != nil {
		log.Fatal(err)
	}

	defer cursor.Close(context.Background())

	var posts []primitive.M

	for cursor.Next(context.Background()) {
		var post bson.M
		err := cursor.Decode(&post)

		if err != nil {
			log.Fatal(err)
		}

		posts = append(posts, post)
	}

	return posts
}
