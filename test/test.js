var alea_test_str = alea("seed_test"),
    alea_test_int = alea(215),
    alea_test_bint = alea(42n);

var rand_test_str = random("seed_test"),
    rand_test_int = random(215),
    rand_test_bint = random(42n);

const pre = document.querySelector('pre');
addTextNode = function(str) {
    let z = document.createTextNode(str);
    pre.appendChild(z);
}

for(let i=0; i<10; i++) {
    addTextNode(`Alea {seed_test}: ${alea_test_str()}\n`);
    addTextNode(`Alea {215}: ${alea_test_int()}\n`);
    addTextNode(`Alea {42n}: ${alea_test_bint()}\n`);
    addTextNode(`random {seed_test}: ${rand_test_str()}\n`);
    addTextNode(`random {215}: ${rand_test_int()}\n`);
    addTextNode(`random {42n}: ${rand_test_bint()}\n`);
}