import {Component} from '@angular/core'; // importa el componente del nucleo de angular

@Component({
    selector:'hello-word',    //es el nombre que sele va a asignar en las etiquetas de html para ser llamado
    templateUrl:'./primer.component.html'   ,
    styles: ['h1 {background:#000; color:#fff}']

})
export class HelloWorld{
    title = 'Hola tu primer Angular' //para poder usarlo es necesario poner en el html {{}}



}