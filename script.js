function createCards(
  duration,
  title,
  cName = "CodeWithHarry",
  views,
  monthsOld,
  thumbnail
) {
  let viewsStr;
  if (views < 1000) {
    viewsStr = views;
  } else if (views > 1000000) {
    viewsStr = views / 1000000 + "M";
  } else {
    viewsStr = views / 1000 + "K";
  }

  let html = `<div class="card">
  <div class="img">
    <img src="${thumbnail}" />
    <div class="duration">
      <p id="duration-1">${duration}</p>
    </div>
  </div>

  <div id="text">
    <h1>
      ${title}
    </h1>
    <p>${cName} • ${viewsStr} views • ${monthsOld} months ago</p>
  </div>
</div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCards(
  "28:31",
  "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
  "CodeWithHarry",
  417000,
  3,
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg"
);

createCards(
  "11:12",
  "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
  "CodeWithHarry",
  256000,
  3,
  "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAjPtvUdoA1O40DUFC8U1NdTYLk1g"
);

createCards(
  "19:34",
  "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
  "CodeWithHarry",
  218000,
  2,
  "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBEoDwrQoTELgI-X7BTCJYva_ekhg"
);

createCards(
  "18:20",
  "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
  "CodeWithHarry",
  214000,
  2,
  "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWvC8YQRU7FJg3FqTenAIsD_zwGA"
);

createCards(
  "13:16",
  "SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6",
  "CodeWithHarry",
  179000,
  2,
  "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB4MUD7yI9POyiPhpkdbbROC1SUVg"
);

createCards(
  "14:53",
  "Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7",
  "CodeWithHarry",
  154000,
  2,
  "https://i.ytimg.com/vi/tLBlhp0SA_0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBPzDL_Iq6gM8j8c1rk8oWIDDzfbg"
);

createCards(
  "10:52",
  "Inline & Block Elements in HTML | Sigma Web Development Course - Tutorial #8",
  "CodeWithHarry",
  119000,
  2,
  "https://i.ytimg.com/vi/vnnlUCLfn6I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA8ZtewZA6etXJHDYGx0z4RhfuDmw"
);

createCards(
  "10:57",
  "Id & Classes in HTML | Sigma Web Development Course - Tutorial #9",
  "CodeWithHarry",
  100000,
  2,
  "https://i.ytimg.com/vi/vlAWzsGd-Yk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC830EEJIU2uT1hRJFDVcji8Amz2w"
);

createCards(
  "14:48",
  "Video, Audio & Media in HTML | Sigma Web Development Course - Tutorial #10",
  "CodeWithHarry",
  129000,
  2,
  "https://i.ytimg.com/vi/XZwBNDGuWGU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCIsiiqL97W2OHrxaaMJrfbxotmyg"
);
