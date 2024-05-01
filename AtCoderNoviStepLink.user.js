// ==UserScript==
// @name         AtCoderNoviStepLink
// @version      0.9
// @author       Miyuki Kondo
// @match        https://atcoder.jp/contests/*/submissions/*
// @exclude     https://atcoder.jp/contests/*/submissions/me
// @updateURL	https://github.com/AtCoder-NoviSteps/AtCoder-NoviStep-UserScript/raw/main/AtCoderNoviStepLink.user.js
// @downloadURL   https://github.com/AtCoder-NoviSteps/AtCoder-NoviStep-UserScript/raw/main/AtCoderNoviStepLink.user.js
// @supportURL   https://github.com/AtCoder-NoviSteps
// @grant        none
// @description  AtCoderの提出ページにAtCoderNovistepへ遷移できる出来るボタンを設置します。
// ==/UserScript==

function getSubmissionId() {
  let submissionURL = location.href;
  let submissionArray = submissionURL.split('/');
  let submissionId = submissionArray[submissionArray.length - 1];
  return submissionId;
}

function getUserId() {
  const userUrl = document.querySelector("#main-container > div.row > div:nth-child(2) > div:nth-child(8) > table > tbody > tr:nth-child(3) > td > a")
  let userArray = String(userUrl).split('/');
  let userId = userArray[userArray.length - 1]
  return userId;
}


function getTaskId() {
  const taskUrl = document.querySelector("#main-container > div.row > div:nth-child(2) > div:nth-child(8) > table > tbody > tr:nth-child(2) > td > a")
  let taskArray = String(taskUrl).split('/');
  let taskId = taskArray[taskArray.length - 1];
  return taskId;
}

$('#contest-nav-tabs').append(`<div>
    <div id="novi-link">
      <button id="novistep" type="button" class="btn btn-success">Novi!</button>
    </div>
</div>`);

$('#novi-link').click(function() {
    let submissionId = getSubmissionId();
    let taskId = getTaskId();
    let userId = getUserId();
    window.open("https://atcoder-novisteps.vercel.app/problems/"+taskId);
})
