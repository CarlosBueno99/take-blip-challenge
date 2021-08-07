// This file is in fact the most important file in this project, the other endpoints are simply a broken down version of what´s being done in this file.
// I wanted to have this as my only file, but because a limitation on blip that doesn´t allow be to correctly use array responses inside of the builder I had to create multiple other endpoints (some of them I created just fo fun) 



async function blipRepoAPI(request,response){

    //get the information from github, select the relevant information and append it to the final response.

    const githubRepoResponse = await fetch("https://api.github.com/orgs/takenet/repos?sort=created&direction=asc");
    const gitData = await githubRepoResponse.json();

    //variable that holds the reponse
    var repos = new Array();

    //this is goin to create the individual items that will be appended to the final response
    function createCard(id,avatar, title, subtitle){
        this.id = id;
        this.avatar = avatar;
        this.title = title;
        this.subtitle = subtitle;
    }
    
    //loop variables
    var i = 0;
    var cCount = 0;


    //walk through github response and appending the first 5 C# repos to the final response
    while(i < gitData.length){
        
        if (gitData[i].language == "C#" && cCount < 5){
            repos.push(new createCard(i, gitData[i].owner.avatar_url, gitData[i].full_name, gitData[i].description ))

            cCount++;

        }
        
        i++;
    }

    if (cCount==5){
        console.log("Successfully parsed Takes´ first 5 C# repos from the github API response")
    }


    //returning all the 5 repos in a single json file
    response.json(
        repos
    )
}

export default blipRepoAPI