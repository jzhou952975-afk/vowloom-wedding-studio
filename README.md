# Vowloom — prototype

Open `Vowloom.html` in Chrome or Edge to use the standalone prototype. It bundles code, styles and the wedding photograph and requires no server. The standalone file was built successfully; the automated browser's security policy prevented opening file URLs, so its file-origin behavior still requires a manual check.

Features: original Modern Minimal / Garden / Classic Romance suites; UTF-8 CSV and pasted guest import; editable bilingual names, assignments and individual thank-you messages; table capacities, drag/drop and dropdown assignment; custom table stories; warnings for blank names, unassigned guests, over-capacity tables and possible duplicate names; device-local saving; JSON backup/restore; seating posters, story cards, place cards and individual thank-you print files.

Print sizes: seating 18×24 in; story cards 5×7 in; place cards 3.5×2 in, 8 per US Letter sheet; thank-you cards 5×3.5 in. Browser print / Save as PDF uses 100% scale, no margins, no headers/footers, and background graphics enabled. If an embedded browser does not open its print dialog, download the HTML print file and open it in Chrome/Edge. Long overflowing text is flagged and export is disabled until adjusted. No bleed/crop marks or commercial printer colour profiles.

Data lives only in this browser/device and origin. File URL storage differs between browsers: moving or renaming the HTML file, switching browser, clearing browser data or changing from offline to hosted may lose access to that saved copy. Download a JSON backup and restore it when switching. Guest data is never uploaded by the prototype. The sample wedding is fictional. Capacity: 500 guests / 100 tables.

No real payments, registration, cloud sync, shared collaboration, custom domain, order fulfillment, professional prepress validation or production privacy/legal terms. CAD39 is a planned prototype price only.

Validation performed on the served application: successful TypeScript and production build; dependency audit clean at installation; edit Chinese/accented names and individual messages; refresh recovery; dropdown seating change reflected in print content; pasted CSV including quoted comma names; CSV file selection/import; JSON restore with confirmation and refresh; duplicate, empty-name and over-capacity warnings; four print document layouts and measured sample overflow; print page counts including larger guest data; HTML escaping; mobile page width checked. Physical printing and completed PDF save were not verified: the embedded browser did not expose a print dialog and a separate PDF renderer could not start successfully.

Hosted publication is pending because the current execution environment cannot connect to the Sites source endpoint. No public or private hosted deployment has completed. The registered Site remains unpublished. Use the existing .openai/hosting.json project_id when continuing; do not create another Site.

Source: site/. Standard Node/npm project: npm ci, npm run dev, npm run build. Required supported Node version is in package.json. Libraries include React, Base UI and PapaParse (https://github.com/mholt/PapaParse).

Artwork: built-in image generation, then reference-preserving landscape extension. Requested 16:9; actual generated file 1672×941 (approximately 16:9). Prompt: Expand the original wedding stationery photograph to a landscape 16:9 canvas, preserving cream cotton cards, sage envelope, ivory flowers, linen and soft window light, without text or logos.
