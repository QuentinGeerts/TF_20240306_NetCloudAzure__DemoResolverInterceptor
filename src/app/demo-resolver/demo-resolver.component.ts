import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-resolver',
  templateUrl: './demo-resolver.component.html',
  styleUrl: './demo-resolver.component.scss'
})
export class DemoResolverComponent implements OnInit {

  user!: any;

  constructor (private route: ActivatedRoute) {}

  ngOnInit (): void {
    
    this.user = this.route.snapshot.data['user'];
    console.log('this.user :>> ', this.user);
  }

}
