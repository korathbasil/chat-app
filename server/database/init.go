package database

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var UsersCollection *mongo.Collection

func init() {
	mongoDbClient, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017"))

	if err != nil {
		panic("Cannot connect to the Database")
	}

	UsersCollection = mongoDbClient.Database("chat-app").Collection("users")
}
