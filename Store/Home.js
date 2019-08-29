console.log('first home page log');

export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'Car', 'MaintPrompts', 'Profile', 'Promotion', 'Providers', 'CarDetails', 'CarHelp', 'Records', 'Standards' ]
    },
    'title': 'My Garage!',
    'page': `
    <section class='homeGrid'>
        <section class='homeMenu'>
            <div class='homeMenuForms'>
                <form action='../Store/Home.js'  class='homeMenuForms'>
                  <p class='homeMenuForms'>Drive Style<br>
                    <select name='driveStyleNow'>
                    <option value='Woah!'>Woah!</option>
                    <option value='Careful'>Careful</option>
                    <option value='Steady'>Steady</option>
                    <option value='Charge'>Charge</option>
                    <option value='Backcountry'>Back Country</option>
                    </select>
                  </p>
                  <p class='homeMenuForms'>Maintenance Style<br>
                    <select name='maintStyleNow'>
                    <option value='Late as Possible'>Late as Possible</option>
                    <option value='Early'>Early</option>
                    <option value='On Time'>On Time</option>
                    <option value='Close Enough'>Close Enough</option>
                    <option value='Late as Possible'>Late as Possible</option>
                    <option value='When It Breaks'>When It Breaks</option>
                    </select>
                  </p>
                  <p class='homeMenuForms'>Coach Preference<br>
                    <select name='promptStyleNow'>
                    <option value='Drill Sergeant'>Drill Sergeant</option>
                    <option value='Polite'>Polite</option>
                    <option value='Whine'>Whine</option>
                    <option value='Drill Sergeant'>Drill Sergeant</option>
                    <option value='Don Rickles'>Don Rickles</option>
                    <option value='HAL'>HAL</option>
                    </select>
                  </p>
                  <input type="submit" name="Update" value="Update" />
                </form>
            </div>
        </section>
        <section class='carPic'>
            <h4>Mileage 86,252</h4>
        </section>
        <section class ='maintMessage'>
            <div class='messageItem'>
                <h5 class='normalMessage'>
                What are you doing - taking a nap? Get up and move it. Important maintenance now needed!
                </h5>
            </div>
            <div class='messageItem'>
                <h4 class='maintHeadsUp'><b>100,000   Transmission Heads-up</b></h4>
                <h5 class='maintHeadsUp'>Are you sleepy? Time to wake up and get ready! Important service needed soon!</h5>
            </div>
        </section>
        <section class='promotions'>
             <div class='messageItem'>
                <h4 class='maintHopeless'><b>Oil Change</b></h4>
                <h5 class='normalMessage'><b>Plaza Infinity</b> We are Infinty repair experts. Convenient oil change while you wait! Synthetic Oil change for your Infinity for $39.95 every day!</h5>
                <h5 class='normalMessage'><b>Precision Auto Repair</b> Special for our favorite customers. Synthhetic Oil change $34.99! Drop-off or while you wait!</h5>
            </div>
             <div class='messageItem'>
                <h4 class='maintHeadsUp'><b>Brakes</b></h4>
                <h5 class='normalMessage'><b>Plaza Infinity</b> We are Infinty repair experts. Special on brake service! 20% Off until Sept. 30, 2019.</h5>
                <h5 class='normalMessage'><b>Precision Auto Repair</b> Special for our favorite customers. Special for Brake discs and rotars 25% Off until Nov. 1, 2019.</h5>
                <h5 class='normalMessage'><b>Raymond Exotic Car Repair</b> Specialists for your sports car! High Performance Brake special 30% off until Oct. 19, 2019.</h5>
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
dataStore.promoAvailable = [
    { 'id': 1, 'serviceCategory': 'Brakes', 'promoProvider': 'Plaza Infinity', 'message': 'We are Infinty repair experts - give us a try. Special on brake service! 20% Off until Sept. 30, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 2, 'serviceCategory': 'Oil Change', 'promoProvider': 'Plaza Infinity', 'message': 'Convenient oil change while you wait! Synthetic Oil change for your Infinity for $39.95 every day', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 3, 'serviceCategory': 'Brakes', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Special for Brake discs and rotars 25% Off until Nov. 1, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 4, 'serviceCategory': 'Brakes', 'promoProvider': 'Raymond Exotic Car Repair', 'message': 'Specialists for your sports car! High Performance Brake special 30% off until Oct. 19, 2019.', 'promoDetails': 'placeholder for image or url reference' },
    { 'id': 5, 'serviceCategory': 'Oil Change', 'promoProvider': 'Precision Auto Repair', 'message': 'Special for our favorite customers. Synthhetic Oil change $34.99! Drop-off or while you wait!', 'promoDetails': 'placeholder for image or url reference' },
];
