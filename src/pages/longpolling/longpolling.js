console.info('longpolling.js LOADED!');

let controller;

function runLongPoll() {

    controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:3001/longpoll', {method: 'get', signal: signal})
        .then(async (response) => {
            const data = await response.json();
            console.log(data);
            runLongPoll();
        })
        .catch((e) => {
            console.log(e);
            console.log('aborted!');
        })
}

const startButton = $('<button>start</button>').on('click', () => {
    console.log('started!');
    runLongPoll();
});
const stopButton = $('<button>stop</button>').on('click', () => {
    controller.abort()
});

$('body').append(startButton);
$('body').append(stopButton);

// runLongPoll();