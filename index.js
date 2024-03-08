function handleRequest(args) {
  // Construct the response body which includes the arguments and environment variables
  const responseBody = {
    args,
    env: process.env
  };

  // Log the response body
  console.log(`Response body: ${JSON.stringify(responseBody, null, 2)}`);

  // Return the HTTP response structure
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: responseBody
  };
}

// Export the function so it can be invoked by the serverless platform
module.exports.handleRequest = handleRequest;
