export const getAllMemes=async()=>{
    const resposne=await fetch('https://api.imgflip.com/get_memes');
    return await resposne.json();
}

//async functions always return a promise