# Project Title

Simple Form Submission with API Integration

## Description

This project demonstrates a simple form submission functionality with API integration. When the form is submitted, the data is sent to an external API to create a new post. The post title is derived from the name field in the form, and the post body is a combination of the email and country fields. If the API request is successful, a response message is displayed on the page.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Open the HTML file in a web browser.

## Usage

1. Fill out the form fields (Name, Email, Country).
2. Click the "Submit" button.
3. If the API request is successful, a response message will be displayed on the page.

## API Endpoint

The form data is sent to the following API endpoint to create a new post:

- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Method: POST
- Request Body: JSON object containing the post data (title, body, userId)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
