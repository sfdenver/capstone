console.log('first home page log');

export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'Car', 'MaintPrompts', 'Profile', 'Promotion', 'Providers', 'CarDetails', 'CarHelp', 'Records', 'Standards' ]
    },
    'title': 'This is the home page!',
    'page': `
    <section class='homeGrid'>
        <section class='homeMenu'>
            <p>Mileage<span>FORM ENTRY<span>Drive Style<span>FORM ENTRY</p>
            <p>Maintenance Style<span>FORM ENTRY<span>Prompt Style<span>FORM ENTRY</p>
            <p>Calc Maintenance Button</p>
        </section>
        <section class='carPic'>
            <img src='../Data/car1.jpg' >
        </section>
        <section class='maintMessage'>
            <p> To Do - Maintenance Prompts</p>
            <p> To Do - Maintenance Prompts</p>
        </section>
        <section class='promotions'>
            <div>
                <p> To Do - Marketing Promotion Information  </p>
                <a href = "#" class = "cta-btn" >Promotion Details </a>
            </div>    
            <div>
                <p> To Do - Marketing Promotion Information  </p>
                <a href = "#" class = "cta-btn" >Promotion Details </a>
            </div>    
        </section>
    </section>

      `
};

/*
        <-- <p>${dataStore.garage(make)}</p>  -->
        <-- <p>img src=${dataStoregarage}</p>  -->
*/

const dataStore = {};

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