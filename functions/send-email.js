// Assuming MailtrapClient, dotenv, and nodemailer are compatible with the Node.js version used by Netlify Functions

import { MailtrapClient } from "mailtrap";

// const USERNAME = import.meta.env.VITE_MT_USERNAME;
// const PASSWORD = import.meta.env.VITE_MT_PASSWORD;
const SENDER_EMAIL = "demomailtrap.com";
const RECIPIENT_EMAIL_STAFF = "cassius.reynolds.dev@gmail.com";
const RECIPIENT_EMAIL_CLIENT = "cassius.reynolds@placeofgrace.net";
const ENDPOINT = "https://send.api.mailtrap.io/";
const TOKEN = import.meta.env.VITE_TOKEN;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { message, firstName, lastName, email } = JSON.parse(event.body);

  if (!firstName || !lastName || !email || !message) {
    return { statusCode: 400, body: "Incorrect form submission" };
  }

  const sender = {
    email: "mailtrap@demomailtrap.com",
    name: "Mailtrap Test",
  };

  const recipients = [
    { email: RECIPIENT_EMAIL_STAFF },
    { email: RECIPIENT_EMAIL_CLIENT },
  ];

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  try {
    // sending form data contents to staff member email
    await client.send({
      from: sender,
      to: [recipients[0]],
      template_uuid: "faab9e2a-a90a-489b-8b98-1564a136e455",
      template_variables: {
        user_name: `${firstName} ${lastName}`,
        message: message,
        email: email,
      },
    });

    // sending form data contents to client
    await client.send({
      from: sender,
      to: [recipients[1]],
      template_uuid: "1fb1a0f5-f49e-4406-889a-bdded2e545a4",
      template_variables: {
        message:
          "Your inquiry has been successfully sent. You can expect a response in a timely manner...",
        email: "test_email@gmail.com",
        phone: "707-555-5555",
        address: "918 Merchant St, Vacaville CA, 95688",
      },
    });

    return { statusCode: 200, body: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 400, body: "Error sending email" };
  }
};
