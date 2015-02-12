(function() {
	var _old;
	$('#J_menu').delegate('td', 'click', function(e) {
		if(_old) {
			_old.removeClass('active');
		}else {
			$('#J_menu .active').removeClass('active');
		}
		$(this).addClass('active');
		_old = $(this);
	});
})();