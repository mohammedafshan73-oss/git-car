function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.right = "0";

        nav.style.background = "#080808";

        nav.style.padding = "25px";

        nav.style.width = "220px";
    }
}


// ==============================
// CAR FILTER
// ==============================

function filterCars(category) {

    const cars = document.querySelectorAll(".car-card");

    const buttons = document.querySelectorAll(".filter");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");


    cars.forEach(car => {

        if (category === "all") {

            car.style.display = "block";

        } else {

            if (car.classList.contains(category)) {

                car.style.display = "block";

            } else {

                car.style.display = "none";
            }
        }

    });

}


// ==============================
// CAR DETAILS MODAL
// ==============================

function showDetails(carName) {

    const modal = document.getElementById("carModal");

    const title = document.getElementById("modalTitle");

    title.textContent = carName;

    modal.classList.add("show");

}


function closeModal() {

    const modal = document.getElementById("carModal");

    modal.classList.remove("show");

}


// Close modal when clicking outside

window.addEventListener("click", function(event) {

    const modal = document.getElementById("carModal");

    if (event.target === modal) {

        closeModal();

    }

});


// ==============================
// CONTACT FORM
// ==============================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const car =
            document.getElementById("car").value;


        if (name && car) {

            alert(
                "Thank you, " +
                name +
                "!\n\nYour request for " +
                car +
                " has been received."
            );

            this.reset();

        } else {

            alert("Please fill in all required fields.");

        }

    });


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function() {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,5,5,0.95)";

    } else {

        navbar.style.background = "rgba(5,5,5,0.75)";
    }

});
