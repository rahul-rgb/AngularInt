import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartNumber = 0
  addToCartValue:boolean = true
  addToCartValuetwo = true
  addToCartValuethree = true
  addToCartValuefour = true
  addSubstract:boolean = false
  addSubstracttwo:boolean = false
  addSubstractthree:boolean = false
  addSubstractfour:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
    this.addToCartValue = false
    this.addSubstract = true
    this.cartNumber = this.cartNumber+1
  }
  addToCartTwo(){
    this.addToCartValuetwo = false
    this.addSubstracttwo = true
    this.cartNumber = this.cartNumber+1
  }
  addToCartThree(){
    this.addToCartValuethree = false
    this.addSubstractthree = true
    this.cartNumber = this.cartNumber+1
  }
  addToCartFour(){
    this.addToCartValuefour = false
    this.addSubstractfour = true
    this.cartNumber = this.cartNumber+1
  }
  productPlus(){
    this.cartNumber = this.cartNumber+1
  }
  productSubstract(){
    this.cartNumber = this.cartNumber-1
    if(this.cartNumber == 0){
      this.addToCartValue = true
      this.addSubstract = false
    }
  }
  productSubstracttwo(){
    this.cartNumber = this.cartNumber-1
    if(this.cartNumber == 0){
      this.addToCartValuetwo = true
      this.addSubstracttwo = false
    }
  }
  productSubstractthree(){
    this.cartNumber = this.cartNumber-1
    if(this.cartNumber == 0){
      this.addToCartValuethree = true
      this.addSubstractthree = false
    }
  }
  productSubstractfour(){
    this.cartNumber = this.cartNumber-1
    if(this.cartNumber == 0){
      this.addToCartValuefour = true
      this.addSubstractfour = false
    }
  }
}
