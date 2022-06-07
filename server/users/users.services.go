package users

import "go.mongodb.org/mongo-driver/bson/primitive"

func GetAllUsers() []primitive.M {
	return FindAllUsers()
}
