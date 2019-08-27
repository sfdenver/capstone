// import dataStore first to ensure global data are defined before used
console.log('first index.js');
// import dataStore from './components/dataStore';
console.log('second index.js');
import maintCalc from './components/maintCalc';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Navigo constructor function from the node 'navigo'
import Navigo from 'navigo';
import * as store from './store';
console.log('Store came in as ', store);
import Axios from 'axios';
// import { Http2SecureServer } from 'http2';

const router = new Navigo(location.origin);
const ref = '';

function render(state, dataStore){
    // functions are invoked to return the results for each
    console.log('render using state = ', state);
    document.querySelector('#root').innerHTML = `
      ${maintCalc(state, dataStore)}
      ${Header(state, dataStore)}
      ${Navigation(state, dataStore)}
      ${Main(state, dataStore)}
      ${Footer(state, dataStore)}
    `;

    // updatePageLinks works with 'data-navigo' and the <a href> links in Navigation component
    router.updatePageLinks();
}

console.log('state came in as ', store);


/** following code was replaced with navigo functionality

// Navigation listeners. Elements will not exist until page is rendered.
// event handlers are reattached each time page is rendered

const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click',
        function clickHandler(event){
            event.preventDefault();
            console.log('click function ' + event.target.textContent);
            render(store[event.target.textContent.toLowerCase()]);
            // console.log('hello');
        });
});
// end of replace code
*/

// request to render a page passes in a selected state.
console.log(store.home);
render(store.home);

/**
  .on is a Navigo method - behaves as any event listener
  .on 'listens' to location.pathname and responds accordingly
  ref:  https://github.com/krasimir/navigo#parameterized-urls
  Whatever comes in as 'location.pathname',
  'save' that in the 'params' object under the key 'page.'
*/
// what does .resolve do?

router
    .on(':view', (params) => {
        render(store[params.view]);
    })
    .resolve();

/*
axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    const blogPosts = response.data;
    const blogHTML = blogPosts
        .map(
            (blogPost) => `
              <section>
              <h2>${blogPost.title}</h2>
              <p>${blogPost.body}</p>
              </section>
            `
        )
        .join(' ');

    store.blog.page = blogHTML;
});
*/

/**
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((response) => {
    const blogHTML = response.map((blogPost) => `
    <section>
        <h2>${blogPost.title}</h2>
        <p>${blogPost.body}</p>
    </section>
    `).join(' ');

    store.blog.page = blogHTML;
});
*/
/*
Common section to define global data objects
Short-cut for demo instead of creating database
*/

const dataStore = {};

console.log('first dataStore log');

dataStore.owner = {
    'ID	 ': 1,
    'name': 'Robert Bruce',
    'nickname': 'Bob Bruce',
    'driveStyle': 'Charge',
    'promptStyle': 'Drill Sergeant',
    'maintStyle': 'Close enough'
};

dataStore.garage = [ {
    'ID	 ': 1,
    'make': 'Infinity',
    'model': 'G35x',
    'year': '2009',
    'VIN': 'X231876',
    'carPic': 'url(./Data/car1.jpg)',
    'nickname': 'car 1',
    'currentMileage': 88000,
    'driveHistory': [
        { 'year': 19, 'month': 5, 'day': 15, 'mileage': 83000, 'avgSpeed': 32, 'stopsPerMile': 3.4 },
        { 'year': 18, 'month': 11, 'day': 15, 'mileage': 72000, 'avgSpeed': 32, 'stopsPerMile': 3.4 },
        { 'year': 17, 'month': 2, 'day': 15, 'mileage': 66000, 'avgSpeed': 32, 'stopsPerMile': 3.4 },
        { 'year': 16, 'month': 8, 'day': 15, 'mileage': 55000, 'avgSpeed': 32, 'stopsPerMile': 3.4 }
    ],
    'maintStandards': [ {
        'oil': 7500,
        'air filter': 15000,
        'brakes': 35000,
        'transmission': 75000,
        'engine': 100000
    }, ],
    'warranty': [ { 'summary': 'placeholder' } ],
    'repairs': [ {
        'carID': 1,
        'repairHistory': [ {
            'year': 19,
            'month': 5,
            'day': 15,
            'mileage': 81000,
            'repair': 'Oil',
            'providerName': 'Plaza Infinity'
        }, {
            'year': 18,
            'month': 10,
            'day': 15,
            'mileage': 73000,
            'repair': 'Oil',
            'providerName': 'Plaza Infinity'
        }, {
            'year': 18,
            'month': 1,
            'day': 15,
            'mileage': 63000,
            'repair': 'Oil',
            'providerName': 'Precision Auto Repair'
        }, {
            'year': 17,
            'month': 5,
            'day': 15,
            'mileage': 53000,
            'repair': 'Brakes',
            'providerName': 'Plaza Infinity'
        }, {
            'year': 17,
            'month': 5,
            'day': 15,
            'mileage': 53000,
            'repair': 'Oil',
            'providerName': 'Plaza Infinity'
        } ]
    } ]
} ];


dataStore.serviceProvider = [ {
    'id': 1,
    'providerName': 'Plaza Infinity',
    'phoneNo': '314-285-6114',
    'streetAddress': '11341 Olive Blvd',
    'cityAddress': 'St. Louis',
    'stateAddress': 'MO',
    'zip': '63138',
    'myRating': '5',
    'comments': 'ask for Bill'
},
{
    'id': 2,
    'providerName': 'Precision Auto Repair',
    'phoneNo': '314-611-66666',
    'streetAddress': '10341 Manchester Rd.',
    'cityAddress': 'St. Louis',
    'stateAddress': 'MO',
    'zip': '63138',
    'myRating': '5',
    'comments': 'ask for Bill'
},
{
    'id': 3,
    'providerName': 'Raymond Exotic Car Repair',
    'phoneNo': '314-832-4545',
    'streetAddress': '981 Page Blvd',
    'cityAddress': 'St. Louis',
    'stateAddress': 'MO',
    'zip': '63138',
    'myRating': '5',
    'comments': 'ask for Bill'
},
];

dataStore.promoAvailable = [
    { 'id': 1, 'serviceCategory': 'Brakes', 'promoProvider': 'Plaza Infinity', 'message': 'We are Infinty repair experts - give us a try. Special on brake service! 20% Off until Sept. 30, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 2, 'serviceCategory': 'Oil Change', 'promoProvider': 'Plaza Infinity', 'message': 'Convenient oil change while you wait! Synthetic Oil change for your Infinity for $39.95 every day', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 3, 'serviceCategory': 'Brakes', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Special for Brake discs and rotars 25% Off until Nov. 1, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 4, 'serviceCategory': 'Brakes', 'promoProvider': 'Raymond Exotic Car Repair', 'message': 'Specialists for your sports car! High Performance Brake special 30% off until Oct. 19, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 5, 'serviceCategory': 'Oil Change', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Synthhetic Oil change $34.99! Drop-off or while you wait!', 'promoDetails': 'placeholder for image or url reference' },
];

dataStore.driveStyle = [
    { 'id': 1, 'style': 'Careful', 'driveFactor': 1.25 },
    { 'id': 2, 'style': 'Steady', 'driveFactor': 1 },
    { 'id': 3, 'style': 'Charge', 'driveFactor': 0.75 },
    { 'id': 4, 'style': 'Woah!', 'driveFactor': 0.5 },
    { 'id': 5, 'style': 'Backcountry', 'driveFactor': 0.65 }
];

dataStore.maintStyle = [
    { 'id': 1, 'style': 'Early', 'maintFactor': 0.8 },
    { 'id': 2, 'style': 'On Time', 'maintFactor': 1.0 },
    { 'id': 3, 'style': 'Close Enough', 'maintFactor': 1.2 },
    { 'id': 4, 'style': 'Late as Possible', 'maintFactor': 1.5 },
    { 'id': 5, 'style': 'When It Breaks', 'maintFactor ': 3.0 }
];

dataStore.promptStyle = [ {
    'id': 1,
    'style': 'Polite',
    'maintMessage': [
        { 'id': 1, 'Heads-up': 'Heads-up, important service needed soon!' },
        { 'id': 2, 'Nudge': 'Nudging you, important maintenance now needed!' },
        { 'id': 3, 'Warning': 'Warning! important service overdue!' },
        { 'id': 4, 'Strong Warning': 'Very Urgent, important service seriously overdue!' },
        { 'id': 5, 'Hopeless': 'Your car may break, important service hopelessly overdue!' }
    ]
},
{
    'id': 2,
    'style': 'Whine',
    'maintMessage': [
        { 'id': 1, 'Heads-up': 'Heads-up, important service needed soon!' },
        { 'id': 2, 'Nudge': 'Nudging you, important maintenance now needed!' },
        { 'id': 3, 'Warning': 'Warning! important service overdue!' },
        { 'id': 4, 'Strong Warning': 'Very Urgent, important service seriously overdue!' },
        { 'id': 5, 'Hopeless': 'Your car may break, important service hopelessly overdue!' }
    ]
},
{
    'id': 3,
    'style': 'HAL',
    'maintMessage': [
        { 'id': 1, 'Heads-up': 'Heads-up, important service needed soon!' },
        { 'id': 2, 'Nudge': 'Nudging you, important maintenance now needed!' },
        { 'id': 3, 'Warning': 'Warning! important service overdue!' },
        { 'id': 4, 'Strong Warning': 'Very Urgent, important service seriously overdue!' },
        { 'id': 5, 'Hopeless': 'Your car may break, important service hopelessly overdue!' }
    ]
},

{
    'id': 4,
    'style': 'Drill Sergeant',
    'maintMessage': [
        { 'id': 1, 'Heads-up': 'Are you sleepy? Time to wake up and get ready! Important service needed soon!' },
        { 'id': 2, 'Nudge': 'What are you doing - taking a nap? Get off your A** and move it. Important maintenance now needed!' },
        { 'id': 3, 'Warning': 'ARE YOU HEARING THIS! YOUR CAR SERVICE IS LONG OVERDUE!' },
        { 'id': 4, 'Strong Warning': 'YOU ARE FRIGGING KIDDING ME. GROW UP AND GET THIS DONE NOW! RIGHT NOW! YOUR ARE SERIOUSLY OVERDUE!' },
        { 'id': 5, 'Hopeless': 'MAGGOT - YOU HOPELESS PIECE OF S**T. YOUR CAR IS FALLING APART. YOU ARE PATHETIC. NOBODY BUT A BABY IGNORES THEIR CAR THIS LONG. GET MOVING AND FIX YOUR CAR!' }
    ]
},
{
    'id': 5,
    'style': 'Insult',
    'maintMessage': [
        { 'id': 1, 'Heads-up': 'Hey Pea Brain, your car needs service soon - start now and you might be on time!' },
        { 'id': 2, 'Nudge': 'Knucklehead - I told you it was coming. Important maintenance now needed!' },
        { 'id': 3, 'Warning': 'What is wrong with you! Important service is overdue! Get it fixed now' },
        { 'id': 4, 'Strong Warning': 'Last chance! Your car is better than you! VERY URGENT SERVICE LONG OVERDUE!' },
        { 'id': 5, 'Hopeless': 'You may be worthless, and so will your car. It may not matter anymore. Critical service is hopelessly overdue!' }
    ]
}
];

dataStore.promoAvailable = [
    { 'id': 1, 'serviceCategory': 'Brakes', 'promoProvider': 'Plaza Infinity', 'message': 'We are Infinty repair experts - give us a try. Special on brake service! 20% Off until Sept. 30, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 2, 'serviceCategory': 'Oil Change', 'promoProvider': 'Plaza Infinity', 'message': 'Convenient oil change while you wait! Synthetic Oil change for your Infinity for $39.95 every day', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 3, 'serviceCategory': 'Brakes', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Special for Brake discs and rotars 25% Off until Nov. 1, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 4, 'serviceCategory': 'Brakes', 'promoProvider': 'Raymond Exotic Car Repair', 'message': 'Specialists for your sports car! High Performance Brake special 30% off until Oct. 19, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 5, 'serviceCategory': 'Oil Change', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Synthetic Oil change $34.99! Drop-off or while you wait!', 'promoDetails': 'placeholder for image or url reference' },
];

console.log('second dataStore log');