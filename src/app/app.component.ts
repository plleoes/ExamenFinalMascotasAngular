import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from './auxiliar/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenFinalMascotasAngular';
 
  
  constructor(private router:Router, public global: Global){
    global.loginbtn="Login";

  }
  ngOnInit() {
    this.router.navigateByUrl('/');
  }


  login(){
    if (localStorage.getItem('usuario')!=null && this.global.loginbtn=="Logout") {
      localStorage.removeItem('usuario');
      this.router.navigateByUrl('/');
      this.global.loginbtn="Login";
    } else {
      this.router.navigate(["login"]);
      console.log(localStorage.getItem('usuario'));
    }
  }

}
