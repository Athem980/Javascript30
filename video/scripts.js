const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
console.log(video);
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function handleplay(){

const vi=video.paused? 'play': 'pause';

video[vi]();
//console.log(video);


}
function handleicon(){

const icon=this.paused ? '►':'❚ ❚';
toggle.textContent=icon;



}
function skip(){
console.log(this.dataset.skip);
video.currentTime+=parseFloat(this.dataset.skip);





}


function handleRangeUpdate() {
    video[this.name] = this.value;
  }
  
  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }
  
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
  
  /* Hook up the event listeners */
  video.addEventListener('click', handleplay);
video.addEventListener('play', handleicon);
video.addEventListener('pause', handleicon);
skipButtons.forEach(input=>input.addEventListener('click', skip))
  video.addEventListener('timeupdate', handleProgress);
  
 
  
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
  
  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);