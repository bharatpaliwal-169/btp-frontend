const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);
const stop = document.getElementById('stop');
const start = document.getElementById('start');
const snap = document.getElementById('snap');


webcam.start()
    .then(result =>{
      console.log("webcam started");
    })
    .catch(err => {
      console.log(err);
  });


start.addEventListener('click', () => {
  webcam.start();
})


var context = canvas.getContext('2d');
snap.addEventListener('click', () => {
  let picture = webcam.snap();
  context.drawImage(picture, 0, 0);
})

stop.addEventListener('click', () => {
  webcam.stop();
})

//mobile support
$('#cameraFlip').click(function() {
  webcam.flip();
  webcam.start();  
});
