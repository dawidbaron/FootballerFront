import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, Footballer } from '../service/data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  FootballerId: string
  footballer: Footballer
  constructor(private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
) { }

  ngOnInit(): void {
    this.FootballerId = this.route.snapshot.params['id'];
    this.dataService.getFootballerById(this.FootballerId).subscribe(data => {
     
      this.footballer=data;
 
    }, error => {
      console.log(error);   
    })
  }

}
