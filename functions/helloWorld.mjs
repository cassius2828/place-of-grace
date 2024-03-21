export const handler = async (event, context) => {
  console.log("This is a test log message from the serverless function!");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" }),
  };
};
