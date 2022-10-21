import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

interface ErrorListType {
  [key: string]: string
}

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.sass']
})
export class ErrorPageComponent implements OnInit {
  code!: string;
  private readonly listOfErrorMessages: ErrorListType = {
    '400': "Bad Request",
    '401': "Unauthorized",
    '403': "Forbidden",
    '404': "Page Not Found",
    '500': "Internal Server Error",
    '502': "Bad Gateway"
  };
  message!: keyof ErrorListType;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (!code) {
      this.router.navigateByUrl('').then();
      throw 'No error given';
    }
    this.code = code;
    this.message = this.listOfErrorMessages[code] || 'Unknown Error';
  }

}
