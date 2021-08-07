//I realized that if all the repos were created by the same account they all share the same avatar photo (btw the fact that it´s white and a .png file makes its text poorly barely on the Carroussel backgroud)

async function getAvatar(request,response){

    const idCard = 0;

    const githubRepoResponse = await fetch("https://take-blip-challenge.vercel.app/api/blipRepos");
    const gitData = await githubRepoResponse.json();

    console.log("there you go boy");

    response.json(
        gitData[idCard].avatar
    )
}

export default getAvatar