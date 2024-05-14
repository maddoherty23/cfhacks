document.addEventListener("DOMContentLoaded", function() {
  console.log('starting function');
  // Replace with your Cloud Function URL
  const functionUrl = 'https://us-central1-healthdb-2551f.cloudfunctions.net/getFirebaseConfig';
  console.log('fetching Firebase config from:', functionUrl);

  fetch(functionUrl, {
    method: 'GET',
    credentials: 'include' // Include credentials if necessary
  })
  .then(response => {
    console.log('Response received:', response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(config => {
    // Initialize Firebase
    console.log('Firebase config received:', config);
    firebase.initializeApp(config);

    // Your Firebase related code here
    console.log('Firebase initialized with config:', config);
  })
  .catch(error => {
    console.error('Error fetching Firebase config:', error);
  });
});
