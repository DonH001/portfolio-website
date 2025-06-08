### Step 1: Set Up Your Project

1. **Create a New Directory**:
   Open your terminal and create a new directory for your project:
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

2. **Initialize a Git Repository**:
   Initialize a new Git repository:
   ```bash
   git init
   ```

3. **Create Basic Files**:
   Create the necessary files for your website:
   ```bash
   touch index.html styles.css script.js
   ```

### Step 2: Build Your HTML Structure

Open `index.html` and add the following basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="about">
        <h2>About Me</h2>
        <p>This is a brief introduction about myself.</p>
    </section>
    
    <section id="projects">
        <h2>My Projects</h2>
        <div class="project">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
    </section>
    
    <footer>
        <p>&copy; 2023 My Portfolio</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

### Step 3: Style Your Portfolio

Open `styles.css` and add some basic styles along with animations:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 20px;
    margin: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

footer {
    text-align: center;
    padding: 10px 0;
    background: #333;
    color: #fff;
}
```

### Step 4: Add Animations with JavaScript

Open `script.js` and add the following code to trigger animations when the sections come into view:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
```

### Step 5: Deploy to GitHub Pages

1. **Create a GitHub Repository**:
   Go to GitHub and create a new repository named `my-portfolio`.

2. **Add Remote Repository**:
   In your terminal, add the remote repository:
   ```bash
   git remote add origin https://github.com/your-username/my-portfolio.git
   ```

3. **Commit Your Changes**:
   Add and commit your changes:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

4. **Push to GitHub**:
   Push your changes to GitHub:
   ```bash
   git push -u origin master
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on "Settings".
   - Scroll down to the "Pages" section.
   - Under "Source", select the branch you want to use (usually `master` or `main`).
   - Click "Save".

6. **Access Your Portfolio**:
   After a few minutes, your portfolio will be available at `https://your-username.github.io/my-portfolio/`.

### Conclusion

You now have a basic portfolio website with animations, and it’s deployed on GitHub Pages! You can further enhance it by adding more projects, improving styles, or integrating additional features. Happy coding!