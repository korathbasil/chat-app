package users

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id             primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	FullName       string             `json:"fullName,omitempty" bson:"fullName,omitempty"`
	ProfilePicture string             `json:"profilePicture,omitempty" bson:"profilePicture,omitempty"`
	UserName       string             `json:"userName,omitempty" bson:"userName, omitempty"`
	Email          string             `json:"email,omitempty" bson:"email,omitempty"`
	Phone          string             `json:"phone,omitempty" bson:"phone,omitempty"`
}

var Users = []User{}
