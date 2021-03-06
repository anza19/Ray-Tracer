import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('starts with a count of 0', () => {

    //We're taking advantage of Enzyme's shallow rendering to test our app's initial state
    //A shallow render is a simulated render of a component tree that does not require a DOM
    //It renders only one level of components deep and enables the inspection of the component's contents as well as the
    //simulation of user interaction

    //In the following block, the shallow render of our App is stored in the wrapper variable
    //We then grab the text within 'p' tag within the component's output and check if the text is the same
    //as what was passed to the toEqual matcher function

    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('counter value: 0');
  });

  //Testing user interaction
  it('Increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find('button.increment');

    //The simulate() function on the button variable can simulate a number of DOM events on an element
    //Here we are simulating the click event on the button
    //We've also set up an expectation that the count should be equal to now
    incrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('counter value: 1');
  });

  it('Decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App/>);
    const decrementButton = wrapper.find('button.decrement');
    decrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('counter value: -1');
  });

  it('Resets the count to 0', () => {
    const wrapper = shallow(<App/>);
    const resetButton = wrapper.find('button.reset');
    resetButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('counter value: 0');
  });

});