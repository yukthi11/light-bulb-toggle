const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const onImage = document.getElementById('bulb-on');
const offImage = document.getElementById('bulb-off');

onButton.addEventListener("click", () => {
    onImage.style.display = 'block'; // Show the "on" image
    offImage.style.display = 'none'; // Hide the "off" image
})

offButton.addEventListener("click", () => {
    offImage.style.display=  'block';
    onImage.style.display = 'none';
})