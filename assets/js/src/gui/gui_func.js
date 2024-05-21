function toggle_class(el, selected = act_class) {
	var display = $(el).parent().find(el);
	if (!(display.hasClass(selected))) {
		display.addClass(selected);
	} else {
		display.removeClass(selected);
	}
}

function open_modal(modal) {
	$(mask).fadeIn(anim_time);
	$('#' + $(modal).attr('modal')).delay(anim_time).fadeIn(anim_time);
}

function close_modal(modal) {
	$(mask).delay(anim_time).fadeOut(anim_time);
	$('#' + $(modal).attr('modal')).fadeOut(anim_time);
}

function force_close_all_modals() {
	$('.modal').fadeOut(anim_time);
	$(mask).delay(anim_time).fadeOut(anim_time);
}

function toggle_clients(item) {
    toggle_class(item, 'actived');
    $('#' + $(item).attr('list')).fadeToggle();
}