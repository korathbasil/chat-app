package users

import "github.com/gofiber/fiber/v2"

func InitializeRoutes(router fiber.Router) {
	router.Get("/", getUsersHandler)
	// router.Post("/login", loginHandler)
}

func getUsersHandler(c *fiber.Ctx) error {
	users := GetAllUsers()

	return c.JSON(users)

}

// func loginHandler(c *fiber.Ctx) error {
// 	user := User{FullName: "assdfasa", ProfilePicture: "asasasas"}

// 	UsersRepo{}.InsertOne(user)

// 	return c.SendString("Inserted")
// }

// // Login user
// func loginUser(w http.ResponseWriter, r *http.Request) {
// 	var user User
// 	err := json.NewDecoder(r.Body).Decode(&user)

// 	if err != nil {
// 		fmt.Println("Err")
// 	}

// 	fmt.Printf("%+v", user)
// }

// // Get Users
// func getUsers(w http.ResponseWriter, r *http.Request) {
// 	users := GetAllUsers()
// 	json.NewEncoder(w).Encode(users)
// 	// fmt.Fprintf(w, "Hello")
// }
