import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class FooterComponent {}
