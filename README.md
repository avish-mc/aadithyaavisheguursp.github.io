# Aadithyaa Vishegu - Academic Portfolio Website

This is a professional academic portfolio website showcasing research experience, coursework, journal reflections, and more. The site is designed to be hosted for free on GitHub Pages.

## 🌐 Features

- **Home**: Introduction with profile information and contact details
- **Research**: Comprehensive list of research experiences and projects
- **Relevant Coursework**: Organized by semester with GPA highlights
- **Journal**: Personal reflections on academic and professional growth
- **Gallery**: Photo collection from various experiences (placeholders included)
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Navigation**: Single-page application with smooth transitions

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Navigation and interactions
├── resume.pdf          # Your resume (downloadable)
└── README.md           # This file
```

## 🚀 Deploying to GitHub Pages (FREE!)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create a free account
3. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it: `your-username.github.io` (replace "your-username" with your actual GitHub username)
   - Example: If your username is "aadithyaav", name it: `aadithyaav.github.io`
4. Make it **Public**
5. Do NOT check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Website Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop ALL files from this folder:
   - index.html
   - styles.css
   - script.js
   - resume.pdf
   - README.md
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository's "Settings" tab
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"

### Step 5: Wait and Visit Your Site!
1. GitHub will take 1-2 minutes to build your site
2. Your website will be live at: `https://your-username.github.io`
3. Example: `https://aadithyaav.github.io`

## 🎨 Customization Guide

### Adding Your Photos

#### For the Hero Background Image:
1. Save your background image as `hero-bg.jpg`
2. Upload it to your GitHub repository
3. In `styles.css`, find `.hero-placeholder` and replace it with:
```css
.hero-placeholder {
    width: 100%;
    height: 100%;
    background-image: url('hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

#### For the Profile Photo:
1. Save your profile photo as `profile.jpg`
2. Upload it to your GitHub repository
3. In `styles.css`, find `.profile-placeholder` and replace it with:
```css
.profile-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url('profile.jpg');
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    border: 4px solid rgba(255, 255, 255, 0.3);
}
```

#### For Gallery Images:
1. Save your gallery images as `gallery-1.jpg`, `gallery-2.jpg`, etc.
2. Upload them to your GitHub repository
3. In `index.html`, replace the gallery placeholders. For example:
```html
<div class="gallery-item">
    <img src="gallery-1.jpg" alt="Dream Team volunteering">
</div>
```

### Changing Colors
In `styles.css`, modify the color variables at the top:
```css
:root {
    --primary-color: #7B8FA1;      /* Main theme color */
    --secondary-color: #9CA8B8;    /* Secondary accents */
    --accent-color: #FFE5B4;       /* Highlight color */
    --text-dark: #2C3E50;          /* Dark text */
}
```

### Updating Content
Simply edit the `index.html` file:
- Update research experiences in the `#research` section
- Add or modify coursework in the `#coursework` section
- Write new journal entries in the `#journal` section
- Update your contact information in the `#home` section

### Adding a Custom Domain (Optional)
1. Buy a domain from Namecheap, Google Domains, etc.
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain (e.g., `aadithyaavishegu.com`)
4. Update your domain's DNS settings (instructions provided by GitHub)

## 💡 Tips

- **Keep it updated**: Add new research, coursework, and journal entries as you progress
- **Test locally**: Open `index.html` in your browser before uploading to see changes
- **Mobile-friendly**: The site is already responsive, but test it on your phone
- **SEO-friendly**: The site uses semantic HTML for better search engine visibility

## 🔧 Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes after enabling GitHub Pages
- Check that your repository is named correctly: `username.github.io`
- Make sure the repository is set to Public
- Verify that GitHub Pages is enabled in Settings > Pages

**Images not loading?**
- Make sure image files are uploaded to the repository
- Check that file names match exactly (case-sensitive)
- Use relative paths (e.g., `profile.jpg` not `/profile.jpg`)

**Changes not appearing?**
- It can take 1-5 minutes for GitHub Pages to rebuild
- Try hard-refreshing your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear your browser cache

## 📧 Support

If you need help or have questions, feel free to reach out or consult GitHub's documentation:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)

---

**Good luck with your portfolio! This will be a great resource for medical school applications, research opportunities, and professional networking.**
