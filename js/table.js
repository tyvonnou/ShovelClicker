var bonus, gain;

window.onload = function () {
	ajaxx('json/bonus.json').then((res) => {
		bonus = res;
		var tbody = qr('#tbody-bonus');
		for (let key in res) {
			incrementBonus[key] = 0;
			let tr = document.createElement('TR');
			let th = document.createElement('TH');
			let tdValue = document.createElement('TD');
			let tdTotal = document.createElement('TD');
			tr.id = key;
			th.textContent = key;
			tdValue.textContent = res[key];
			tdTotal.textContent = 0;
			tdTotal.id = 'total-' + key
			tr.appendChild(th);
			tr.appendChild(tdValue);
			tr.appendChild(tdTotal);
			tbody.appendChild(tr);
		}
	}).catch((err) => {
		console.error(err);
	});

	ajaxx('json/gain.json').then((res) => {
		gain = res;
	}).catch((err) => {
		console.error(err);
	}); 
}
