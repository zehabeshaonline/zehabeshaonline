const placeBidButton = document.querySelector(".place-bid-button");
const itemsOnBidHolder = document.querySelector(".items-on-bid-holder");

placeBidButton.addEventListener("click", () => {
  let imageInput = document.querySelector(".image-input").files[0];
  let categoryName = document.querySelector(".category-selector").value;
  let descriptionInput = document.querySelector(".description-input").value;
  let priceInput = document.querySelector(".price-input").value;
  let startingPriceInput = document.querySelector(
    ".starting-price-input"
  ).value;

  itemsOnBidHolder.innerHTML += `
        <div class="each-items-on-bid">
          <img
            src="${URL.createObjectURL(imageInput)}"
            alt="sample"
            class="image-on-bid"
          />
          <h3 class="category-name">${categoryName}</h3>
          <p class="description">${descriptionInput}</p>
          <p>Price: ${priceInput}</p>
          <p>Last-Bid: ${startingPriceInput}</p>
          <input
            type="text"
            placeholder="Your Bid"
            class="continue-bid-input"
          />
          <button class="continue-bid-button">Continue Bidding</button>
        </div>
  `;
});
