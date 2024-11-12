import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ProjectStatusForm',
  templateUrl: './project-status-form.component.html',
  styleUrls: ['./project-status-form.component.scss'],
})
export class ProjectStatusFormComponent implements OnInit {
  clienteData = {
    dataInicio: '',
    dataFim: '',
    valorProjeto: 0,
    statusProjeto: 'iniciado',
    reunioes: [
      {
        data: '',
        hora: '',
        descricao: ''
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  onTipoClienteChange(selectedValue: string) {
    this.clienteData.statusProjeto = selectedValue;
    console.log('Status do Projeto Selecionado:', selectedValue);
  }

  adicionarReuniao() {
    this.clienteData.reunioes.push({
      data: '',
      hora: '',
      descricao: ''
    });
  }

  removerReuniao(index: number) {
    this.clienteData.reunioes.splice(index, 1);
  }
}
