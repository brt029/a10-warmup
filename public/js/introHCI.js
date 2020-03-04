$(document).ready(function() {
	initializePage();
});

function initializePage() {
	$('.linkClick').click(function(e)
	{
		// e.preventDefault();
		ga("send", "event", "link", "click");
	});
	$('.linkCtr').click(function(e){
		// e.preventDefault();
		ga("send", "event", "link", "click");
	});
}

