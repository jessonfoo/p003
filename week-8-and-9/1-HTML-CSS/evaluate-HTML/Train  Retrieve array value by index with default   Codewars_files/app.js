window.alert = $.noop
window.prompt = $.noop
window.confirm = $.noop
window.print = $.noop
window.open = $.noop

window.addEventListener('message', function(e, b){
    if (e.origin.indexOf('codewars') > 0){
        $('body').html(e.data)
    }
});

