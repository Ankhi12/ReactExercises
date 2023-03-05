# ReactExercises
This repository has some basic React challenges that will help you clarify basic React concepts.


1. Create a **React form** with limited validations.
[check it here](https://github.com/Ankhi12/ReactExercises/blob/main/simpleForm.html)

2. How does two React function components talk to each other.

        Points to note

          a. There should be only one function component that will deal with state management.
          b. You can pass a state as a prop to the function component maintaining states.
          c. You can call another function component from a function component inside the JSX section of the later.
          d. You can then modify the JSX of the called component as per your requirement.

        Caution

          I found out that maintain several states across different function component causes React to re render multiple times and React going into an infinite loop.


    check out an example here.
