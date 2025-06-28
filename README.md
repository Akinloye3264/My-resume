# Emmanuel Akinloye - Personal Portfolio

A modern, responsive portfolio website showcasing my skills and projects as a Frontend Developer.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling, hover effects, and dynamic content
- **Contact Form**: Functional contact form powered by Formspree
- **Performance Optimized**: Fast loading with optimized assets

## Contact Form

The contact form is powered by [Formspree](https://formspree.io/) and includes:

- **Form Validation**: Client-side validation for all fields
- **Spam Protection**: Honeypot field to prevent spam submissions
- **Success/Error Messages**: Visual feedback for form submission status
- **Loading States**: Button shows loading spinner during submission
- **Email Validation**: Proper email format validation

### Form Fields:
- Name (required)
- Email (required, validated)
- Subject (required)
- Message (required)

### How it works:
1. User fills out the form
2. JavaScript validates all fields
3. Form data is sent to Formspree endpoint
4. Success/error message is displayed
5. Form is reset on successful submission

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Interactive functionality
- **Formspree**: Form handling service
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. The contact form will work immediately with the configured Formspree endpoint

## Formspree Configuration

The form is configured to send submissions to: `https://formspree.io/f/mdkzzbga`

To change the endpoint:
1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Replace the action URL in `index.html` line 438
4. Update the endpoint in the JavaScript fetch call

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).