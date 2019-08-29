export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'Car', 'MaintPrompt', 'Profile', 'Promotion', 'Providers', 'CarDetails', 'CarHelp', 'Records', 'Standards' ]
    },
    'title': 'Car Details',
    'page': `
    <section class='secondPage'>
        <section class='homeMenu2'>
          <h4 class = 'normalComments'>2009 <br>Infinity 
            <br>G35X Coupe
            <br>License: GO FSTR Missouri
            <br>Drive History: Commute
            <br>Miles/Year: 11,217
          </p>
        </section>
        <section class='carPic2'>
          <h4 class='carPicText'>Mileage 96,252</h4>
        </section>
        <section class ='contentMessage'>
          <div>
          <table>
            <tr>
              <th>Date<br>Miles</th>
              <th>Provider><br>Service></th>
            </tr>
            <tr>
              <td>5/15/2019
                <br>81,000
                </td>
              <td>Plaza Infinity
                <br>Oil: Oil Change, Synthetic Oil 15,000 miles,>
                </td>
            </tr>

            <tr>
              <td>3/10/2018
                <br>63,000
                </td>
              <td>Plaza Infinity
                <br>Oil: Oil Change, Synthetic Oil 15,000 miles,>
                </td>
            </tr>

            <tr>
              <td>1/15/2017
                <br>43,000
                </td>
              <td>Precision Auto Repair
                <br>Oil: Oil Change, Synthetic Oil 15,000 miles,>
                </td>
            </tr>

            <tr>
              <td>1/15/2017
                <br>43,000
                </td>
              <td>Precision Auto Repair
                <br>Brakes: Brake Disks and Pads, Front, Rear, Lifetime Warranty>
                </td>
            </tr>

            <tr>
              <td>9/10/2015
                <br>28,000
                </td>
              <td>Plaza Infinity
                <br>Oil: Oil Change, Synthetic Oil 15,000 miles,>
                </td>
            </tr>
          </table>
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