function togglePrice() {
	const billing = document.querySelector('.billing');
	const billingItems = document.querySelectorAll('.billing__item')

	billing.addEventListener('click', () => {
		billing.classList.toggle('active')

		if (!billing.classList.contains('active')) {
			billingItems[0].classList.add('active')
			billingItems[2].classList.remove('active')
		}
		else {
			billingItems[0].classList.remove('active')
			billingItems[2].classList.add('active')
		}
	})
}

togglePrice();

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  let panel = this.nextElementSibling;
	  if (panel.style.maxHeight){
		panel.style.maxHeight = null;
	  } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	  } 
	});
  }


let block = document.querySelectorAll('.block__item');

// block.addEventListener("click", ()=>{
// 	block[1].classList.add('active_block')
// });

for(let i=0; i<block.length; i++){
	block[i].onclick = ()=> {
		block[i].classList.add('active_block')
		if(block[0].classList.contains('active_block')){
			block[1].classList.remove('active_block')
		}else{
			block[0].classList.remove('active_block')
			block[1].classList.add('active_block')

		}
		
	}
}