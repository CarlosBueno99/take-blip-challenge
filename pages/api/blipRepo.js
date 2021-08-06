async function blipRepoAPI(request,response){

    const githubRepoResponse = await fetch("https://api.github.com/orgs/takenet/repos?sort=created&direction=asc");
    const gitData = await githubRepoResponse.json();



    console.log(gitData[1].owner.avatar_url)

    var i = 0;
    
    while(i < 30){
        
        if (gitData[i].language == "C#"){
            console.log(gitData[i].full_name)

            

        }
        
        
        
        i++;
    }



    const repoName = gitData[1].full_name;
    const repoDescription = gitData[1].description;
    const repolanguage = gitData[1].language;
    const takeAvatar = "something";

    console.log(repoName)
    console.log(repoDescription)
    console.log(repolanguage)
    console.log(takeAvatar)
    

    response.json(
        {
        cardImage: takeAvatar,
        carTitle: repoName,
        cardSubTitle: repoDescription,
        language : repolanguage,
        other : "information"
        }
    )
}

export default blipRepoAPI