# Deployment Guide for GitHub Pages

Follow these steps to deploy your Resin Coaster Color Tester to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `resin-coaster-tester` (or any name you prefer)
3. Make sure it's public (required for free GitHub Pages)
4. Don't initialize with README since we already have files

## Step 2: Upload Your Code

### Option A: Using GitHub Web Interface
1. Download all the files from this project
2. Go to your new repository on GitHub
3. Click "uploading an existing file"
4. Drag and drop all the project files
5. Commit the changes

### Option B: Using Git Command Line
\`\`\`bash
# Clone your empty repository
git clone https://github.com/[your-username]/resin-coaster-tester.git
cd resin-coaster-tester

# Copy all project files to this directory
# Then add and commit
git add .
git commit -m "Initial commit: Add resin coaster color tester"
git push origin main
\`\`\`

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

## Step 4: Access Your Site

After the GitHub Action completes (usually 2-5 minutes), your site will be available at:
\`\`\`
https://[your-username].github.io/resin-coaster-tester/
\`\`\`

## Step 5: Custom Domain (Optional)

If you want to use a custom domain:
1. In the Pages settings, add your custom domain
2. Create a CNAME file in your repository root with your domain
3. Configure your domain's DNS to point to GitHub Pages

## Troubleshooting

- **Build fails**: Check the Actions tab for error details
- **Images not loading**: Ensure all image paths are correct and files are included
- **404 errors**: Make sure the basePath in next.config.mjs matches your repository name
- **Styles not loading**: Clear browser cache and check console for errors

## Making Updates

To update your site:
1. Make changes to your code
2. Commit and push to the main branch
3. GitHub Actions will automatically rebuild and deploy

The deployment typically takes 2-5 minutes to complete.
