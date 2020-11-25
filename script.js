let checkbox1 = document.querySelector('.mobile-input-sub-1'),
		checkbox2 = document.querySelector('.mobile-input-sub-2'),
		checkbox3 = document.querySelector('.mobile-input-sub-3'),
		checkbox4 = document.querySelector('.mobile-input-sub-4');


let mobile1 = document.querySelector('.mega-box-1'),
		mobile2 = document.querySelector('.mega-box-2'),
		mobile3 = document.querySelector('.mega-box-3'),
		mobile4 = document.querySelector('.mega-box-4');

let element1 = document.getElementById("first"),
		element2 = document.getElementById("second"),
		element3 = document.getElementById("third"),
		element4 = document.getElementById("fourth");




checkbox1.addEventListener('change', function () {
	function handleButtonClick1() {
		element1.scrollIntoView({block: "start", behavior: "smooth"});
	}
	checkbox1.addEventListener('click', handleButtonClick1);
	if (this.checked) {
		mobile1.style.display = 'block';
		console.log('block');
		if (mobile1.style.display === 'block') {
			mobile4.style.display = 'none';
		}
	} else {
		mobile1.style.display = 'none';
		console.log('unchecked');
	}
})

checkbox2.addEventListener('change', function () {
	if (this.checked) {
		mobile2.style.display = 'block';
		console.log('block');
		function handleButtonClick2() {
			element2.scrollIntoView({block: "start", behavior: "smooth"});
		}
		checkbox2.addEventListener('click', handleButtonClick2);
		if (mobile2.style.display === 'block') {
			mobile3.style.display = 'none';
			mobile4.style.display = 'none';
		}
	} else {
		mobile2.style.display = 'none';
		console.log('unchecked');
	}
});

checkbox3.addEventListener('change', function () {
	if (this.checked) {
		mobile3.style.display = 'block';
		console.log('block');
		function handleButtonClick3() {
			element3.scrollIntoView({block: "start", behavior: "smooth"});
		}
		checkbox3.addEventListener('click', handleButtonClick3);
		if (mobile3.style.display = 'block') {
			mobile2.style.display = 'none';
			mobile4.style.display = 'none';
		}
	} else {
		mobile3.style.display = 'none';
		console.log('unchecked');
	}
});

checkbox4.addEventListener('change', function () {
	if (this.checked) {
		mobile4.style.display = 'block';
		console.log('block');
		function handleButtonClick4() {
			element4.scrollIntoView({block: "start", behavior: "smooth"});
		}
		checkbox4.addEventListener('click', handleButtonClick4);
		if (mobile4.style.display = 'block') {
			mobile1.style.display = 'none';
		}
	} else {
		mobile4.style.display = 'none';
		console.log('unchecked');
	}
});


// if (checkbox.checked === 'block') {
// 	mobile.style.display = 'block';
// } else {
// 	mobile.style.display = 'none';
// 	console.log('unchecked');
// }
