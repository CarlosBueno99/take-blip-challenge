async function getRepo(request,response){

    const idCard = 0;

    const githubRepoResponse = await fetch("https://take-blip-challenge.vercel.app/api/blipRepo");
    const gitData = await githubRepoResponse.json();
    
    

    console.log("there you go boy");

    response.json(
        gitData[idCard].subtitle
    )
}

export default getRepo