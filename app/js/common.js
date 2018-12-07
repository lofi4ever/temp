document.addEventListener('DOMContentLoaded', function() {
	var form = document.querySelector('#form');
	var submitBtn = document.querySelector('#form-submit');
	// submitBtn.addEventListener('click', function() {
	// 	form.submit();
	// });
	form.addEventListener('submit', function(e) {
		var fields = this.querySelectorAll('.req');
		var isValid = true;
		[].forEach.call(fields, function(field) {
			switch(field.getAttribute('data-type')) {
				case 'checkbox':
					field.parentNode.classList.remove('error');
					if(!field.checked) {
						isValid = false;
						field.parentNode.classList.add('error');
					}
					break;
				default:
					field.classList.remove('error');
					if(!field.value.length) {
						isValid = false;
						field.classList.add('error');
					}
			}
		});
		if(!isValid) e.preventDefault();
	});
});