# tanush-personal-website

Use port http://localhost:5173/ on chrome to see live preview while in development

help (update after every use): https://share.google/aimode/C5njXXDM0kvVLRO4u


Instead of asking you to type commands, 

a senior developer reviewing your resume will ask conceptual and architectural 
questions about your setup. Here are real questions you should expect based on what we just built:

"I see you used GitHub Actions. Why did you choose to split your pipeline into parallel frontend-ci and backend-ci jobs?"

Your Answer: "To optimize build times. They run on separate virtual machines simultaneously, so a failure in the frontend setup doesn’t block or slow down the backend verification.

""Why did you use npm ci in your workflow instead of npm install?"

Your Answer: "npm ci is for automated environments. It forces Node to strictly follow the package-lock.json file and deletes existing node_modules to guarantee a clean, 
reproducible build, whereas npm install can update dependencies dynamically."

"Why did you configure your root project with "type": "module"?"

Your Answer: "To enable modern ES6 import/export syntax across both the frontend and backend. 
It keeps the codebase uniform so I don't have to switch between CommonJS require() on the server and ES modules in 
React."

"How did you handle your local development workflow for a full-stack app?"

Your Answer: "I set up twin local servers—Vite running the React SPA on port 5173 and Node/Express listening on port 5000—with CORS enabled on the backend to allow 
cross-origin API fetching during development."