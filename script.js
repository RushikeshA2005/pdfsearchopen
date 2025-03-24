document.addEventListener("DOMContentLoaded", () => {
    loadPDFs();
});

// Load PDFs from the "pdfs.json" file
function loadPDFs() {
    fetch("pdfs.json")
        .then(response => response.json())
        .then(data => {
            const pdfList = document.getElementById("pdfList");
            pdfList.innerHTML = "";
            data.forEach(pdf => {
                let pdfDiv = document.createElement("div");
                pdfDiv.classList.add("pdf-item");
                pdfDiv.textContent = pdf;
                pdfDiv.onclick = () => window.open(`pdfs/${pdf}`, "_blank");
                pdfList.appendChild(pdfDiv);
            });
        });
}

// Search PDF Function
function searchPDF() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let pdfItems = document.querySelectorAll(".pdf-item");

    pdfItems.forEach(item => {
        let title = item.textContent.toLowerCase();
        item.style.display = title.includes(input) ? "block" : "none";
    });
}
