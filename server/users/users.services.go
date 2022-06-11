package users

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetAllUsers() []primitive.M {
	return FindAllUsers()
}

func LoginUser(name string, email string, profilePicture string) {
	emailFilter := bson.M{"email": email}
	user := FindUserByFilter(emailFilter)

	if user != nil {
		return
	}

	newUser := User{FullName: name, ProfilePicture: profilePicture, UserName: "", Email: email, Phone: ""}

	InsertOneUser(newUser)
}
