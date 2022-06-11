package posts

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	db "github.com/korathbasil/chat-app/server/database"
)

func InsertOnePost(post Post) {
	_, err := db.PostsCollection.InsertOne(context.TODO(), post)

	if err != nil {
		panic("Cant perform Action")
	}
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
