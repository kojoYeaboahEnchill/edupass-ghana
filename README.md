# EduPass Ghana

A mobile-first, responsive learning platform concept for BECE and WASSCE preparation.

## Included experiences

- Marketing homepage with BECE and WASSCE learning paths
- Student sign-in and registration flows
- Student dashboard with goals, progress, subjects and an upcoming mock exam
- Subjects, topics and guided lesson pages
- Searchable past-question and mock-exam libraries
- Interactive timed mock-exam interface
- Results, topic performance and worked-answer review
- Progress analytics and profile/study settings
- Responsive navigation and layouts for phones, tablets and desktop screens
- Responsive administrator portal with students, subjects, questions, mock exams, results and settings

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Use the buttons and navigation to move through the demo.

Useful student routes include:

```text
/#signin
/#register
/#dashboard
/#subjects
/#lesson
/#past-questions
/#mock-library
/#exam
/#results
/#progress
/#profile
```

Open `#admin-dashboard` after the local URL to enter the administration portal. For example:

```text
http://localhost:5173/#admin-dashboard
```

## Production build

```bash
npm run build
```

The production output is written to `dist/`.

## Notes

This is a front-end prototype with sample student and examination data. Authentication, data persistence, payments and a question-management backend are not yet connected.

EduPass Ghana is presented as an independent examination-preparation platform and does not claim affiliation with or endorsement by WAEC.
