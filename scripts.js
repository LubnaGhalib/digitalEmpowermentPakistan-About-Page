const searchBtn = document.getElementById('searchBtn');
    const navbar = document.getElementById('navbar');
    const searchInput = document.createElement('input');
    let isSearchOpen = false;

    searchInput.classList.add('form-control', 'search-input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search...');

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (!isSearchOpen) {
            // Change to close icon
            searchBtn.innerHTML = '<i class="fas fa-times"></i>';
            isSearchOpen = true;
            // Show search input
            showSearchBox();
        } else {
            // Change back to search icon
            searchBtn.innerHTML = '<i class="fas fa-search"></i>';
            isSearchOpen = false;
            // Hide search input
            hideSearchBox();
        }
    });

    function showSearchBox() {
        // Append search input to navbar
        navbar.appendChild(searchInput);
        searchInput.focus(); // Focus on the input field
    }

    function hideSearchBox() {
        // Remove search input from navbar
        navbar.removeChild(searchInput);
    }
        const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        author: "Ricky Aprilia",
        position: "Founder of Varibo"
    },
    {
        text: "Lorem ipsum dolor sit amet, mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        author: "John Steve",
        position: "CEO of ABC"
    },
    {
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        author: "Ricky Aprilia",
        position: "Founder of Varibo"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        author: "Ricky Aprilia",
        position: "Founder of Varibo"
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        author: "Ricky Aprilia",
        position: "Founder of Varibo"
    }
];

let currentIndex = 0;
const testimonialText = document.getElementById("testimonial-text").querySelector("p");
const testimonialAuthor = document.getElementById("testimonial-author");
const testimonialPosition = document.getElementById("testimonial-position");
const images = document.querySelectorAll(".testimonial-navigation img");

function showTestimonial(index, autoplay = false) {
    testimonialText.innerText = testimonials[index].text;
    testimonialAuthor.innerText = testimonials[index].author;
    testimonialPosition.innerText = testimonials[index].position;

    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    currentIndex = index;

   if (!autoplay) {
        // Prevent scrolling to testimonial section on page load or refresh
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
}

function autoplayTestimonials() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex, true);
}

setInterval(autoplayTestimonials, 5000);

document.addEventListener("DOMContentLoaded", () => {
    showTestimonial(0);
});

