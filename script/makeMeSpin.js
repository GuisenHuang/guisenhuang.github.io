document.querySelector('#makeMeSpin-1').addEventListener('click', function(event) {
    var event = event||window.event;
    event.target.classList.toggle('makeMeSpin-1');
});

document.querySelector('#makeMeSpin-2').addEventListener('click', function(event) {
    var event = event||window.event;
    document.querySelector('#makeMeSpin-2').classList.toggle('makeMeSpin-2');
});

document.querySelector('#makeMeSpin-3').addEventListener('click', function(event) {
    var event = event||window.event;
    event.target.classList.toggle('makeMeSpin-3');
});