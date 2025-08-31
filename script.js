const toggleCmd = document.querySelector(".sidebar__toggle__cmd");
const commandContainer = document.querySelector(".sidebar__command__container");

toggleCmd.addEventListener("click", (e) => {
  setTimeout(() => {
    commandContainer.classList.toggle("show"); // toggles visibility
  }, 200);
  e.currentTarget.classList.toggle("active");
});

// for tabs

const tablinks = document.querySelectorAll(".tablinks");

tablinks.forEach((element) => {
  element.addEventListener("click", (e) => {
    let i, tabcontent, tablinks;
    let datalink = e.currentTarget.dataset.tab;
    console.log(datalink);

    tabcontent = document.getElementsByClassName("tab");
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    if (datalink !== undefined) {
      document.getElementById(datalink).style.display = "block";
      e.currentTarget.classList.add("active");
    }
  });
});
