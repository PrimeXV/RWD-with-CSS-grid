const show1EL = document.getElementById("show1");

const show2EL = document.getElementById("show2");

show1EL.addEventListener("click", () => {
  const select1 = document.getElementById("mySelect");
  
  if (select1.style.display === 'none') {
    select1.style.display = 'block';
  } else {
    select1.style.display = 'none';
  }
});

show2EL.addEventListener("click", () => {
  const select2 = document.getElementById("my-select");

  if (select2.style.display === 'none') {
    select2.style.display = 'block';
  } else {
    select2.style.display = 'none';
  }
});