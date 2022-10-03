let removeButton = document.querySelector("#removeButton");
let addButton = document.querySelector("#addButton");
let countNumber = document.querySelector("#countNumber");
let starContainer = document.querySelector("#starContainer");
let count = 0;

addButton.addEventListener("click", () => {
  count += 1;
  countNumber.innerHTML = count;
  for (let i = count; i === count; i++) {
    const addStar = document.createElement("span");
    addStar.className = "fa fa-star checked fa-lg";
    starContainer.appendChild(addStar);
  }
});

removeButton.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    let removeStar = starContainer.lastElementChild;
    removeStar.remove();
  }
  countNumber.innerHTML = count;
});