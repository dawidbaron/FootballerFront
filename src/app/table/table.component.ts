import { Component, OnInit } from '@angular/core';
import { DataService, Footballer } from '../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  footballers: Footballer[];
  id:string;


  constructor(
    private service: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
   
 
    this.id = this.route.snapshot.params['id'];

  this.service.getAllFootballers().subscribe(data => { 
  this.footballers = data;
  console.log(this.footballers)
  }, error => {
    })
  }

  deleteFootballer(id) {
     this.service.deleteById(id).subscribe (response => {  this.ngOnInit();}  )
  }

  updateFootballer(id) {
  
    console.log(`update ${id}`)
    this.router.navigate(['update',id])
  }
  addNewFootballer():void{
    this.router.navigate(['add'])
  }
  moreFootballer(id){
    this.router.navigate(['more',id])
  }


}
