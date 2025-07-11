#!/bin/bash

# Deploy to GitHub Pages Script
# This script commits changes and pushes to GitHub, triggering the GitHub Actions deployment

set -e  # Exit on any error

echo "🚀 Deploying binkey-data to GitHub Pages..."
echo ""

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are any changes to commit
if git diff --quiet && git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
    echo "✅ Repository is up to date"
    exit 0
fi

# Show what will be committed
echo "📝 Changes to be committed:"
git status --short
echo ""

# Get commit message from user or use default
if [ -z "$1" ]; then
    echo "💬 Enter commit message (or press Enter for default):"
    read -r commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update electronics inventory"
    fi
else
    commit_message="$1"
fi

echo "📦 Committing changes..."
git add .
git commit -m "$commit_message"

echo "🔄 Pushing to GitHub..."
git push origin main

echo ""
echo "🎉 Successfully pushed to GitHub!"
echo "📡 GitHub Actions will now build and deploy your site"
echo "🌐 Your site will be available at: https://funkfinger.github.io/binkey-data/"
echo ""
echo "⏱️  Deployment usually takes 2-3 minutes"
echo "👀 Monitor progress at: https://github.com/funkfinger/binkey-data/actions"
