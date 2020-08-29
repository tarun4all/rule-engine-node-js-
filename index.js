const fastify = require('fastify');
const app = fastify();
const {Engine} = require('json-rules-engine');

let engine = new Engine();

engine.addRule({
    conditions: {
        all: [
            {
                fact: "temperature",
                operator: "equal",
                value: 100
            }
        ]
    },
    onSuccess(e) {
        console.log('Sucess', e);
    },
    onFailure(e) {
        console.log('Failure', e);
    },
    event: {
        type: "message",
        params: {
            data: "hello-world"
        }
    }
});

engine.addRule({
    conditions: {
        all: [
            {
                fact: "fahrenheit",
                operator: "greaterThanInclusive",
                value: 10
            }
        ]
    },
    onSuccess(e) {
        console.log('yeah Sucess', e);
    },
    onFailure(e) {
        console.log('yeah Failure', e);
    },
    event: {
        type: "message",
        params: {
            data: "hello-world"
        }
    }
});

const facts = {temperature: 100, fahrenheit: 5}

engine.run(facts).then(results => {
    // results.events.map(event => console.log(event.params.message))
    console.log(results)
  });

app.listen(3002);