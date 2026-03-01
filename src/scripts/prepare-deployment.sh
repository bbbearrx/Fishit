#!/bin/bash

###############################################################################
# DEPLOYMENT PREPARATION SCRIPT - Fish It Website
###############################################################################
#
# This script prepares the Fish It website for production deployment by:
# 1. Moving sitemap.xml to the correct location
# 2. Checking for required favicon files
# 3. Verifying all public assets
#
# USAGE:
#   bash scripts/prepare-deployment.sh
#
# Or make it executable and run:
#   chmod +x scripts/prepare-deployment.sh
#   ./scripts/prepare-deployment.sh
#
###############################################################################

set -e  # Exit on error

echo "🐟 Fish It Deployment Preparation"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track if there are any issues
ISSUES=0

###############################################################################
# 1. Move sitemap.xml to correct location
###############################################################################

echo "📋 Step 1: Checking sitemap.xml location..."

if [ -f "src/public/sitemap.xml" ]; then
    if [ -f "public/sitemap.xml" ]; then
        echo -e "${YELLOW}⚠️  sitemap.xml exists in both locations${NC}"
        echo "   Comparing files..."
        if cmp -s "src/public/sitemap.xml" "public/sitemap.xml"; then
            echo "   Files are identical. Removing src/public/sitemap.xml"
            rm "src/public/sitemap.xml"
            echo -e "${GREEN}✓${NC} sitemap.xml is in correct location"
        else
            echo -e "${RED}✗${NC} Files differ! Manual intervention required."
            echo "   - /src/public/sitemap.xml (old)"
            echo "   - /public/sitemap.xml (new)"
            echo "   Please review and keep the correct version."
            ISSUES=$((ISSUES + 1))
        fi
    else
        echo "   Moving sitemap.xml to /public/ directory..."
        mv "src/public/sitemap.xml" "public/sitemap.xml"
        echo -e "${GREEN}✓${NC} Moved sitemap.xml to public/"
    fi
elif [ -f "public/sitemap.xml" ]; then
    echo -e "${GREEN}✓${NC} sitemap.xml is already in correct location"
else
    echo -e "${RED}✗${NC} sitemap.xml not found in /src/public/ or /public/"
    ISSUES=$((ISSUES + 1))
fi

echo ""

###############################################################################
# 2. Check robots.txt
###############################################################################

echo "🤖 Step 2: Checking robots.txt..."

if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✓${NC} robots.txt exists in /public/"
else
    echo -e "${RED}✗${NC} robots.txt not found in /public/"
    ISSUES=$((ISSUES + 1))
fi

echo ""

###############################################################################
# 3. Check _redirects file
###############################################################################

echo "🔀 Step 3: Checking _redirects file..."

if [ -f "public/_redirects" ]; then
    echo -e "${GREEN}✓${NC} _redirects exists in /public/"
else
    echo -e "${RED}✗${NC} _redirects not found in /public/"
    ISSUES=$((ISSUES + 1))
fi

echo ""

###############################################################################
# 4. Check favicon files
###############################################################################

echo "🎨 Step 4: Checking favicon files..."

FAVICON_FILES=(
    "favicon.ico"
    "favicon.svg"
    "favicon-16x16.png"
    "favicon-32x32.png"
    "apple-touch-icon.png"
)

MISSING_FAVICONS=0

for file in "${FAVICON_FILES[@]}"; do
    if [ -f "public/$file" ]; then
        # Check if it's not a placeholder text file
        if file "public/$file" | grep -q "text"; then
            echo -e "${YELLOW}⚠️${NC}  $file exists but appears to be a text placeholder"
            MISSING_FAVICONS=$((MISSING_FAVICONS + 1))
        else
            echo -e "${GREEN}✓${NC} $file"
        fi
    else
        echo -e "${RED}✗${NC} $file - MISSING"
        MISSING_FAVICONS=$((MISSING_FAVICONS + 1))
    fi
done

if [ $MISSING_FAVICONS -gt 0 ]; then
    echo ""
    echo -e "${YELLOW}⚠️  $MISSING_FAVICONS favicon file(s) missing or are placeholders${NC}"
    echo "   Generate them using:"
    echo "   1. Open public/generate-favicons.html in browser, OR"
    echo "   2. Run: npm run generate:favicons"
    echo ""
    ISSUES=$((ISSUES + 1))
fi

echo ""

###############################################################################
# 5. Summary
###############################################################################

echo "=================================="
echo "Summary"
echo "=================================="
echo ""

if [ $ISSUES -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed!${NC}"
    echo ""
    echo "Your site is ready for deployment."
    echo ""
    echo "Next steps:"
    echo "  1. npm run build"
    echo "  2. npm run preview (test locally)"
    echo "  3. Deploy to Cloudflare Pages"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Found $ISSUES issue(s) that need attention${NC}"
    echo ""
    echo "Please fix the issues above before deploying."
    echo ""
    echo "For help, see:"
    echo "  - /DEPLOYMENT_CHECKLIST.md"
    echo "  - /FAVICON_TODO.md"
    echo "  - /public/FAVICON_QUICKSTART.md"
    echo ""
    exit 1
fi
