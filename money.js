


const input = document.querySelectorAll('money1');
const apiUrl = "http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1"
	//lo pongo aca asi me es mas facil despues usarlo solo poniendo el nombre de la const
	
	async function currency(){
		const res = await fetch (apiUrl);
		const data = await res.json();

		//ESTAS COSAS YA NO SIRVEN, LAS DEJO PARA SABER COMO LAS FUI HACIENDO
		//console.log(data.quotes);
		//const arrKeys = Object.keys(data.quotes);
		//let rates = data.quotes;
		//console.log(rates)

		addOptions(data.quotes);

		function addOptions(quotes){
			const selectFrom = document.getElementById('pegado');
			const selectTo = document.getElementById('pegado1');
			const arrKeys = Object.keys(data.quotes);
			arrKeys.forEach((item) =>{
				//console.log(item);
				const option = document.createElement('option');
				option.value = item; 
				option.text = item;

				const option1 = document.createElement('option');
				option1.value = item; 
				option1.text = item;

				selectFrom.appendChild(option);
				selectTo.appendChild(option1);

			})


		}


	}
	currency();
	

	document.querySelector("button").onclick = function(){
	// CALCULAR LA CONVERSION.
	let choice1 = document.querySelector('#pegado').selectedIndex;
	//let convertion1 = document.querySelector('#pegado')options[choice1].selectedIndex; 

	let choice2 = document.querySelector('#pegado1').selectedIndex;
	//let convertion2 = document.querySelector('#pegado1')options[choice2].selectedIndex;

	let amount = document.querySelector('input').value;
	console.log(amount);
} 

	//loop the keys
	fetch(apiUrl)
	.then(response => response.json())
	.then(response => response.quotes)
	.then(data => {
		for(key in data)
			console.log(key);

		if(key == "USD" + money1){
			value1 = data[key];
			console.log(value1);
		}
		if(key == "USD" + money2){
			value2 = data[key];
			console.log(value2);
		}

		return[value1, value2];
	})
	.then(values =>{
		document.querySelector("span").textContent =
		(amount * value2) / value1 + ""+ money2;
	});


//function moneyFrom(quotes) {
  //document.getElementById("option").value=valNum*1.156236;
//}
//function moneyTo(quotes) {
//  document.getElementById("option1").value=valNum*0.864875337;
//}



	

	


























