import { Component, OnInit } from '@angular/core';
import { DataService, Footballer } from '../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  footballerId: string
  footballer: Footballer
  FirstName: string
  LastName: string
 
constructor(
    
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.footballerId = this.route.snapshot.params['id'];
    this.dataService.getFootballerById(this.footballerId).subscribe(data => {
     
      this.footballer=data;
      this.FirstName = data.firstName
      this.LastName = data.lastName

    }, error => {
      console.log(error);   
    })

  }

  handleLogin() {

    this.footballer.firstName = this.FirstName 
    this.footballer.lastName = this.LastName
   
    this.dataService.updateFootballerById(this.footballer).subscribe(response => {
     
    }, error => {
      
      console.log(error);
    })
      this.redirectTo('table')
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

}
