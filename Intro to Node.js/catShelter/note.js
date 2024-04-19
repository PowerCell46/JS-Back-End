const listeners = {};


function publish(eventName, ...args) {
    if (!listeners[eventName]) {
        return 
    };

    listeners[eventName].forEach(listener => listener(...args));
}


function subscribe(eventName, eventListener) {
    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventListener);

    return () => {
        listeners[eventName] =  listeners[eventName].filter((list) => list !== eventListener);
        console.log(`You have been unsubscribed from ${eventName}.`);
    }
}


subscribe("ivan-added", () => console.log("Hello there"));

subscribe("ivan-added", (age) => console.log(`I am ${age} years old.`));

subscribe("ivan-added", (age, friend, activity) => console.log(`С авера ${friend} ще ${activity}!`));

publish("ivan-added", 16, "Stilitoo", "ходиме у Флейма");