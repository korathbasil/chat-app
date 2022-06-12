package posts

type CraetePostDto struct {
	Text    string   `json:"text,omitempty" bson:"text,omitempty"`
	Media   *[]Media `json:"media,omitempty" bson:"media,omitempty"`
	Caption string   `json:"caption,omitempty" bson:"caption,omitempty"`
}
