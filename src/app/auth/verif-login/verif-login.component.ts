import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verif-login',
  templateUrl: './verif-login.component.html',
  styleUrls: ['./verif-login.component.css']
})
export class VerifLoginComponent implements OnInit {


  public verifForm = {
    verifCode: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verif() {
    if(this.verifForm.verifCode == '12654754') {
      this.router.navigateByUrl('/login/'+this.verifForm.verifCode);
    } else {
      this.router.navigateByUrl('/verif-login');
    }
  }

}
