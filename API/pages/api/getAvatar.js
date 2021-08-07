async function getAvatar(request,response){

    const idCard = 4;

    const githubRepoResponse = await fetch("https://take-blip-challenge.vercel.app/api/blipRepos");
    const gitData = await githubRepoResponse.json();

    console.log("there you go boy");

    response.json(
        gitData[idCard].avatar
    )
}

export default getAvatar