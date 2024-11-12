import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-sobre-projetos',
  templateUrl: './tela-sobre-projetos.page.html',
  styleUrls: ['./tela-sobre-projetos.page.scss'],
})
export class TelaSobreProjetosPage implements OnInit {
  projeto: any;
  selectedSegment: string = 'detalhes';

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.projeto = navigation.extras.state['projeto'];
    }
  }

  onSegmentChange(segment: string) {
    this.selectedSegment = segment;
  }
}
