import axios from "axios";
import { useGlobalContext } from "../src/customHooks/useGlobalContext";
const targetEmail = "deanna.perry@placeofgrace.net";
const DeannaID = "dea24538-8630-4376-977c-b671701a37ea";
const CassiusID = "268eda2e-210b-41bf-901c-154969d9302c";
export const handler = async (event) => {
  // Only allow POST method
  console.log(event);
  //   if (event.method !== "POST") {
  //     return { statusCode: 405, body: "Method Not Allowed: this should return a status code of 405" };
  //   }

  // Parse the JSON body from the event
  // if (!event.body) return;
  const { firstName, lastName, email, message } = JSON.parse(event.body);
  // const { firstName, lastName, email, message } = event.body;

  // Check for required fields
  if (!firstName || !lastName || !email || !message) {
    return { statusCode: 400, body: "All fields are required" };
  }

  // OAuth details from environment variables
  const tenantId = process.env.DIRECTORY_TENANT_ID;
  const clientId = process.env.APPLICATION_CLIENT_ID;
  const clientSecret = process.env.SECRET_VALUE;
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  // Get the access token
  const getToken = async () => {

    const tokenData = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
    });

    try {
      const response = await axios.post(tokenUrl, tokenData);
      return response.data.access_token;
    } catch (error) {
      console.error("Error fetching token:", error);
      return null;
    }
  };

  // Send the email using the token
  const sendEmail = async (token) => {
    // const sendMailUrl = "https://graph.microsoft.com/v1.0/me/sendMail"; // Replace {user-id} with the user's ID or principal name
    const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${DeannaID}/sendMail`; // Replace {user-id} with the user's ID or principal name
    const emailHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const emailData = {
      message: {
        subject: "New Contact Form Submission",
        body: {
          contentType: "Text",
          content: `New inquiry from ${firstName} ${lastName}\nMessage: ${message}\nEmail: ${email}`,
        },
        toRecipients: [{ emailAddress: { address: targetEmail } }],
      },
      saveToSentItems: "false",
    };

    try {
      const response = await axios.post(sendMailUrl, emailData, {
        headers: emailHeaders,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  try {
    const token = await getToken();
    if (token) {
      const emailResponse = await sendEmail(token);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Email sent successfully",
          data: emailResponse,
        }),
      };
    } else {
      return {
        statusCode: 401,
        body: "Failed to authenticate with Microsoft Graph API",
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
