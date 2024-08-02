const cardList = [
  {
    title: "Scottish Fold",
    image: "cat 3.jpg",
    link: "About Scottish Fold ",
    description:
      "The Scottish Fold is a distinctive breed of domestic cat characterised by a natural dominant gene mutation associated with osteochondrodysplasia. This genetic anomaly affects cartilage throughout the body, causing the ears to fold, bending forward and down towards the front of the head.",
  },
  {
    title: "Ragdoll",
    image: "Ragdoll.jpg",
    link: "About Ragdoll",
    description:
      "The Ragdoll is a breed of cat with a distinct colorpoint coat and blue eyes. Its morphology is large and weighty, and it has a semi-long and silky soft coat. American breeder Ann Baker developed Ragdolls in the 1960s. They are best known for their docile, placid temperament and affectionate nature.",
  },
  {
    title: "British Shorthair",
    image: "shorthair.jpg",
    link: "About Shorthair",
    description:
      "The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, thick coat, and broad face. The most familiar colour variant is the British Blue, with a solid grey-blue coat, pineapple eyes, and a medium-sized tail.",
  },
];

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend = `
      <div class="col s12 m6 center-align">
        <div class="card">
          <div class="card-image">
            <img src="${item.image}" />
            <span class="card-title">${item.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light #0091ea light-blue accent-4">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  addCards(cardList);
  $(".modal").modal();
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    toolbarEnabled: true,
  });
});
