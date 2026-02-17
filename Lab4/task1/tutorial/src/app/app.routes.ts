import {Routes} from '@angular/router';
import {Home} from './pages/Home/home'
import {About} from "./pages/About/about";
import {SignUpPage} from "./pages/Sign up/signup";

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: Home
    }, {
        path: 'about',
        title: 'About Page',
        component: About
    }, {
        path: 'signup',
        title: 'Sign Up Page',
        component: SignUpPage
    }
];
