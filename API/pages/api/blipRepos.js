async function blipRepoAPI(request,response){

    const githubRepoResponse = await fetch("https://api.github.com/orgs/takenet/repos?sort=created&direction=asc");
    const gitData = await githubRepoResponse.json();

    var repos = new Array();

    function createCard(id,avatar, title, subtitle){
        this.id = id;
        this.avatar = avatar;
        this.title = title;
        this.subtitle = subtitle;
    }
    
    //loop variables
    var i = 0;
    var cCount = 0;


    //walk through data registering the first 5 C# repos in the repo array
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

    response.json(
        repos
    )
}

export default blipRepoAPI