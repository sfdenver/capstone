export default {
    'links': {
        'primary': [ 'Home' ],
        'dropdown': [ 'Home', 'CarDetails', 'Promotion', 'CarHelp', 'Records' ]
    },
    'title': 'Promotions',
    'page': `
    <section class='secondPage'>
        <section class='homeMenu2'>
          <div class='homeMenuForms'>
          <b>
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
          </b>
          </div>
        </section>
        <section class='carPic2'>
            <h4 class='carPicText'>Mileage 96,252</h4>
        </section>
        <section class ='contentMessage'>
          <div class='messageItem'>
            <h4 class='maintHopeless'><b>Oil Change</b></h4>
            <h5 class='normalMessage'><b>Plaza Infinity</b> </h5>
            <img src='/oilDeal1.jpg' />
          </div>
        </section>
    </section>
`
};