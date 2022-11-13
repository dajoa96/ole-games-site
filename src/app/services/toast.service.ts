import { Injectable, TemplateRef  } from '@angular/core';
import { StandardToastConfig } from '../models/standard-toast-config.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showStandardToast(config: StandardToastConfig = {                  //Objeto de configuración
    header: null,                                                            //Contenido del header, si está vacío no se renderizará un header
    type: null,                                                              //Tipo si es success, error, etc. Si está vacío se utilizara el estilo por defecto
    content: null,                                                           //Contenido del toast, si está vacío se colocara como: 'No Content is set'
    time: 3000                                                               //Tiempo de desaparición por defecto 5 segundos (5000ms)
  }): void {
    const toastCgf: any = {};

    toastCgf.delay = config.time;
    toastCgf.autohide = true;

    if (config.header || config.header !== '') {                              //Si hay una propiedad de header valida se crea de lo contrario no
      toastCgf.headertext = config.header;
    }

    switch(config.type) {                                                     //Definir el tipo de toast
      case 'success':
        toastCgf.classname = 'bg-success text-light';
      break;
      case 'info':
        toastCgf.classname = 'bg-info text-light';
      break;
      case 'warning':
        toastCgf.classname = 'bg-warning text-light';
      break;
      case 'warning-text-dark':
        toastCgf.classname = 'bg-warning text-dark';
      break;
      case 'danger':
        toastCgf.classname = 'bg-danger text-light';
      break;
      default:
        toastCgf.classname = '';
      break;
    }

    this.show(config.content || 'Empty Toast', toastCgf);
  }
}
