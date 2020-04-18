# real-world-vue

This is just a small project for a learning purpose. I will add the information what I've learned along this course.
Course taken: https://www.vuemastery.com/courses/mastering-vuex/intro-to-vuex

## Tip#1 (Use mutations for changing state):

It is a good practice to change the state inside the mutations, not actions. Since you will be able to rollback to the previous state using mutations. Actions are used to call mutations, not to change state by themselves.

## Tip#2 (mapState vuex):

You can use mapState interface provided by vuex library to map states into the component's computed preperties. [I will need to read about this, for example how to mix mapState with other computed properties, which are not related to the $store]

## Tip#3 (Explanation of the question asked in previous tip):

If you want to use local computed properties mixed with mapState - you should apply an object spread operator (`...mapState({ //something here })`) to the mapState instance inside the body of computed.
