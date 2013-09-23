var blogConfig = {
	"adminMode": "false", //put true for development (add features for admin)

	"name":"OAuth.io blog",
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
	"menu": false,
	"sidebar": [
		"follow.html",
		"tags.html",
		"forkme.html"
	],
	"sortArticle": "desc",
	"limitPerPage": 5,
	"articles": [
		{
			"id": "oauth-report-22-09-2013",
			"title": "The OAuth Report #1 : Social logins",
			"summary": "On early-stage apps, Facebook connect permissions are accepted only by 70,94% of visitors, Google+ connect ones by 88,81%, Linkedin connect 57,53%, Github connect 49.77% and Twitter connect 60,22%...",
			"date": "09-22-2013",
			"author": "medjaw",
			"format": "html",
			"tags": ["oauth", "report"]
		},
		{
			"id": "guest-blogpost-foursquare-david-hu-21-08-13",
			"title": "Reducing the OAuth complexity: Foursquarecut demo",
			"summary": "<em>(guest logpost from David Hu, Developer Advocate for Foursquare)</em><br />As a Developer Advocate for Foursquare, part of my job that I enjoy the most is helping other developers build great location-based apps using our API. After doing this for a while though, you’ll start to notice similar kinds of questions keep popping up: “Am I allowed to do this to stay within terms of your API?”, “How can I get my rate limits increased?”, “How the f@#$ does OAuth work?” ",
			"img": {
				"src": "",
				"pos": "center"
			},
			"date": "08-21-2013",
			"author": "octopi",
			"format": "markdown",
			"tags": ["guest"]
		},
		{
			"id": "update-wishlist-new-providers-13-08-2013",
			"title": "Some news on OAuth.io",
			"summary": "New providers added on oauth.io: Salesforce, Heroku, VK... with a new exciting feature: the wishlist",
			"img": {
				"src": "",
				"pos": "center"
			},
			"date": "8-13-2013",
			"author": "thyb",
			"format": "html",
			"tags": ["feature", "provider"]
		},
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
