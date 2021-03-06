import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPlaylistComponent} from './add-playlist/add-playlist.component';
import {EditPlaylistComponent} from './edit-playlist/edit-playlist.component';
import {ListPlaylistComponent} from './list-playlist/list-playlist.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PlaylistRoutingModule} from './playlist-routing.module';
import {httpInterceptorProviders} from '../auth/auth-interceptor';
import {PlaylistService} from './playlist.service';
import {DetailPlaylistComponent} from './detail-playlist/detail-playlist.component';
import {AllSongComponent} from './all-song/all-song.component';
import {SongPlaylistComponent} from './song-playlist/song-playlist.component';
import {ItemPlaylistComponent} from './item-playlist/item-playlist.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';


@NgModule({
  declarations: [AddPlaylistComponent,
    EditPlaylistComponent,
    ListPlaylistComponent,
    ItemPlaylistComponent,
    DetailPlaylistComponent,
    AllSongComponent,
    SongPlaylistComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PlaylistRoutingModule,
        NgxAudioPlayerModule
    ],
  providers: [PlaylistService, httpInterceptorProviders]
})
export class PlaylistModule {
}
