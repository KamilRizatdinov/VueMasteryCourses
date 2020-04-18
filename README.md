# real-world-vue

This is just a small project for a learning purpose. I will add the information what I've learned along this course.
Course taken: https://www.vuemastery.com/courses/mastering-vuex/intro-to-vuex

## Tip#1 (Use mutations for changing state):

It is a good practice to change the state inside the mutations, not actions. Since you will be able to rollback to the previous state using mutations. Actions are used to call mutations, not to change state by themselves.

## Tip#2 (mapState vuex):

You can use mapState interface provided by vuex library to map states into the component's computed preperties. [I will need to read about this, for example how to mix mapState with other computed properties, which are not related to the $store]

## Tip#3 (Explanation of the question asked in previous tip):

If you want to use local computed properties mixed with mapState - you should apply an object spread operator (`...mapState({ //something here })`) to the mapState instance inside the body of computed.

## Tip#4 (How to use getter inside another getter):

You can use one getter inside the other by passing getters along with state to the getter function.

## Tip#5 (How to make getter dynamic):

In the case you want getter to take an extra paramenters you need to make getter function follow the next notation: `getterFunction: state => (your parameters) => { getter logic }`

## Tip#6 (Use methods for creating the objects inside the components data section):

Use methods for creating the objects inside the components data section, you should do this to make sure that your components data is not correlated with the data, you've just sent to the store. [Actually I do not quite understand this tip and will read more about this]

## Tip#7 (Why the page is not reloading when the query params in the url are changing):

Vue knows that the URL itself is not changing, so it thinks that there is no reason to rerender the components on the page. You can prevent this default behaiviour by insirting `:key="$route.fullPath"` property into the <router-view /> components inside the App.vue

## Tip#8 (Splitting store logic into different modules):

You can split logic encapsulated inside store/index.js into multiple modules, which will help you a lot in sence of scalability.

## Tip#9 (When you use modules for state you can refactor mapState to be more useful):

You can pass the object and make some manipulations to it inside the mapState instead of passing an array. You can see the use of it in EventShow.vue component.

## READ ABOUT:

- mapState utility
- prev and next rel values inside the <router-link /> component
- how to split store logic into modules?
