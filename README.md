# Technical Challenge Notes

For this technical challenge I opted to implement a class based container component, simply due to the version of React bundled. Had this been for a production project I may have opted to implement Hooks instead.

In regards to hooking the application to an API I would likely implement Redux to manage the state.

Additionally I would have implemented TypeScript as I find it tends to make code easier to read and debug.

There are a few things I would have done differently given more time:

- Added snapshot tests for all the components
- Written tests for the data manipulation. I initially missed a bug for removing a dietary type from the count, which I wouldn't have done with a test. Also the bug fix is a bit untidy as it was rushed `removeDietaryCount()` in `utils`. Maybe that's something we can fix if we proceed to pair programming?
- `MenuItem.js` is a bit messy, in my effort to make it reusable I added a conditional spread property. With hindsight I probably should have used an HOC instead
