package users

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id             primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	FullName       string             `json:"fullName,omitempty" bson:"fullName,omitempty"`
	ProfilePicture string             `json:"profilePicture,omitempty" bson:"profilePicture,omitempty"`
}

var Users = []User{}
