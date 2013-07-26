var blogConfig = {
	"adminMode": "false", //put true for development (add features for admin)

	"name":"The OAuth.io blog",
	"description":"A better web, with a better OAuth",
	"email": "team@oauth.io",
	"logo": "assets/logo.png",

	"theme": "default",
	"social": {
		"disqus": "oauthioblog",
		"twitter_account": "oauth_io"
	},
	"authors": [
		{
			"username": "thyb",
			"fullname": "Thibaud Arnault",
			"email": "thyb@oauth.io",
			"gravatar": "4bda4cba273a73659a518e5ab26fc1bb",
			"job": "Co-founder",
			"bio": ""
		},
		{
			"username": "bumpmann",
			"fullname": "Arnaud Richard",
			"email": "bump@oauth.io",
			"gravatar": "1484b6c5a101c2975cdaf6baefedbe77",
			"job": "Co-founder",
			"bio": ""
		},
		{
			"username": "medjaw",
			"fullname": "Mehdi Medjaoui",
			"email": "mehdi@oauth.io",
			"gravatar": "97dd34579db626d3e97d8e2e07419086",
			"job": "Co-founder"
		}
	],
	"menu": [
		{
			"url": "#/",
			"text": "Home"
		},
		{
			"url": "#/pages/me",
			"text": "About me"
		}
	],
	"sidebar": [
		"follow.html",
		"tags.html",
		"forkme.html"
	],
	"sortArticle": "desc",
	"limitPerPage": 5,
	"articles": [
		{
			"id": "announcing-oauthd",
			"title": "oauthd: OAuth.io opensourced!",
			"summary": "We are thrilled to announce the official realease of oauthd: the open source version of OAuth.io. Thousands of developers have already registered to OAuth.io for 3 weeks and many of you requested an open source version of OAuth.io. So we listened. And today, it is real.",
			"img": {
				"src": "",
				"pos": "center"
			},
			"date": "7-25-2013",
			"author": "thyb",
			"format": "markdown",
			"tags": ["opensource", "oauthd"]
		}
	]
}