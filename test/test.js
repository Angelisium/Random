var alea_test_vid = alea(),
    alea_test_str = alea("seed_test"),
    alea_test_int = alea(215),
    alea_test_bint = alea(42n);

var rand_test_vid = random("undefined"), // for work like alea()
    rand_test_str = random("seed_test"),
    rand_test_int = random(215),
    rand_test_bint = random(42n);

const pre = document.querySelector('pre');
addTextNode = function(str) {
    let z = document.createTextNode(str);
    pre.appendChild(z);
}

for(let i=0; i<10; i++) {
    addTextNode(`Alea {}: ${alea_test_vid()} \t\t\t random {}: ${rand_test_vid()}\n`);
    addTextNode(`Alea {seed_test}: ${alea_test_str()} \t\t random {seed_test}: ${rand_test_str()}\n`);
    addTextNode(`Alea {215}: ${alea_test_int()} \t\t random {215}: ${rand_test_int()}\n`);
    addTextNode(`Alea {42n}: ${alea_test_bint()} \t\t\t random {42n}: ${rand_test_bint()}\n`);
    addTextNode(`\n`);
}

var randrange = random("seed");

for(let i=0; i<10; i++) {
    addTextNode(`${randrange.toRange(0,5)} \t`);
    addTextNode(`${randrange.toFloatRange(0.5,5.5)} \t`);
}