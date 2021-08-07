async function getRepo(request,response){

    const idCard = 2;

    const githubRepoResponse = await fetch("https://take-blip-challenge.vercel.app/api/blipRepos");
    const gitData = await githubRepoResponse.json();
    
    

    console.log("there you go boy");

    response.json(
        gitData[idCard].title
    )
}

export default getRepo