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
            <img src='./Data/car1.jpg' >
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