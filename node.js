<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSONPlaceholder API Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .data-container {
            margin-top: 20px;   
        }
        .post {
            border: 1px solid #ddd;
            padding: 10px;      
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>JSONPlaceholder API Demo</h1>
    <button onclick="fetchPosts()">Get Posts</button>
    <div id="data" class="data-container"></div>

    <script>
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await response.json();
                
                const dataContainer = document.getElementById('data');
                dataContainer.innerHTML = '';
                
                posts.slice(0, 5).forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'post';
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    `;
                    dataContainer.appendChild(postElement);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                document.getElementById('data').innerHTML = 'Error loading data';
            }
        }
    </script>
</body>
</html>

