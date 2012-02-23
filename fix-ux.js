$('#gbq1').click(function(e) {
    // console.log('Clicked!', $('a[title="Inbox"]'), $('#overview-selector').find('a'))
    ev = document.createEvent('MouseEvents');
    ev.initMouseEvent('click', true, true, e.view, 1,
        e.screenX, e.screenY, e.clientX, e.clientY,
        e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
        0, null);

    if ($('a[title="Inbox"]').length > 0) {
        // console.log('dispatching', ev, 'to', $('a[title="Inbox"]')[0])
        $('a[title="Inbox"]')[0].dispatchEvent(ev);
    }
    if ($('#overview-selector').find('a').length > 0) {
        // console.log('dispatching', ev, 'to', $('#overview-selector').find('a')[0])
        $('#overview-selector').find('a')[0].dispatchEvent(ev);
    }
}).css('cursor', 'pointer')

$('#gbql,#gbqlw,#gbq1').css('cursor', 'pointer')
