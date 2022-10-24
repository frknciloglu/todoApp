import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = 'Furkan';

  items = [
    { description: 'kahvaltı', action: 'no' },
    { description: 'Sinema', action: 'yes' },
    { description: 'çay', action: 'yes' },
    { description: 'kahve', action: 'no' },
  ];
}
