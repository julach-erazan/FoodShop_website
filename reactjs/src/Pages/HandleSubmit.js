const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a FormData object and append the form data
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
  
    // Send the form data to the register.php script
    fetch('C:/xampp/htdocs/test/register.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        // Reset the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };