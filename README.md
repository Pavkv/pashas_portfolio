# Pasha's Zobov — Portfolio Website

A modern, responsive, and animated portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), showcasing my software engineering projects, technical skills, and creative problem-solving.

<img width="1470" height="819" alt="image" src="https://github.com/user-attachments/assets/aa64e89c-e3a7-4de4-aacf-2032c78be283" />

---

## 🚀 Live Site

🌐 [pavelzobov.dev](https://pashas-portfolio.vercel.app/)  
🎥 Includes project demo videos, animated transitions, and elegant UI/UX interactions.

---

## ✨ Features

- 💡 Scroll-triggered animations powered by [Framer Motion](https://www.framer.com/motion/)
- 🎨 Responsive typography that adapts dynamically to text length
- 🌈 Gradient backgrounds, hover lines, and rich visual feedback
- 📱 Fully responsive layout for mobile, tablet, and large screens
- 📦 Structured sections: Introduction, Expertise, Projects, About, and Contact
- 🗂️ Skills grid grouped by category (Languages, Frameworks, CS Concepts)
- 📬 Contact form with spam protection and form validation
- ✉️ Emails sent via [Resend](https://resend.com/) API with rate limiting by IP
- 🔐 Honeypot field to filter spam bots
- ⏱ Live local time clock in footer
- ⬆️ Scroll-to-top floating button
- 📈 Unique visitor tracking with [Upstash Redis](https://upstash.com/)
- 🌎 Multi-environment setup using `.env.local` and `.env.production`
- 📄 Resume download via direct Google Docs PDF link

---

## 📥 Contact Form

- Built with React + `fetch` POST requests to `/api/contact`
- Resend API integration to send emails directly to your inbox
- Spam prevention:
  - Honeypot field
  - Rate limiting by IP (1 message per minute)
- Custom error handling and field validation
- Form is reset and visually disabled after submission

---

## 🧠 Unique Visitor Tracking

- Visitors are counted uniquely using hashed IPs stored in Upstash Redis
- Lightweight `GET` request is triggered on first load
- View count visible in console or can be extended to UI

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, Custom CSS Utilities
- **Animations**: Framer Motion
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Email**: [Resend](https://resend.com/)
- **Database**: [Upstash Redis](https://upstash.com/)

---

## 👨‍💻 Author

[Pasha Zobov](https://github.com/Pavkv)
2025
