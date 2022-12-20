document.addEventListener('DOMContentLoaded', function () {
	function rechne() {
		var stunden = document.getElementById('stunden'),
			satz = document.getElementById('satz'),
			mwst = document.getElementById('mwst');
		var summe = stunden.valueAsNumber * satz.valueAsNumber * (1 + mwst.valueAsNumber /
			100);
		summe = summe.toFixed(2);
		document.getElementById('betrag')
			.value = summe;
	}
	document.getElementById("myForm")
		.addEventListener("input", rechne);
});
