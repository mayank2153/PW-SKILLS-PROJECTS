1. Create a Navigation Bar Similar to the Below-Mentioned Image
Solution:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            background-color: #5277b6;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: underline;
        }
        .navbar a:hover {
            color: rgb(159, 18, 18);
        }
    </style>
</head>
<body>

<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#login">Login</a>
</div>

</body>
</html>


2. Create a Div Centered with an Image and Paragraph Similar to the Image Mentioned
Solution:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Div</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        .card {
            background-color: #e2e440;
            border: 1px solid #ccc;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-radius: 10px;
        }
        .card img {
            width: 400px;
            height: auto;
            border-radius: 10px;
        }
        .card p {
            margin-top: 10px;
            font-weight: 700;
        }
    </style>
</head>
<body>

<div class="card">
    <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/54cca3cf-17ac-4fb6-a705-97644352efcf.png" alt="Card Image">
    <p>Course Name: PW Skills full stack web development</p>
</div>

</body>
</html>



3. Create a Navigation Bar Similar to Question 1, Using a Different Border Style for Each Navigation Item
Solution:

HTML and CSS Code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar with Borders</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            border-right: 1px solid white;
        }
        .navbar a:last-child {
            border-right: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .navbar a:nth-child(1) {
            border-bottom: 3px solid red;
        }
        .navbar a:nth-child(2) {
            border-top: 3px dotted blue;
        }
        .navbar a:nth-child(3) {
            border-left: 3px dashed green;
        }
        .navbar a:nth-child(4) {
            border-right: 3px double yellow;
        }
        .navbar a:nth-child(5) {
            border-top: 3px groove orange;
        }
    </style>
</head>
<body>

<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#login">Login</a>
</div>

</body>
</html>
4. Create a Simple Webpage with an Image and Make the Image Circular Using Border-Radius
Solution:

HTML and CSS Code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circular Image</title>
    <style>
        .image-container {
            text-align: center;
            margin-top: 50px;
        }
        .image-container img {
            border-radius: 100%;
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>

<div class="image-container">
    <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/54cca3cf-17ac-4fb6-a705-97644352efcf.png" alt="Circular Image">
</div>

</body>
</html>

Here are the solutions to the assignment questions based on the image you provided:

1. Create a Navigation Bar Similar to the Below-Mentioned Image
Solution:

HTML and CSS Code:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            background-color: #4CAF50;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
    </style>
</head>
<body>

<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#login">Login</a>
</div>

</body>
</html>
Explanation:

This solution creates a navigation bar with 5 links (Home, About Us, Contact, Blog, Login).
CSS is used to style the navigation bar, ensuring that the links change color on hover.
2. Create a Div Centered with an Image and Paragraph Similar to the Image Mentioned
Solution:

HTML and CSS Code:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Div</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        .card {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-radius: 10px;
        }
        .card img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        .card p {
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="card">
    <img src="https://via.placeholder.com/300" alt="Card Image">
    <p>Course Name: PW Skills full stack web development</p>
</div>

</body>
</html>
The div contains an image and a paragraph, styled to match the example.
3. Create a Navigation Bar Similar to Question 1, Using a Different Border Style for Each Navigation Item
Solution:

HTML and CSS Code:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar with Borders</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            border-right: 1px solid white;
        }
        .navbar a:last-child {
            border-right: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .navbar a:nth-child(1) {
            border-bottom: 3px solid red;
        }
        .navbar a:nth-child(2) {
            border-top: 3px dotted blue;
        }
        .navbar a:nth-child(3) {
            border-left: 3px dashed green;
        }
        .navbar a:nth-child(4) {
            border-right: 3px double yellow;
        }
        .navbar a:nth-child(5) {
            border-top: 3px groove orange;
        }
    </style>
</head>
<body>

<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
    <a href="#blog">Blog</a>
    <a href="#login">Login</a>
</div>

</body>
</html>
Explanation:

This solution uses different border styles for each navigation item, such as solid, dotted, dashed, double, and groove.
4. Create a Simple Webpage with an Image and Make the Image Circular Using Border-Radius
Solution:

HTML and CSS Code:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circular Image</title>
    <style>
        .image-container {
            text-align: center;
            margin-top: 50px;
        }
        .image-container img {
            border-radius: 50%;
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>

<div class="image-container">
    <img src="https://via.placeholder.com/200" alt="Circular Image">
</div>

</body>
</html>
Explanation:

The image is styled to be circular using border-radius: 50%.
5. Create a Simple Blog Website About Google Fonts with Specific Fonts for Heading and Paragraph
Solution:

HTML and CSS Code:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Fonts Blog</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Oswald:wght@400&display=swap">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            margin: 20px;
            text-align: center;
        }
        h1 {
            font-family: 'Oswald', sans-serif;
        }
        .header-image img {
            width: 300px;
            height: auto;
        }
    </style>
</head>
<body>

<div class="header-image">
    <img src="https://1000logos.net/wp-content/uploads/2021/03/googlefontslogo.jpg" alt="Google Fonts Logo">
</div>
<h1>About Google Fonts</h1>
<p>Google Fonts is a library of 1,369 open-source font families and APIs for conveniently using the fonts via CSS and Android.</p>

</body>
</html>
6. Create a Simple Website as Mentioned in the Below Image Using Provided Assets
Solution:

6. Create a Simple Website as Mentioned in the Below Image Using Provided Assets
Solution:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .about-container {
            text-align: center;
        }
        .about-container img {
            width: 80%;
            height: auto;
            border-radius: 10px;
            margin-top: 20px;
        }
        .about-container h2 {
            margin-top: 20px;
            font-size: 24px;
            font-size: x-large;
            font-weight: 900;
        }
        .about-container p {
            font-size: 18px;
            color: #333;
            margin: 20px auto;
            width: 80%;
            line-height: 1.6;
        }
    </style>
</head>
<body>

<div class="about-container">
    <h2>About Us</h2>
    <p>
        PW Skills mission is to permeate through every student's/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It." We aim to do this by providing exceptional up-skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.
    </p>
    <img src="https://pwskills.com/images/aboutUs/aboutUs.png" alt="About Us Image">
</div>

</body>
</html>
8. Create a Simple List of Items

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Requirements List</title>
    <style>
        body {
    font-family: 'Times New Roman', Times, serif;
    margin: 20px;
    padding: 0;
    background-color: #f5f5f5;
}

.requirements {
    width: 50%;
    margin: auto;
}

.requirements h2 {
    font-weight: bold;
    font-size: 24px;
}

.requirements ol {
    font-size: 18px;
    padding-left: 20px;
}

.requirements ol li {
    margin: 10px 0;
}

    </style>
</head>
<body>
    <div class="requirements">
        <h2>Requirements</h2>
        <ol>
            <li>System with minimum i3 processor or better.</li>
            <li>At least 4 GB of RAM.</li>
            <li>Working internet connection.</li>
            <li>Dedication to learn.</li>
        </ol>
    </div>
</body>
</html>

