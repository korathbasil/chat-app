package auth

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/korathbasil/chat-app/posts-service/config"
)

func InitializeRoutes(router fiber.Router) {
	router.Get("/google/login", googleOauthLoginHandler)
	router.Post("/google/callback", googleOauthCallbackHandler)
}

func googleOauthLoginHandler(c *fiber.Ctx) error {
	googleConfig := config.SetupGoogleOauthConfig()
	googleOauthUrl := googleConfig.AuthCodeURL("chat-app-auth-state")

	return c.Redirect(googleOauthUrl)
}

func googleOauthCallbackHandler(c *fiber.Ctx) error {
	type Body struct {
		Code string `json:"code"`
	}
	var body Body

	if err := c.BodyParser(&body); err != nil {
		return err
	}

	code := body.Code

	if code != "" {
		googleConfig := config.SetupGoogleOauthConfig()

		token, err := googleConfig.Exchange(context.Background(), code)

		if err != nil {
			fmt.Println("Invalid code")
		}

		googleOauthApiUrl := "https://www.googleapis.com/oauth2/v2/userinfo?access_token="

		resp, err := http.Get(googleOauthApiUrl + token.AccessToken)

		if err != nil {
			fmt.Println(err)
		}

		data, err := ioutil.ReadAll(resp.Body)

		if err != nil {
			fmt.Println("failed to parse JSON")
		}

		return c.SendString(string(data))
	} else {
		return c.SendString("No code")
	}
}
