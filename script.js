document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent form submission

  // Get form input values
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const country = document.getElementById('country').value

  // Create post body
  const postBody = {
    title: name,
    body: `${email} ${country}`,
    userId: 1,
  }

  // Send POST request to create a new post
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Display response message
      const responseMessage = document.getElementById('responseMessage')
      responseMessage.textContent = `New post created with ID: ${json.id}`
    })
    .catch((error) => {
      console.log('Error:', error)
    })
})
