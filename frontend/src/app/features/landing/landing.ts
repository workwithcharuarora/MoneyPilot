import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ imports: [RouterLink], templateUrl: './landing.html' })
export class Landing {
  readonly features = [
    {
      icon: '◫',
      name: 'Your money, in one view',
      text: 'Bring accounts and transactions into a clearer picture of your everyday finances.',
    },
    {
      icon: '◎',
      name: 'A plan for every dollar',
      text: 'Make room for what matters with budgets, upcoming bills and savings goals.',
    },
    {
      icon: '03',
      name: 'See the bigger picture',
      text: 'Understand your habits over time with simple, useful financial reports.',
    },
  ];
  readonly faqs = [
    {
      q: 'Is MoneyPilot free?',
      a: 'MoneyPilot is being built as a free, public personal finance application.',
    },
    {
      q: 'Can I create an account today?',
      a: 'Not yet. This foundation introduces the experience; registration and sign-in are placeholders for a future task.',
    },
    {
      q: 'Is the dashboard showing real financial information?',
      a: 'No. Every amount in the preview is fictional and for illustration only. No customer information is used.',
    },
    {
      q: 'Will other people be able to see my finances?',
      a: 'MoneyPilot is intended for individual, private workspaces in a multi-user application. Authentication and database access policies must be implemented and reviewed before any financial information can be stored.',
    },
  ];
}
