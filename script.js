//Hi I'm neha.
const list = document.querySelector(".list");
const nodes = document.querySelectorAll(".node");

nodes.forEach((node) => {
  node.addEventListener("dragstart", () => {
    //adding dragging class tothe node getting dragged
    setTimeout(() => node.classList.add("dragging"), 0);
    console.log("dragging");
  });

  node.addEventListener("dragend", () => {
    node.classList.remove("dragging");
    console.log("dragged");
  });
});

const SortList = (e) => {
  const draggingItem = list.querySelector(".dragging");
  //sibling are the nodes which have no .dragging 
  const siblings = [...list.querySelectorAll(".node:not(.dragging)")];

  //Finding sibling after which the dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  //node with dragging class is to be inserted at nextSibling place
  list.insertBefore(draggingItem, nextSibling);
};

list.addEventListener("dragover", SortList);
