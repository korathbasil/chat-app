package config

import (
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

func SetupGoogleOauthConfig() *oauth2.Config {
	config := oauth2.Config{
		ClientID:     "661128700192-uvsqa7kc0al16ptdk8s9fn3mshiu4g76.apps.googleusercontent.com",
		ClientSecret: "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",
		RedirectURL:  "http://localhost:3000/login/google",
		Scopes: []string{
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile",
		},
		Endpoint: google.Endpoint,
	}

	return &config
}
