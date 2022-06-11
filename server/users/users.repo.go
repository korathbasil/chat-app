package users

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	db "github.com/korathbasil/chat-app/server/database"
)

func InsertOneUser(user User) {
	_, err := db.UsersCollection.InsertOne(context.TODO(), user)

	if err != nil {
		panic("Cant perform Action")
	}
}

func FindUserByFilter(filter primitive.M) bson.M {
	var user bson.M
	err := db.UsersCollection.FindOne(context.Background(), filter).Decode(&user)

	if err != nil {
		return nil
	}

	return user
}

func FindAllUsers() []primitive.M {
	cursor, err := db.UsersCollection.Find(context.Background(), bson.D{})

	if err != nil {
		log.Fatal(err)
	}

	defer cursor.Close(context.Background())

	var users []primitive.M

	for cursor.Next(context.Background()) {
		var user bson.M
		err := cursor.Decode(&user)

		if err != nil {
			log.Fatal(err)
		}

		users = append(users, user)
	}

	return users
}
