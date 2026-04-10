document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        runValidation();
    })


    function runValidation() {
        const errors = [];

        // Getting the elements
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const petname = document.getElementById("petname");
        const pettype = document.getElementById("pettype");
        const medium = document.getElementById("medium");
        const size = document.getElementById("size");

        // Validation Check

        // Checking Name is valid 
        if (!name.value.trim()) {
            errors.push({ id: "name", message: "Please enter your name" });
        }

        // Checking valid email
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            errors.push({ id: "email", message: "Please enter your email address." })
        } else if (!validEmail.test(email.value.trim())) {
            errors.push({ id: "email", message: "Please enter a valid email address" })
        }

        // Checking pet name is valid 
        if (!petname.value.trim()) {
            errors.push({ id: "petname", message: "Please enter your pet's name." })
        }

        // Checking pet type is valid 
        if (!pettype.value) {
            errors.push({ id: "pettype", message: "Please select a type of pet." });
        }

        // Checking medium is selected 
        if (!medium.value) {
            errors.push({ id: "medium", message: "Please select a preferred medium." });
        }

        // Checking size is selected 
        if (!size.value) {
            errors.push({ id: "size", message: "Please select a preferred size." });
        }

        renderSummary(errors);
        return errors;

    }


    // Render Errors
    function renderSummary(errors) {
        let summary = document.getElementById("error-summary");

        if (errors.length === 0) {
            summary.innerHTML = "";
            summary.removeAttribute("role");
            summary.removeAttribute("tabindex");
            return;
        }

        summary.setAttribute("role", "alert");
        summary.setAttribute("tabindex", "-1");

        summary.innerHTML = `<p class="error-summary-heading">Please fix the following before continuing:</p>
      <ul>
        ${errors.map(err => `<li><a href="#${err.id}">${err.message}</a></li>`).join("")}
      </ul>`;

        summary.scrollIntoView();
        summary.focus();
    }


    // Submit handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const errors = runValidation();

        if (errors.length === 0) {
            emailjs.sendForm("service_ad8i0ak", "template_t4vjoyj", form)
                .then(() => {
                    showSuccess();
                })
                .catch((err) => {
                    console.error("EmailJS error:", err);
                    alert("Something went wrong. Please try again.");
                });
        }
    });

    // Submit success
    function showSuccess() {
    const formWrap = document.getElementById("formWrap");
    formWrap.innerHTML = `
        <div class="form-success">
            <h3>Thank you!</h3>
            <p>Gordon will be in touch within 48 hours.</p>
        </div>
    `;
}


});