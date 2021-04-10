const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }catch(err){console.log(err)}
}


button.addEventListener('click', async () => {
    //disable the button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false; 
});


selectMediaStream();