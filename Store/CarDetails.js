export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'Car', 'MaintPrompt', 'Profile', 'Promotion', 'Providers', 'CarDetails', 'CarHelp', 'Records', 'Standards' ]
    },
    'title': 'Car Details',
    'page': `
    <section class='secondPage'>
        <section class='homeMenu'>
          <h4 class = 'normalComments'>2009 <br>Infinity 
            <br>G35X Coupe
            <br>License: GO FSTR Missouri
            <br>Drive History: Commute
            <br>Miles/Year: 11,217
          </p>
        </section>
        <section class='carPic'>
            <h4>Mileage 86,252</h4>
        </section>
        <section class ='contentMessage'>
            <div class='messageItem'>
                <h4 class='maintHopeless'><b>66,000    Oil Change Now Hopeless</b></h4>
                <h5 class='maintHopeless'>YOU ARE PATHETIC. YOUR CAR IS FALLING APART. GET MOVING AND FIX YOUR CAR!</h5>
            </div>
            <div class='messageItem'>
                <h4 class='normalMessage'><b>80,000   Break Service Warning</b></h4>
                <h5 class='normalMessage'>What are you doing - taking a nap? Get up and move it. Important maintenance now needed!</h5>
            </div>
            <div class='messageItem'>
                <h4 class='maintHeadsUp'><b>100,000   Transmission Heads-up</b></h4>
                <h5 class='maintHeadsUp'>Are you sleepy? Time to wake up and get ready! Important service needed soon!</h5>
            </div>
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

const dataStore = {};

dataStore.garage = [ {
    'ID	 ': 1,
    'make': 'Infinity',
    'model': 'G35x',
    'year': '2009',
    'VIN': 'X231876',
    'carPic': './Data/car1.jpg',
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
