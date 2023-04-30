import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';

const root = createRoot(document.querySelector('#app'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);















/*
const COHORT_NAME = '2301-FTB-ET-WEB-FT'

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const returned = await fetch(`${BASE_URL}/posts`)

TO MAKE CHANGES "git add ." then "git commit -m "" "
Then once done "git push"
*/
