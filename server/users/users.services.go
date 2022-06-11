package users

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetAllUsers() []primitive.M {
	return FindAllUsers()
}

func LoginUser(name string, email string, profilePicture string) primitive.M {
	emailFilter := bson.M{"email": email}
	user := FindUserByFilter(emailFilter)

	if user != nil {
		return user
	}

	newUser := User{FullName: name, ProfilePicture: profilePicture, UserName: "", Email: email, Phone: ""}

	InsertOneUser(newUser)
}
