import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  goTo(path) {
    this.router.navigate([path], { relativeTo: this.route });
  }

}
