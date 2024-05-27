const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



 async function getvideo(){

const localMediaStream= await navigator.mediaDevices.getUserMedia({video:true, audio:false});

video.srcObject=localMediaStream;

video.play();


}
function painttocanvas(){

const width=video.videoWidth;
const height=video.videoHeight;
canvas.width=width;
canvas.height=height;

return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);


}



function takePhoto(){

    snap.currentTime=0;
    snap.play();
    const data=canvas.toDataURL("image/jpeg");
    const link=document.createElement('a');
    link.href=data;
    link.setAttribute('download', 'handsome');
    link.innerHTML=`<img src="${data}" alt="Handsome Man"/>`
    strip.insertBefore(link, strip.firstChild);

}
getvideo();



video.addEventListener('canplay', painttocanvas);