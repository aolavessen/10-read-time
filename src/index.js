'use strict';
/* globals numWords, readTime */

const entryinfos = document.querySelectorAll(`.entry__info`);
const entrys = document.querySelectorAll(`.entry`);
const title = document.querySelector(`.title`);

const bodyEl = document.querySelector(`body`);

const blog = document.querySelector(`.blog`);
const nav = document.createElement(`nav`);
nav.classList.add(`navbar`);
blog.appendChild(nav);

bodyEl.insertBefore(nav, title);

for (let i = 0; i < entrys.length; i++) {
  const entryinfo = entryinfos[i];
  const readtime = document.createElement(`li`);
  readtime.classList.add(`read-time`);
  entryinfo.appendChild(readtime);

  const entry = entrys[i];
  const article = entry.querySelector(`.entry__content`).textContent;
  readtime.innerText = `${readTime(article, 200)} mins`;

  const navlink = document.createElement(`a`);
  navlink.setAttribute(`href`, `#${entry.id}`);
  nav.appendChild(navlink);
  navlink.innerText = entry.querySelector(`.entry__title`).innerText;
}
