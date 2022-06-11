package posts

import "go.mongodb.org/mongo-driver/bson/primitive"

type Post struct {
	Id      primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Text    string             `json:"text,omitempty" bson:"text,omitempty"`
	Media   *[]Media           `json:"media,omitempty" bson:"media,omitempty"`
	Caption string             `json:"caption,omitempty" bson:"caption,omitempty"`
	Likes   int                `json:"likes,omitempty" bson:"likes,omitempty"`
}

type Media struct {
	Type    string `json:"type,omitempty" bson:"type,omitempty"`
	Content string `json:"content,omitempty" bson:"content,omitempty"`
}
