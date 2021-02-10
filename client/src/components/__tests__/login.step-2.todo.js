// using helpful utilities
import React from 'react'
import ReactDOM from 'react-dom'
// you'll need these:
import {generate} from 'til-client-test-utils'
import {render, Simulate} from 'react-testing-library'
// note that til-client-test-utils is found in `client/test/til-client-test-utils`
import Login from '../login'

/*
what do i need to do here?
Arrange:
-create a fake user
-create a fake handle submit
-render Login (returns a container, getByLabelText, getByText)

-get input with label username and set value
-get input with label password and set value
-get the button with text submit

Act:
-simulate a submit action on the button

Assess:
-was handle submit called once
-was it called with the correct args
- was it called by a submit
*/

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // use generate.loginForm() here
  const fakeUser = generate.loginForm()
  const handleSubmit = jest.fn()
  const { container, getByLabelText, getByText } = render(<Login onSubmit={handleSubmit}/>);

  const usernameNode = getByLabelText('Username');
  const passwordNode = getByLabelText('Password');
  const submitButtonNode = getByText('Submit');
  //this is the only one that the user wouldn't be accessing by text, and you need to use query selector to get this element
  const formNode = container.querySelector('form');

  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password

  // Act
  Simulate.submit(formNode);

  // Assert
  // no change necessary here
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitButtonNode.type).toBe('submit')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-2%20(react-testing-library)&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

/*
The library simply makes things easier because it allows you to access elements the way that the user would access them. The parts that you need, like a form, that the user doesn't care about must be accessed classically using query selector.

Buttons and text input fields are accessed by text and by labels just like they are acessed by a user.
*/
