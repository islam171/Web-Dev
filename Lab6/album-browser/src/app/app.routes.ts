import {Routes} from '@angular/router';
import {About} from "./pages/about/about";
import {AlbumDetail} from "./pages/album-detail/album-detail";
import {AlbumPhotos} from "./pages/album-photos/album-photos";
import {Home} from "./pages/home/home";
import {Albums} from "./pages/albums/albums";

export const routes: Routes = [
    {
        path: '',
        component: Home
    },{
        path: 'home',
        component: Home
    },{
        path: 'about',
        component: About
    },{
        path: 'albums',
        component: Albums
    },{
        path: 'albums/:id',
        component: AlbumDetail,
    },{
        path: 'albums/:id/photos',
        component: AlbumPhotos
    },

];
