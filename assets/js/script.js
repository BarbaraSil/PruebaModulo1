$(function() {

	$('a').click(function(event) {

		console.log(this.hash)
		
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop: $(gato).offset().top
			}, 800, function(){
			  window.location.hash = gato;	
			});
		}
	});

	$('[data-toggle="tooltip"]').tooltip()
});