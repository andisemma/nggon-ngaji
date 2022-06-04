function hidup(param) {
  let lapar = param;
  return lapar == 'makan' ? 'kenyang' : 'belum makan';
}

console.log(hidup('makan'));

function tidur(param) {
  let mengantuk = param;
  return mengantuk == 'tidur' ? 'rasa kantuk telah hilang' : 'masih mengantuk';
}

console.log(tidur('tidur'));

function loop() {
  for (let i = 0; i <= 15; i++) {
    console.log(i);
  }
}
loop();

function regex(text) {
  return text == 'teknologi kartu indonesia 2021'
    ? 'tekno kartu indonesia'
    : text;
}
console.log(regex('teknologi kartu indonesia 2021'));

function loop2() {
  for (let i = 1; i <= 100; i++) {
    console.log(i % 3 == 0 ? i + ' bilangan ganjil' : i);
  }
}

loop2();
