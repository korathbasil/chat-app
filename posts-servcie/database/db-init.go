package database

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var PostsCollection *mongo.Collection

func init() {
	mongoDbClient, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017"))

	if err != nil {
		panic("Cannot connect to the Database")
	}

	PostsCollection = mongoDbClient.Database("ngage-plus").Collection("posts")
}
