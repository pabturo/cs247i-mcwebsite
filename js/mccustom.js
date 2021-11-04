// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top
    }, 'slow');
});

function scrollTo(topicID) {
	var container = $('#backgroundinfo');
	var scrollTo = $(topicID);

	// Calculating new position of scrollbar
	var position = scrollTo.offset().top 
			- container.offset().top 
			+ container.scrollTop();

	// Setting the value of scrollbar
	$("#backgroundinfo").animate({
		scrollTop: position
	})

}

function scrollToCauses() {
	scrollTo("#causes")
}

function scrollToSocial() {
	scrollTo("#socialmedia")
}

function scrollToDunbar() {
	scrollTo("#dunbar")
}

function scrollToFacts() {
	scrollTo("#facts")
}

function scrollToNumbersToCall() {
	scrollTo("#numbersToCall")
}

function scrollToManagingLoneliness() {
	scrollTo("#managingLoneliness")
}
