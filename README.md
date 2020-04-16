# real-world-vue

This is just a small project for a learning purpose. I will add the information what I've learned along this course.

## Tip#1 (router-link component use):

Use :to directive iside the router-link alog with the { name: 'Viewname' } to make sure refactoring only the router/index.js file when changing the urls.

## Tip#2 (different urls lead to the same page using router):

You can use two router-provided tools for this:

- Redirect
- Alias (Can be bad for SEO becouse two different link has the same content inside)

## Tip#3 (dynamic routing with parameters as props):

You can use dynamic routing and pass the parameters you specified in router-link component into the page component props by using props:true flag inside the router/index.js appropriate route.

## Tip#4 (How to get rid of hashtag inside the url):

You can get rid of hashtag by using made: "history" property inside the new Router(). This property somehow toggles the Browser's history.pushstate API to change URL without reloading the page. [I guess that I need to read about, sound intriguing]
