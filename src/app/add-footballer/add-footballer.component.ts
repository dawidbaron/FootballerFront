import { Component, OnInit } from '@angular/core';
import { DataService, Footballer } from 'src/app/service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

export class Image {

  goalkeeper: string
  defender: string
  midfielder: string
  forward: string

  constructor() {
    this.goalkeeper= 'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fbl-eur-c1-schalke-manchester-5c7a85af7d311abc94000001.jpg'

    this.defender= 'https://ichef.bbci.co.uk/news/410/cpsprodpb/BBE2/production/_102689084_gettyimages-999516806.jpg'

    this.midfielder= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Francesco_Totti_Chelsea_vs_AS-Roma_10AUG2013.jpg/282px-Francesco_Totti_Chelsea_vs_AS-Roma_10AUG2013.jpg'

    this.forward= 'https://www.tongafootball.to/cms/wp-content/uploads/2018/07/Shannon-01-1-e1532035536495.jpg'
  }
}

export class PostFootballer {

  FirstName: string
  LastName: string
  ImgPath: string

  constructor(FirstName: string, LastName: string, ImgPath: string) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.ImgPath = ImgPath;
  }
}

@Component({
  selector: 'app-add-footballer',
  templateUrl: './add-footballer.component.html',
  styleUrls: ['./add-footballer.component.css']
})
export class AddFootballerComponent implements OnInit {

  FirstName: string
  LastName: string
  ImgPath: string


  constructor(

    private dataService: DataService,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
  }
  Login(){
    var image = new Image();

    if (this.ImgPath === 'goalkeeper') {
      console.log(image.goalkeeper)
      this.ImgPath = image.goalkeeper;
    }
    else if (this.ImgPath === 'defender') {
      this.ImgPath = image.defender;
    }
    else if (this.ImgPath === 'midfielder') {
      this.ImgPath = image.midfielder;
    }
    else if (this.ImgPath === 'forward') {
      this.ImgPath = image.forward;
    }

    var footballer = new PostFootballer(this.FirstName, this.LastName, this.ImgPath)

    this.dataService.addFootballer(footballer).subscribe(response => {

    }, error => {

      console.log(error);
    })
    this.router.navigate(['table'])
  }

}
