'use strict'

function makeUrl(eve) {
    const email = ($('#email').val());
    const fname = ($('#fname').val());
    const subject = ($('#subject').val());
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=Adirbu98@gmail.com&su=${subject}&body=Hi i was in your site and was hoping to hear more`)
}