import { Component, OnInit } from '@angular/core';
import { DataService, Footballer } from '../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent implements OnInit {

  footballers: Footballer[]
  constructor(
    private service:DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.service.getAllFootballers().subscribe(data => {
      this.footballers = data;
    }, error => {

    })
  }

  peopleListChanged(): void {
    this.ngOnInit();
  }

  navigationToMore(id: string) {
    console.log("more"+id)

    this.router.navigate(['more', id])
  }
  delete(id) {
    
    console.log(id)
    this.service.deleteById(id).subscribe (
      response => {
        this.ngOnInit();
      }
    )
  }
  update(id) {
    this.router.navigate(['update',id])
  }
  more(id) {
    this.router.navigate(['more',id])
  }
  addNewFootballer(){
    this.router.navigate(['add'])
  }
}
