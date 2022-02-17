import { Component, OnInit, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  products : any = []
  observer = new IntersectionObserver((products) => {this.observeArticles(products)}, {threshold : 0.3});
  @ViewChildren('momentOfDay') momentsOfDayRef: any;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.momentsOfDayRef.changes.subscribe((momentsOfDay : any) => {
        momentsOfDay._results.forEach((momentOfDay: any) => {
            this.observer.observe(momentOfDay.nativeElement)
        });
    })
}

  onGenerateProgram() {
      this.products = [{
        timeOfDay : "Micul Dejun",
        productList : [{
            imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
            title : "Bla",
            text : "Bla Bla"
        },
        {
            imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
            title : "La",
            text : "La La"
        }]
    },
    {
        timeOfDay : "Prânz",
        productList : [
            {
                imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
                title : "A",
                text : "A a"
            },
            {
                imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
                title : "ABCDEF",
                text : "U"
            },
            {
                imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
                title : "Bla",
                text : "Bla Bla"
            },
        ]
    },
    {
        timeOfDay : "Cina",
        productList : [
            {
                imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
                title : "La",
                text : "La La"
            },
            {
                imageUrl: "https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711==",
                title : "A",
                text : "A a"
            },
        ]
    }
]
  }

  onGenerateMomentOfDay(momentOfDay : number) {
    this.products[momentOfDay].productList = []
  }

  onBuy(product : any) {
      this.dialog.open(ShopComponent, {
          data : product
      })
  }

  observeArticles(momentsOfDay : any) {
    momentsOfDay.forEach((momentOfDay : IntersectionObserverEntry) => {
        if (momentOfDay.isIntersecting){
            momentOfDay.target.classList.add("show")
            this.observer.unobserve(momentOfDay.target)
        }
    })
}
}
