export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'Car', 'MaintPrompts', 'Profile', 'Promotion', 'Providers', 'CarDetails', 'CarHelp', 'Records', 'Standards' ]
    },
    'title': 'Maintenance Prompts',
    'page': `
    <section class='secondPage'>
        <section class='homeMenu2'>
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