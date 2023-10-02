## To Do:
- [x] In `src` create a folder called `constants`.
- [x] Inside `src/constants` create a file `cookie-dough.js`. From `cookie-dough.js`, export an array of objects that represent the different cookie dough options you are offering.
- [x] In `src` create a folder called `hooks`.
- [x] Inside `src/hooks` create a custom hook called `useCookieDough` that returns the cookie dough array found in `src/constants/cookie-dough.js`.
- [x] In `src` create a folder called `state`.
- [ ] Inside `src/state` create a file called `cart-slice.js`. Try following [this guide](https://redux-toolkit.js.org/tutorials/quick-start) from the redux documentation to create a slice of state. (we already created the store, and provided it to the app).
- [ ] In `src/constants/discount-table.js`, modify the discount table to represent the discounts per quantity you want for your app.
  - Remember, the convention we're using in this object is `dozens: discount rate`. So, for example:
  ```js
  const DISCOUNT_TABLE = {
    1: 0.0,
    2: 0.1,
    3: 0.15,
    4: 0.2,
    5: 0.25 
  } 
  // What that object represents is:
  {
    `1 Dozen`: `No Discount`,
    `2 Dozen`: `10% Discount`,
    `3 Dozen`: `15% Discount`,
    // and so on... 
  } 
  ```
- [ ] In the `useCookieDough` hook, modify the `getPrice` function.
  - `getPrice` should take as arguments `dozens` and `basePrice`.
  - Look up the discount rate from `DISCOUNT_TABLE` based on the `dozens` provided. (i.e. `const discountRate = DISCOUNT_TABLE[dozens]`).
  - In the event the customer wants to order a larger quantity than we account for in our `DISCOUNT_TABLE`, we'll want to find the the maximum quantity we do account for, and use the corresponding discount rate for all orders of a larger quantity. In other words, as an example, for orders of 5 Dozen or more, we want to use the discount rate corresponding to 5 Dozen (25%). Find the max quantity discount rate.
  - So, if `DISCOUNT_TABLE[dozens]` does not exist, we should use the `maxDiscountRate` instead. In other words, `const discountRate =` either `DISCOUNT_TABLE[dozens]` OR `maxDiscountRate`
  - Return the discounted price. 

- [ ] The `cart-slice`isn't complete yet. In order to use the slice, it must be added to the `store`. Continue following [this guide](https://redux-toolkit.js.org/tutorials/quick-start). Look at the **Create a Redux State Slice**, and the **Add Slice Reducers to the Store** sections. 
- [ ] In `src/constants/cookie-dough.js` add an `id` property to each cookie dough object. No need to make the ID's fancy. Just do 1,2,3,...etc.
- [ ] In `src/constants/cookie-dough.js` remove the `oneDozen`/`twoDozen` properties, and replace them with a `basePrice` property.
- [ ] In `cart-slice.js` we're going to create two additional functions. These types of functions are called `selectors`, and they'll do exactly what it sounds like. They'll select data from our state. So at the bottom of the file create:
  - [ ] `export const selectItems = (state) => {};`. This function should return all the cart items from state.
  - [ ] `export const selectItemById = (id) => (state) => {};`. This function may look a little funky to you. Don't worry about it. I can explain it better on our next call. This function should return only the cart item with the matching ID. 
