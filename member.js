document.getElementById('print-button').addEventListener('click', function() {
    // Get form data
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Define the content to be added to the PDF
    const content = `Name: ${name}\nGender: ${gender}\nDate: ${date}\nAddress: ${address}`;

    // Add the content to the PDF document
    doc.text(content, 10, 10);

    // Save the PDF with a specific name (e.g., 'member.pdf')
    doc.save('member.pdf');
});
