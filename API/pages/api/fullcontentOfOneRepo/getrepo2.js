//this endpoint returns all the information form a single repo
//I tried using this after the usign the main response didn´t work out, but I couldn´t make it work with the builder. I wasn´t able to get the individual information inside of the Json response

async function getRepo(request,response){

    const idCard = 2;


    const githubRepoResponse = await fetch("https://take-blip-challenge.vercel.app/api/blipRepos");
    const gitData = await githubRepoResponse.json();
    
    const content = gitData[idCard].title;
    
    console.log(gitData);
    console.log(content);



    response.json(
        content
    )
}

export default getRepo