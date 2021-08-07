# take-blip-challenge
The main purpose for this repo is to store the code used for the Take-Blip Challenge



Here´s a TL;DR if you're not felling like reading the actual code to understand what is going on on this Repo:

Basically there's two things going on

- 1 - A chatbot made on Blip's chatbot platform
- 2 - An API that is used by the bot to get the information it needs from github

## Regarding the First
The bot tells you about the core values of Take Blip and then gives you an option to see the challenge.

The challenge is to create an API to parse the information of the github public API

The information that needs to be retrieved from the Github API is the first 5 C# repos from Take (Blip)
The thing is that the github API doesn't have a lot of filtering functionalities and because of that an intermediary API had to be made to serve only the useful information out of github to the bot.

## Regarding the Second
This part of the code is simply the challenge mentioned on the First topic.

Because of some limitations on the data that Blip's bot builder can handle and because of my own limitations in knowledge regarding Blip's chatbot Builder I decided to segment all the information needed directly on the API.

So if the bot needs the full_name of the third oldest C# repo on Takenet's github account he only needs to fetch the information of this endpoint for example. https://take-blip-challenge.vercel.app/api/getrepo/2/title

The deployment of the API was made using Vercel and the next.js framework.
I used next because of the way it handles the rounting of the API/Pages. (It's amazing for smaller projects)

I chose Vercel because they have an amazing automation that everytime I push the code to github and the repo is updated it knows and redeploys my API endpoints automagically using the code on this repo.
