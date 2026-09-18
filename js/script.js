document.addEventListener("DOMContentLoaded", () => {
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactSection = document.getElementById("contact");

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", () => {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
