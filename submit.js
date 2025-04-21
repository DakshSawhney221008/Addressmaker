document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("realEstateForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent default form submit

        const formData = new FormData(form);

        // Now you can extract values
        const fullName = formData.get("fullName");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const budget = formData.get("budget");
        const bedrooms = formData.get("bedrooms");
        const bathrooms = formData.get("bathrooms");
        const propertyType = formData.get("propertyType");
        const location = formData.get("location");
        const moveInDate = formData.get("moveInDate");
        const livingAtProperty = formData.get("livingAtProperty");
        const propertyLoan = formData.get("propertyLoan");
        const representation = formData.get("representation");
        const inquiryType = formData.get("inquiryType");
        const parking = formData.get("parking");
        const furnishing = formData.get("furnishing");
        const contactMethod = formData.get("contactMethod");
        const additionalNotes = formData.get("message"); // Changing variable name to match Apps Script
        const amenities = formData.get("amenities") || "";
        const loanApproval = formData.get("loanApproval") || "";
        const agentExperience = formData.get("agentExperience") || "";

        console.log(
            fullName, email, phone, budget, bedrooms, bathrooms, propertyType,
            location, moveInDate, livingAtProperty, propertyLoan,
            representation, inquiryType, parking, furnishing, contactMethod,
            additionalNotes
        );

        // Create data object to send with field names matching Apps Script
        const dataToSend = {
            fullName,
            email,
            phone,
            contactMethod,
            representation,
            inquiryType,
            propertyType,
            location,
            budget,
            bedrooms,
            bathrooms,
            parking,
            furnishing,
            moveInDate,
            livingAtProperty,
            propertyLoan,
            amenities,
            loanApproval,
            agentExperience,
            additionalNotes
        };

        // AKfycbyfSEf8UoZMksoPsOSETi2vyquxYD98hFQFh0aytE3_wdcdNFsoWUg2yUFqIp11FGyK
        fetch("https://script.google.com/macros/s/AKfycbyfSEf8UoZMksoPsOSETi2vyquxYD98hFQFh0aytE3_wdcdNFsoWUg2yUFqIp11FGyK/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                // window.location.href = "thank-you.html";
                alert("Form submitted successfully!");
            } else {
                console.log(response);
                
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error!", error.message);
            alert("Error submitting the form.");
        });
    });
});
