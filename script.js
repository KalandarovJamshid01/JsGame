'use strict';
let swapNum = 2;
let swap = function () {
  if (swapNum % 2 == 0) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
  swapNum++;
};
let randomFunc = function () {
  let soqqaNum = Math.trunc(Math.random() * 6) + 1;
  return soqqaNum;
};
let score = Number(
  document.querySelector(`#current--${swapNum % 2}`).textContent
);

document.querySelector('.btn--roll').addEventListener('click', function () {
  let nowRandom = randomFunc();

  document.querySelector('.dice').src = `dice-${nowRandom}.png`;
  if (nowRandom == 1) {
    swap();
    score = 0;
    const nodelist = document.querySelectorAll(`.current-score`);
    for (let i = 0; i < nodelist.length; i++) {
      nodelist[i].textContent = score;
    }
  } else {
    score += nowRandom;
  }
  document.querySelector(`#current--${swapNum % 2}`).textContent = score;
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  swap();
  let player1Score = Number(
    document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent
  );
  player1Score += score;
  score = 0;
  const nodelist = document.querySelectorAll(`.current-score`);
  for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].textContent = score;
  }
  document.querySelector(`#score--${(swapNum + 1) % 2}`).textContent =
    player1Score;
  if (player1Score > 4) {
    document.querySelector(
      `.player--${(swapNum + 1) % 2}`
    ).style.backgroundColor = '#07c707';
    document.querySelector(`.player--${swapNum % 2}`).style.backgroundColor =
      '#fc3737f6';
    let btnList = document.querySelectorAll('.btn');
    for (let i = 0; i < btnList.length; i++) {
      btnList[i].disabled = true;
    }
    document.querySelector('.btn--new').disabled = false;
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  let btnList = document.querySelectorAll('.btn');
  document.querySelector('.dice').src = `dice-5.png`;
  swapNum = 3;
  swap();
  for (let i = 0; i < btnList.length; i++) {
    btnList[i].disabled = false;
  }
  let scoreList = document.querySelectorAll('.score');
  for (let i = 0; i < scoreList.length; i++) {
    scoreList[i].textContent = '0';
  }
  let currentList = document.querySelectorAll('.current-score');
  for (let i = 0; i < currentList.length; i++) {
    currentList[i].textContent = '0';
  }
});
