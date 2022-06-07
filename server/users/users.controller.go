package users

func InitializeRoutes() {

}

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
