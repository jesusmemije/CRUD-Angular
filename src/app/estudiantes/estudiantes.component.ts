import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styles: [
  ]
})
export class EstudiantesComponent implements OnInit {

  titulo: string = "Lista de estudiantes";
  prueba: string = "This is a test for development Students";

  estudiantes!: Estudiante[];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe(
      e => this.estudiantes = e
    );
  }

  delete(estudiante:Estudiante): void {
    console.log("Hello from delete")
    this.estudianteService.delete(estudiante.id).subscribe(
      res => this.estudianteService.getAll().subscribe(
        response => this.estudiantes = response
      )
    )
  }

}
