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