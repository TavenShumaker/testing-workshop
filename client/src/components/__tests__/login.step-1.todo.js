import React from 'react'
import ReactDOM from 'react-dom'
import Login from './../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values

  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const {username, password} = form.elements
  username.value = 'TestUser'
  password.value = 'TestPassword'

  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  form.dispatchEvent(new window.Event('submit'))

  // Assert
  // ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

/* 
So my take away from this challenge is that to understand what needs to be tested all that you need to do is think "how is the user going to be using this component", and translate that into all three parts of the testing process (Arrange, Act, Assert)

Arrange: 
- make sure that our component is rendered
- find username and password input fields
- assign those fields values

Act:
-press the submit button

Assert:
-ensure that the submit funtion was called
-ensure that the submit funciton was called with the proper arguments
*/