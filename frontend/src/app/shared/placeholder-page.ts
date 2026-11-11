import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  template: `<section class="placeholder wrap">
    <p class="eyebrow">MONEYPILOT · FOUNDATION</p>
    <h1>{{ route.snapshot.data['heading'] }}</h1>
    <p>
      This page is ready for a future implementation. No authentication or financial data processing
      is available yet.
    </p>
    <a class="button" routerLink="/">Back to MoneyPilot <span aria-hidden="true">↗</span></a>
  </section>`,
})
export class PlaceholderPage {
  readonly route = inject(ActivatedRoute);
}
