# real-world-vue

This is just a small project for a learning purpose. I will add the information what I've learned along this course.

## Tip#1 (router-link component use):

Use :to directive iside the router-link alog with the { name: 'Viewname' } to make sure refactoring only the router/index.js file when changing the urls.

## Tip#2 (different urls lead to the same page using router):

You can use two router-provided tools for this:

- Redirect
- Alias (Can be bad for SEO becouse two different link has the same content inside)
