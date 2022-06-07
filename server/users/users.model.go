package users

type User struct {
	Id             string `json:"id"`
	FullName       string `json:"fullName"`
	ProfilePicture string `json:"profilePicture"`
}

var Users = []User{}
