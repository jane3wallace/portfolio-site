$(document).ready(function() {

    // Smooth scroll
	$('.smooth').on('click', function() {
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#' + this.id
        });
        
        return false;
    });

	// Foundation 6
    $(document).foundation()

});