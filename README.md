1.  Install Postman from the website (https://www.postman.com/) and open it. 2. Start the API server by running node server.js in your terminal.
2.  In Postman, click on the "New" button in the top left corner and select "Request".
3.  Give your request a name and select the appropriate HTTP method (e.g. GET, POST, PUT, DELETE) from the dropdown.
4.  In the "Enter request URL" field, enter the URL of the API endpoint you want to send the request to (e.g. http://localhost:3000/).
5.  If you are sending a GET request, you can skip to step 8. If you are sending a POST, PUT, or DELETE request, you may need to send some data in the request body. To do this, click on the "Body" tab and select "raw". You can then enter the data in JSON format. For example:--

```plaintext
{
"name": "Apple",
"age": 0.99
}
```

1.  If you are sending a GET request with a query parameter, you can enter the parameter in the "Params" tab. For example:

```plaintext
name: Apple
```

Click the "Send" button to send the request. The response from the server will be displayed in the "Response" tab.
