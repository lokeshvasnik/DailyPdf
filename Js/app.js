const date = document.querySelector('.date');

const todaysDate = new Date().toISOString().slice(0, 10);

const printBtn = document.getElementById('print');

date.textContent = `Date : ${todaysDate}`;

$(document).ready(function () {
  $('#print').click(function () {
    $('#content').printThis();
  });
});
