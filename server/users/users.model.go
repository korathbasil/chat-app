package users

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	Id             primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	FullName       string             `json:"fullname,omitempty" bson:"fullname,omitempty"`
	ProfilePicture string             `json:"profilepicture,omitempty" bson:"profilepicture,omitempty"`
	Username       string             `json:"username,omitempty" bson:"username, omitempty"`
	Email          string             `json:"email,omitempty" bson:"email,omitempty"`
	Phone          string             `json:"phone,omitempty" bson:"phone,omitempty"`
}

var Users = []User{}
