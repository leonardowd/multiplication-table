function calculate() {
	/*Get typed numbers*/
	const typedNumber = document.querySelector("#typed-number");
	const numberValue = typedNumber.value;
	const calculateUntil = document.querySelector("#calculate-until");
	const calculateValue = calculateUntil.value;

	const ofNumber = document.querySelector("#of-number");

	const textResult = document.querySelector("#result-text");
	const tableResult = document.querySelector("#result-table");

	/*validation*/
	if (
		numberValue == null ||
		(numberValue == "" && calculateValue == null) ||
		calculateValue == ""
	) {
		textResult.style.color = "red";
		textResult.style.fontSize = "2em";
		textResult.textContent = "Type valid numbers!";
	} else {
		textResult.style.display = "none";
		ofNumber.textContent = `${numberValue}`;

		const list = [];

		for (let index = 1; index <= calculateValue; index++) {
			let calculating = numberValue * index;
			list[index] = calculating;
		}

		for (let index = 1; index <= calculateValue; index++) {
			const tr = document.createElement("tr");
			const td = document.createElement("td");
			tableResult.appendChild(tr);
			tableResult.appendChild(td);
			td.textContent = `${numberValue} * ${index} = ${list[index]}`;
		}
	}
}
