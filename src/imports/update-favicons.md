Task: Set up the website favicon system so the favicon files are sourced from the R2 asset bucket, not stored locally in the repo.

STRICT REQUIREMENTS

Do not modify any unrelated files, components, routes, or project structure.

Do not move /src or change build settings.

Do not replace or regenerate the site icon artwork unless favicon files are missing in R2.

All favicon references must pull from the R2/public asset domain.

Do not use placeholder images.

R2 ASSET SOURCE

Use these favicon assets from the R2/public asset domain:

https://assets.empyreus.site/fishit/favicon.ico

https://assets.empyreus.site/fishit/favicon-16x16.png

https://assets.empyreus.site/fishit/favicon-32x32.png

https://assets.empyreus.site/fishit/apple-touch-icon.png

https://assets.empyreus.site/fishit/android-chrome-192x192.png

https://assets.empyreus.site/fishit/android-chrome-512x512.png

HEAD TAGS

Inside the <head> of index.html, remove any incorrect or duplicate favicon tags and replace them with exactly this:

<link rel="icon" href="https://assets.empyreus.site/fishit/favicon.ico" sizes="any"> <link rel="icon" type="image/png" sizes="32x32" href="https://assets.empyreus.site/fishit/favicon-32x32.png"> <link rel="icon" type="image/png" sizes="16x16" href="https://assets.empyreus.site/fishit/favicon-16x16.png"> <link rel="apple-touch-icon" sizes="180x180" href="https://assets.empyreus.site/fishit/apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="192x192" href="https://assets.empyreus.site/fishit/android-chrome-192x192.png"> <link rel="icon" type="image/png" sizes="512x512" href="https://assets.empyreus.site/fishit/android-chrome-512x512.png">

IMPORTANT RULES

Use PNG for sized favicon links, not .ico for each size.

Only use favicon.ico once, with sizes="any".

Keep all favicon URLs absolute and pointed at the R2 asset domain.

Do not create local duplicate favicon files unless absolutely required for framework compatibility.

If there are existing favicon links in head, replace them cleanly rather than adding duplicates.

OPTIONAL ROOT COMPATIBILITY
If the framework requires a root /favicon.ico reference for best browser compatibility, create only a minimal root reference in head that still points to the R2 file, not a local file:

<link rel="icon" href="https://assets.empyreus.site/fishit/favicon.ico" sizes="any">

VERIFICATION
After changes, confirm these exact URLs are referenced in the final head and are publicly accessible:

https://assets.empyreus.site/fishit/favicon.ico

https://assets.empyreus.site/fishit/favicon-32x32.png

https://assets.empyreus.site/fishit/favicon-16x16.png

https://assets.empyreus.site/fishit/apple-touch-icon.png

https://assets.empyreus.site/fishit/android-chrome-192x192.png

https://assets.empyreus.site/fishit/android-chrome-512x512.png

OUTPUT
Only update the favicon-related tags in the document head. Do not modify anything else.