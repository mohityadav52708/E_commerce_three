

    const imageList = document.getElementById('imageList');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const shareIcon = document.getElementById('shareIcon');
    const shareLinks = document.getElementById('shareLinks');
  
    let currentIndex = 0;
  
    rightArrow.addEventListener('click', () => {
      if (currentIndex < imageList.children.length - 1) {
        currentIndex++;
        updateImageList();
      }
    });
  
    leftArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateImageList();
      }
    });
  
    shareIcon.addEventListener('mouseenter', () => {
      shareLinks.style.display = 'block';
    });
  
    shareIcon.addEventListener('mouseleave', () => {
      shareLinks.style.display = 'none';
    });
  
    function updateImageList() {
      const newPosition = -currentIndex * 500; // Assuming each image is 300px wide
      imageList.style.transform = `translateX(${newPosition}px)`;
    }


function toggleMenu() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('show');
}


const container = document.querySelector('.container');
const image = document.querySelector('.image');
const zoomedImage = document.querySelector('.zoomed-image');
const cursor = document.querySelector('.cursor');

let isZoomed = false;

container.addEventListener('mousemove', (event) => {
  if (!isZoomed) {
      zoomIn(event);
  }
});

container.addEventListener('mouseout', () => {
  if (isZoomed) {
      zoomOut();
  }
});

function zoomIn(event) {
  const imageSource = image.src;
  const rect = container.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const percentX = (mouseX / rect.width) * 250;
  const percentY = (mouseY / rect.height) * 250;

  cursor.style.left = mouseX - cursor.clientWidth / 2 + 'px';
  cursor.style.top = mouseY - cursor.clientHeight / 2 + 'px';

  zoomedImage.style.backgroundImage = `url('${imageSource}')`;
  zoomedImage.style.backgroundPosition = `${percentX}% ${percentY}%`;
  zoomedImage.style.transform = 'scale(1.3)'; // Adjust the zoom level as needed

  isZoomed = true;
}

function zoomOut() {
  zoomedImage.style.transform = 'scale(0)';
  cursor.style.left = '-250px'; // Move the cursor off-screen
  cursor.style.top = '-250px';

  isZoomed = false;
}

const correctPin = "1234"; // Replace with your correct PIN

function checkPin() {
    const pinInput = document.getElementById("pinInput");
    const resultMessage = document.getElementById("resultMessage");

    if (pinInput.value === correctPin) {
        resultMessage.textContent = "PIN is correct!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "PIN is incorrect. Please try again.";
        resultMessage.style.color = "red";
    }
}

function toggleInfo(infoId) {
  const infoContent = document.getElementById(infoId);
  const dropIcon = infoContent.previousElementSibling.querySelector(".drop-icon");

  if (infoContent.style.display === "block") {
      infoContent.style.display = "none";
      dropIcon.style.transform = "rotate(0deg)";
  } else {
      infoContent.style.display = "block";
      dropIcon.style.transform = "rotate(180deg)";
  }
}

const imageContainer = document.querySelector('.firstcart_second');
    const imageone = document.getElementById('duoimage');

    imageContainer.addEventListener('mouseenter', () => {
        imageone.src = 'https://foxtale.in/cdn/shop/files/BlackheadReduction_6347a197-6412-4b8c-992f-38ece1e6353c.jpg?v=1694086163'; // Replace 'hover-image.jpg' with the path to your hover image
    });

    imageContainer.addEventListener('mouseleave', () => {
        imageone.src = 'https://foxtale.in/cdn/shop/files/BlackheadReduction_6347a197-6412-4b8c-992f-38ece1e6353c.jpg?v=1694086163';
    });

    function submitReview() {
      const name = document.getElementById('name').value;
      const rating = document.getElementById('rating').value;
      const location = document.getElementById('location').value;
      const reviewText = document.getElementById('review').value;

      if (name && rating && location && reviewText) {
          const reviewContainer = document.querySelector('.review');

          const newReview = document.createElement('div');
          newReview.classList.add('review');

          const reviewHeader = document.createElement('p');
          reviewHeader.innerHTML = `<strong>${name} - Rating: ${rating} stars - Location: ${location}</strong>`;

          const reviewParagraph = document.createElement('p');
          reviewParagraph.textContent = reviewText;

          newReview.appendChild(reviewHeader);
          newReview.appendChild(reviewParagraph);

          reviewContainer.parentNode.insertBefore(newReview, reviewContainer.nextSibling);

          // Clear the form
          document.getElementById('name').value = '';
          document.getElementById('rating').value = '5';
          document.getElementById('location').value = '';
          document.getElementById('review').value = '';
      }
  }