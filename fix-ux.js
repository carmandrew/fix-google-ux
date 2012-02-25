const logoSelector = '#gbq1';
const gmailSelector = 'a[title="Inbox"]';

// If you prefer the reading list in Reader, use this selector:
const readerSelector = '#reading-list-selector';

// If you prefer the overview in Reader, use this selector:
// const readerSelector = '#overview-selector';

$(function() {
    $(logoSelector).live("click", function(e) {
        // console.log('Clicked!', $(gmailSelector), $(readerSelector).find('a'));
        var ev = document.createEvent('MouseEvents');
        ev.initMouseEvent('click', true, true, e.view, 1,
            e.screenX, e.screenY, e.clientX, e.clientY,
            e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
            0, null);

        if ($(gmailSelector).length > 0) {
            // console.log('dispatching', ev, 'to', $(gmailSelector)[0])
            $(gmailSelector)[0].dispatchEvent(ev);
        }
        if ($(readerSelector).find('a').length > 0) {
            // console.log('dispatching', ev, 'to', $(readerSelector).find('a')[0])
            $(readerSelector).find('a')[0].dispatchEvent(ev);
        }
    })
    // console.log('got ', $(logoSelector));
});
