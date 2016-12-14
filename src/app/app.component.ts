import { Component } from '@angular/core';
import { Candidat } from './model/candidat';
import { User } from './model/user';
import { CandidatService } from './service/candidat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title: string = 'Online elections';
  candidats: Array<Candidat>;
  currentUser: User;

  login(user)
  {
    this.currentUser = new User(user,null);
  }

  constructor(private candidatService: CandidatService) {

    /* REST data */
    this.candidatService.getAllCandidat()
      .map(res => <Candidat[]>res.json())
      .subscribe(response => {
        console.log(response);
        this.candidats = response;
      });
  }


}
