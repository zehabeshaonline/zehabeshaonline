// Item loader
let preloadInfo = [
  {
    itemimageSource: "./image/ball.png",
    itemName: "Balls",
    itemDescription: "adidas - UEFA Champions League Match ball",
    itemPrice: "$15.00",
  },
  {
    itemimageSource: "./image/jordan.png",
    itemName: "Shoes",
    itemDescription: "Nike Jordan",
    itemPrice: "$130.00",
  },
  {
    itemimageSource: "./image/hoodie.png",
    itemName: "Clothes",
    itemDescription: "Dark Hoodie",
    itemPrice: "$55.00",
  },
  {
    itemimageSource: "./image/cape.png",
    itemName: "Clothes",
    itemDescription: "Blue Cape",
    itemPrice: "$15.00",
  },
  {
    itemimageSource: "./image/boxing-gloves.png",
    itemName: "Clothes",
    itemDescription: "Boxing gloves",
    itemPrice: "$30.00",
  },
  {
    itemimageSource: "./image/laptop1.png",
    itemName: "Laptops",
    itemDescription: `Acer Aspire 3 A3 15-24P-R7VH Slim Laptop | 15.6" Full HD IPS
              Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon
              Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home
              in S Mode1`,
    itemPrice: "$599.99",
  },
  {
    itemimageSource: "./image/laptop2.png",
    itemName: "Laptops",
    itemDescription: `
              HP 17 Laptop, 17.3" FHD Display, 32GB RAM, 1TB SSD, AMD Ryzen 5
              Processor(Beats i7-1165G7, Up to 4.3GHz), Webcam, Numeric Keypad,
              Long Battery Life, Windows 11 Home, Alpacatec Accessories, Silver`,
    itemPrice: "$916.00",
  },
  {
    itemimageSource: "./image/headphone.png",
    itemName: "Electronics",
    itemDescription: "Black Headphone with mic",
    itemPrice: "$37.00",
  },
  {
    itemimageSource: "./image/webcam.png",
    itemName: "Electronics",
    itemDescription: "Webcam",
    itemPrice: "$55.00",
  },
  {
    itemimageSource: "./image/speaker.png",
    itemName: "Electronics",
    itemDescription: "Speaker",
    itemPrice: "$35.00",
  },
  {
    itemimageSource: "./image/watch.png",
    itemName: "Watches",
    itemDescription: "Illumination - LCD watch",
    itemPrice: "$10.00",
  },
  {
    itemimageSource: "./image/cooker.png",
    itemName: "Kitchen Equipments",
    itemDescription: "Cooker",
    itemPrice: "$88.00",
  },
  {
    itemimageSource: "./image/mixer.png",
    itemName: "Kitchen Equipments",
    itemDescription: "Mixer",
    itemPrice: "$118.00",
  },
  {
    itemimageSource:
      "./image/uefa-champions-league-competition-24-25-knockout-phase-ball.png",
    itemName: "Balls",
    itemDescription:
      "UEFA Champions League Competition 24/25 Knockout Phase Ball",
    itemPrice: "$59.00",
  },
  {
    itemimageSource: "./image/tiro-pro-ball.png",
    itemName: "Balls",
    itemDescription: "Tiro Pro Ball",
    itemPrice: "$120.00",
  },
  {
    itemimageSource: "./image/fifa-club-world-cup-25-club-ball.png",
    itemName: "Balls",
    itemDescription: "Fifa Club World Cup 25 Club Ball",
    itemPrice: "$23.00",
  },
  {
    itemimageSource: "./image/uefa-champions-league-third-ball.png",
    itemName: "Balls",
    itemDescription: "UEFA Champions League Third Ball",
    itemPrice: "$170.00",
  },
  {
    itemimageSource: "./image/tory-burch.png",
    itemName: "Shoes",
    itemDescription: "Tory Burch - Double T Howell Court",
    itemPrice: "$148.00",
  },
  {
    itemimageSource: "./image/adidas-f50.png",
    itemName: "Shoes",
    itemDescription:
      "adidas - F50 League Mid Top Firm Ground/Multi Ground Soccer Cleats. Color Blue Fusion/Lucid Lemon/Lucid Pink.",
    itemPrice: "$85.00",
  },
  {
    itemimageSource: "./image/columbia.png",
    itemName: "Shoes",
    itemDescription: "Columbia - Escape Thrive Titanium Mid Outdry",
    itemPrice: "$160.00",
  },
  {
    itemimageSource: "./image/Danner.png",
    itemName: "Shoes",
    itemDescription: "Danner - Traverser 600",
    itemPrice: "$180.00",
  },
  {
    itemimageSource: "./image/audizee-mm100-headphone.png",
    itemName: "Electronics",
    itemDescription: "Audizee - MM-100 headphones",
    itemPrice: "$300.00",
  },
  {
    itemimageSource: "./image/KEFQ150Black.png",
    itemName: "Electronics",
    itemDescription: "KEF Q150 Black Speakers",
    itemPrice: "$450.00",
  },
  {
    itemimageSource: "./image/omen-gaming-laptop.png",
    itemName: "Laptops",
    itemDescription: `OMEN Gaming Laptop 16t-wf100, 16.1" 
    Windows 11 HomeIntel® Core™ i9-14900HX (up to 5.8 GHz 36 MB L3 cache, 24 cores, 32 threads) +
    NVIDIA® GeForce RTX™ 4070 Laptop GPU (8 GB)16 GB DDR5-5600 MHz RAM (2 x 8 GB)1 TB PCIe® NVMe™ TLC M.2 SSD (4x4 SSD)`,
    itemPrice: "$1719.00",
  },
  {
    itemimageSource: "./image/rotary-mens-watch.png",
    itemName: "Watches",
    itemDescription: "Rotary Exclusive Hero Watch",
    itemPrice: "$250.00",
  },
  {
    itemimageSource: "./image/henry-london-adult-watch.png",
    itemName: "Watches",
    itemDescription: "Henry London Smart Watch Adults",
    itemPrice: "$78.00",
  },
  {
    itemimageSource: "./image/armani-mens-watch.png",
    itemName: "Watches",
    itemDescription: "Armani Exchange Banks Watch",
    itemPrice: "$150.00",
  },
  {
    itemimageSource: "./image/dellalienwarem16.png",
    itemName: "Laptops",
    itemDescription: `Alienware m16 R2 Gaming Laptop - Intel® Core™ Ultra 9 185H, 16 cores Windows 11 Pro NVIDIA® GeForce RTX™ 4060 64 GB DDR5 2 TB SSD 16" QHD+`,
    itemPrice: "$2400.00",
  },
  {
    itemimageSource: "./image/dell-xps-16-laptop.png",
    itemName: "Laptops",
    itemDescription: `DELL XPS 16 Laptop Intel® Core™ Ultra 9 185H Windows 11 Pro NVIDIA® GeForce RTX™ 4060
32 GB LPDDR5X 1 TB SSD 16.3" Touch UHD+ OLED`,
    itemPrice: "$2500.00",
  },
  {
    itemimageSource:
      "./image/bluesound-pulse-2i-wireless-multi-room-streaming-speaker.png",
    itemName: "Electronics",
    itemDescription: `Bluesound Pulse 2i Wireless Multi-Room Streaming Speaker`,
    itemPrice: "$678.00",
  },
  {
    itemimageSource: "./image/dell-g15-gaming-laptop.png",
    itemName: "Laptops",
    itemDescription: `13th Gen Intel® Core™ i5-13450HX, 10 cores Windows 11 Home NVIDIA® GeForce RTX™ 3050 8 GB DDR5 512 GB SSD 15.6" FHD`,
    itemPrice: "$700.00",
  },
];

function loadItems(itemImageSource, itemName, itemDescription, itemPrice) {
  const itemSection = document.querySelector(".items-section");

  itemSection.innerHTML += `
  <div class="item-container">
    <img class="item-image" src="${itemImageSource}" alt="item-image"/>
    <div class="description-container">
      <h3 class="description-title">${itemName}</h3>
      <p class="description">${itemDescription}</p>
      <p class="price">Price: ${itemPrice}</p>
      <button class="add-cart-button">
        Add to Cart
        <img
          src="./image/svg/cart2.svg"
          alt="cart"
          class="cart-image-on-add-to-cart-button"
        />
      </button>
    </div>
  </div>`;
}

let loadRandomArray = [];
for (let i = 0; i < preloadInfo.length; i++) {
  loadRandomArray.push(i);
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(loadRandomArray);

for (let i = 0; i < preloadInfo.length; i++) {
  loadItems(
    preloadInfo[loadRandomArray[i]].itemimageSource,
    preloadInfo[loadRandomArray[i]].itemName,
    preloadInfo[loadRandomArray[i]].itemDescription,
    preloadInfo[loadRandomArray[i]].itemPrice
  );
}

// Important Variables
const items = document.querySelectorAll(".item-container");
const itemCategory = document.querySelectorAll(".description-title");
const description = document.querySelectorAll(".description");
const messageDiv = document.querySelector(".message-div");

// Search
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => {
  for (let i = 0; i < itemCategory.length; i++) {
    let contains = false;

    if (
      itemCategory[i].innerHTML
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      contains = true;
    }

    if (contains) {
      items[i].style.display = "flex";
    } else {
      items[i].style.display = "none";
    }
  }
});

// Filter Checkbox
const filterCheckboxes = document.querySelectorAll(
  ".category-filter-checkboxes"
);
filterCheckboxes.forEach((eachFilterCheckbox) => {
  eachFilterCheckbox.checked = true;
});
const whenEmptyContainer = document.querySelector(".when-empty-container");

let selectedCategory = [];
let selectedCategoryItems = [];
let unselectedCategoryItems = [];

function displayItems() {
  if (selectedCategoryItems.length !== 0) {
    for (let i = 0; i < selectedCategoryItems.length; i++) {
      selectedCategoryItems[i].style.display = "flex";
    }
    for (let i = 0; i < unselectedCategoryItems.length; i++) {
      unselectedCategoryItems[i].style.display = "none";
    }
  }
}

function filterItems() {
  if (selectedCategory.length !== 0) {
    // Resetting Values
    whenEmptyContainer.style.display = "none";
    unselectedCategoryItems = [];
    selectedCategoryItems = [];

    for (let i = 0; i < items.length; i++) {
      unselectedCategoryItems.push(items[i]);
    }

    // Giving values to the selected and unselected items
    // Selected items
    for (let index = 0; index < selectedCategory.length; index++) {
      for (let i = 0; i < items.length; i++) {
        if (itemCategory[i].innerHTML == selectedCategory[index]) {
          selectedCategoryItems.push(
            itemCategory[i].parentElement.parentElement
          );
        }
      }
    }

    // Unselected Items
    for (let i = 0; i < selectedCategoryItems.length; i++) {
      for (let index = 0; index < items.length; index++) {
        if (items[index].innerHTML == selectedCategoryItems[i].innerHTML) {
          let indexOfSelectedItem = unselectedCategoryItems.indexOf(
            selectedCategoryItems[i]
          );

          unselectedCategoryItems.splice(indexOfSelectedItem, 1);
        }
      }
    }

    displayItems();
  } else {
    items.forEach((eachItem) => {
      eachItem.style.display = "none";
    });
    whenEmptyContainer.style.display = "block";
  }
}

filterCheckboxes.forEach((eachFilterCheckbox) => {
  eachFilterCheckbox.addEventListener("change", () => {
    if (eachFilterCheckbox.parentElement.children[1].innerHTML !== "All") {
      filterCheckboxes[0].checked = false; // If the checkbox all is selected, this will deselect it

      selectedCategory = [];

      for (let i = 0; i < filterCheckboxes.length; i++) {
        if (filterCheckboxes[i].checked == true) {
          selectedCategory.push(
            filterCheckboxes[i].parentElement.children[1].innerHTML
          );
        }
      }

      filterItems();
    } else {
      if (eachFilterCheckbox.checked == true) {
        selectedCategory = [];

        // Select All Elements
        for (let i = 0; i < filterCheckboxes.length; i++) {
          filterCheckboxes[i].checked = true;
          selectedCategory.push(
            filterCheckboxes[i].parentElement.children[1].innerHTML
          );
        }

        filterItems();
      } else {
        selectedCategory = [];

        // Select All Elements
        for (let i = 0; i < filterCheckboxes.length; i++) {
          filterCheckboxes[i].checked = false;
        }

        filterItems();
      }
    }
  });
});

// When description for items is too long
let originalDescription = [];

for (let i = 0; i < description.length; i++) {
  if (description[i].innerHTML.length > 100) {
    originalDescription.push(description[i].innerHTML);
    description[i].innerHTML = description[i].innerHTML.slice(0, 100);
    description[i].innerHTML += "...";
  }
}

// Item Viewer
const itemClickable = document.querySelectorAll(
  ".item-image, .description, .description-title, .price"
);
const itemViewer = document.querySelector(".item-viewer-container");
const blurredDiv = document.querySelector(".blurred-div");
const closeViewerButton = document.querySelector(".close-viewer-button");

const itemViewerImage = document.querySelector(".item-image-in-viewer");
const itemViewerTitle = document.querySelector(".description-title-on-viewer");
const itemViewerDescription = document.querySelector(".description-on-viewer");
const itemViewerPrice = document.querySelector(".price-on-viewer");

itemClickable.forEach((eachClickable) => {
  eachClickable.onclick = () => {
    // to stop the body from scrolling
    document.body.style.overflow = "hidden";
    itemViewer.style.display = "block";
    blurredDiv.style.display = "block";

    if (eachClickable.innerHTML != "") {
      itemViewerImage.src =
        eachClickable.parentElement.parentElement.children[0].src;
      let itemTitle =
        eachClickable.parentElement.parentElement.children[1].querySelector(
          ".description-title"
        );
      let itemDescription =
        eachClickable.parentElement.parentElement.children[1].querySelector(
          ".description"
        );
      let itemPrice =
        eachClickable.parentElement.parentElement.children[1].querySelector(
          ".price"
        );

      itemViewerTitle.innerHTML = itemTitle.innerHTML;
      if (itemDescription.innerHTML.length > 100) {
        for (let i = 0; i < originalDescription.length; i++) {
          let slicedDescription = originalDescription[i].slice(0, 100);
          slicedDescription += "...";
          if (slicedDescription == itemDescription.innerHTML) {
            itemViewerDescription.innerHTML = originalDescription[i];
          }
        }
      } else {
        itemViewerDescription.innerHTML = itemDescription.innerHTML;
      }

      itemViewerPrice.innerHTML = itemPrice.innerHTML;
    } else {
      itemViewerImage.src = eachClickable.src;
      let itemTitle =
        eachClickable.parentElement.children[1].querySelector(
          ".description-title"
        );
      let itemDescription =
        eachClickable.parentElement.children[1].querySelector(".description");
      let itemPrice =
        eachClickable.parentElement.children[1].querySelector(".price");

      itemViewerTitle.innerHTML = itemTitle.innerHTML;

      if (itemDescription.innerHTML.length > 100) {
        for (let i = 0; i < originalDescription.length; i++) {
          let slicedDescription = originalDescription[i].slice(0, 100);
          slicedDescription += "...";
          if (slicedDescription == itemDescription.innerHTML) {
            itemViewerDescription.innerHTML = originalDescription[i];
          }
        }
      } else {
        itemViewerDescription.innerHTML = itemDescription.innerHTML;
      }

      itemViewerPrice.innerHTML = itemPrice.innerHTML;
    }
  };
});

closeViewerButton.onclick = () => {
  itemViewer.style.display = "none";
  blurredDiv.style.display = "none";
  // to reset the body's scrolling property
  document.body.style.overflow = "visible";
};

// Cart functionality
const addToCartButton = document.querySelectorAll(".add-cart-button");
const addToCartButtonOnViewer = document.querySelectorAll(
  ".add-cart-button-on-viewer"
);
const cartOpenerImage = document.querySelector(".cart-opener-image-container");
const closeCartButton = document.querySelector(".close-cart-button");

let cartContainer = document.querySelector(".cart-container");
const priceCalculatorContainer = document.querySelector(".price-calculator");
let count = 1; // Because I added an element in the cart container(Check on HTML)
let firstTime = true;
let numberOfTimesClicked = 0;
let numberOfSetTimeoutStarted = 0;

cartOpenerImage.onclick = () => {
  closeCartButton.style.display = "block";
  cartContainer.style.display = "block";
  blurredDiv.style.display = "block";
  priceCalculatorContainer.style.display = "block";
  // to stop the body from scrolling
  document.body.style.overflow = "hidden";
};

// Adding items to cart
addToCartButton.forEach((eachButton) => {
  eachButton.onclick = () => {
    if (firstTime) {
      cartContainer.innerHTML = `
        <h1 class="cart-title">Cart</h1>
            
        <div class="each-items-in-cart">
          <img src="" alt="item-image" />
          <section>
            <h3 class="item-title-in-cart"></h3>
            <p class="price-in-cart"></p>
          </section>
        </div>`;
      firstTime = false;
    } else {
      cartContainer.innerHTML += `      
        <div class="each-items-in-cart">
          <img src="" alt="item-image" />
          <section>
            <h3 class="item-title-in-cart"></h3>
            <p class="price-in-cart"></p>
          </section>
        </div>`;
    }

    let itemImage = eachButton.parentElement.parentElement.children[0];
    let itemTitle =
      eachButton.parentElement.querySelector(".description-title");
    let itemPrice = eachButton.parentElement.querySelector(".price");

    let cartItemImage = cartContainer.children[count].children[0];
    let cartItemTitle = cartContainer.children[count].children[1].querySelector(
      ".item-title-in-cart"
    );
    let cartItemPrice =
      cartContainer.children[count].children[1].querySelector(".price-in-cart");

    cartItemImage.src = itemImage.src;
    cartItemTitle.innerHTML = itemTitle.innerHTML;
    cartItemPrice.innerHTML = itemPrice.innerHTML;
    count++;

    // Price Calculator
    const totalPriceInCart = document.querySelector(".total-price-in-cart");
    const eachItemsInCart = document.querySelectorAll(".each-items-in-cart");
    let totalPrice = 0;

    for (let i = 0; i < eachItemsInCart.length; i++) {
      const eachItemsPriceString =
        eachItemsInCart[i].children[1].children[1].innerHTML;

      totalPrice += parseInt(
        eachItemsPriceString.slice(8, eachItemsPriceString.length - 1)
      );
    }

    totalPriceInCart.innerHTML = totalPrice;

    // Message
    numberOfTimesClicked++;

    messageDiv.children[0].innerHTML =
      "Your item was successfully added to your cart.";
    messageDiv.style.transition = "0s";
    messageDiv.style.opacity = "1";

    let messageTimer = setTimeout(() => {
      messageDiv.style.transition = ".3s";
      messageDiv.style.opacity = "0";
      numberOfSetTimeoutStarted++;
    }, 2000);

    if (numberOfTimesClicked !== numberOfSetTimeoutStarted + 1) {
      clearTimeout(messageTimer);
      numberOfSetTimeoutStarted++;
    }
  };
});

addToCartButtonOnViewer.forEach((eachButton) => {
  eachButton.onclick = () => {
    if (firstTime) {
      cartContainer.innerHTML = `
        <h1 class="cart-title">Cart</h1>
            
        <div class="each-items-in-cart">
          <img src="" alt="item-image" />
          <section>
            <h3 class="item-title-in-cart"></h3>
            <p class="price-in-cart"></p>
          </section>
        </div>`;
      firstTime = false;
    } else {
      cartContainer.innerHTML += `      
        <div class="each-items-in-cart">
          <img src="" alt="item-image" />
          <section>
            <h3 class="item-title-in-cart"></h3>
            <p class="price-in-cart"></p>
          </section>
        </div>`;
    }

    let itemImage = eachButton.parentElement.parentElement.children[1];
    let itemTitle = eachButton.parentElement.querySelector(
      ".description-title-on-viewer"
    );
    let itemPrice = eachButton.parentElement.querySelector(".price-on-viewer");

    let cartItemImage = cartContainer.children[count].children[0];
    let cartItemTitle = cartContainer.children[count].children[1].querySelector(
      ".item-title-in-cart"
    );
    let cartItemPrice =
      cartContainer.children[count].children[1].querySelector(".price-in-cart");

    cartItemImage.src = itemImage.src;
    cartItemTitle.innerHTML = itemTitle.innerHTML;
    cartItemPrice.innerHTML = itemPrice.innerHTML;
    count++;

    // Price Calculator
    const totalPriceInCart = document.querySelector(".total-price-in-cart");
    const eachItemsInCart = document.querySelectorAll(".each-items-in-cart");
    let totalPrice = 0;

    for (let i = 0; i < eachItemsInCart.length; i++) {
      const eachItemsPriceString =
        eachItemsInCart[i].children[1].children[1].innerHTML;

      totalPrice += parseInt(
        eachItemsPriceString.slice(8, eachItemsPriceString.length - 1)
      );
    }

    totalPriceInCart.innerHTML = totalPrice;

    // Message
    messageDiv.children[0].innerHTML =
      "Your item was successfully added to your cart.";
    messageDiv.style.transition = "0s";
    messageDiv.style.opacity = "1";
    setTimeout(() => {
      numberOfSetTimeoutStarted++;
      messageDiv.style.transition = ".3s";
      messageDiv.style.opacity = "0";
    }, 2000);
  };
});

closeCartButton.addEventListener("click", () => {
  closeCartButton.style.display = "none";
  blurredDiv.style.display = "none";
  cartContainer.style.display = "none";
  priceCalculatorContainer.style.display = "none";
  // to reset the body's scrolling property
  document.body.style.overflow = "visible";
});

blurredDiv.onclick = () => {
  closeCartButton.style.display = "none";
  blurredDiv.style.display = "none";
  cartContainer.style.display = "none";
  itemViewer.style.display = "none";
  priceCalculatorContainer.style.display = "none";
  // to reset the body's scrolling property
  document.body.style.overflow = "visible";
};

// Purchasing items section

// const purchaseButton = document.querySelector(".purchase-button-on-cart");

// purchaseButton.onclick = () => {
//   const totalPriceInCart = document.querySelector(".total-price-in-cart");
//   firstTime = true;
//   cartContainer.innerHTML = `      <h1 class="cart-title">Cart</h1>
//       <div class="price-calculator">
//         <span>Total Price: </span><span class="total-price-in-cart">0.00</span
//         ><span class="dollar-sign-in-cart">$</span>
//
//       </div>
//       <div class="when-cart-is-empty-container">
//         <p class="when-cart-is-empty-text">
//           Your cart is empty. Add items to your cart if you want to purchase.
//         </p>
//         <img
//           src="./image/empty-cart.png"
//           alt="empty cart"
//           class="empty-cart-image"
//         />
//       </div>`;

//   messageDiv.children[0].innerHTML =
//     "Your item will be delivered to your location.";
//   messageDiv.style.transition = "0s";
//   messageDiv.style.opacity = "1";
//   setTimeout(() => {
//     messageDiv.style.transition = ".3s";
//     messageDiv.style.opacity = "0";
//   }, 2000);

//   totalPriceInCart.innerHTML = "0";
// };

const footer = document.querySelector("footer");
const categoryFilterHolder = document.querySelector(".category-filter-holder");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    document.body.offsetHeight - footer.offsetHeight - window.innerHeight
  ) {
    categoryFilterHolder.classList.add("category-filter-holder-added");
  } else {
    categoryFilterHolder.classList.remove("category-filter-holder-added");
  }
});
