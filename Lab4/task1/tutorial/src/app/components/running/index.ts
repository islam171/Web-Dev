import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    template: `
    @if(isServerRunning){
      <span>Yes, the server is running</span> 
    }@else{
      <span>No, the server is not running</span>
    }
  `,
})
export class Server {
    // add the boolean property here
    isServerRunning = true;
}
