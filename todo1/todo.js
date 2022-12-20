document.addEventListener('DOMContentLoaded', function () {
	let volumeSlider = document.getElementById('volume'),
		volumeAnzeige = document.getElementById('output');

	function setzeVolumeAnzeige(wert) {
		volumeAnzeige.value = wert;
	}
	volumeSlider.addEventListener('input', function (event) {
		setzeVolumeAnzeige(event.target.value);
	});
	setzeVolumeAnzeige(volumeSlider.value);
	volumeAnzeige.hidden = false;
});

