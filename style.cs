body {
    font-family: Arial, sans-serif;
    background: #0d1117;
    color: white;
    margin: 0;
    padding: 0;
}

/* Navigation Bar */
nav {
    background: #161b22;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav a.active, nav a:hover {
    color: #2ea043;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 80px 20px;
}

.hero .btn {
    padding: 10px 20px;
    background: #238636;
    color: white;
    border-radius: 8px;
    text-decoration: none;
}

.hero .btn:hover {
    background: #2ea043;
}

/* Main Container */
.container {
    width: 60%;
    margin: auto;
    background: #161b22;
    padding: 30px;
    margin-top: 40px;
    border-radius: 12px;
}

textarea {
    width: 90%;
    padding: 15px;
    height: 120px;
    border-radius: 10px;
    border: none;
    background: #22272e;
    color: white;
}

input {
    width: 40%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
    background: #22272e;
    color: white;
}

button {
    margin: 8px;
    padding: 10px 18px;
    background: #238636;
    border: none;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #2ea043;
}

.about-list {
    line-height: 1.8;
}
