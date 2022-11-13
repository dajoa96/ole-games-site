import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Directive({
  selector: '[appCopyClipboard]'
})
export class CopyClipboardDirective {

  constructor(
    private toastService: ToastService
  ) {

  }

  @Input("copy-clipboard")
  public payload!: string;

  @Input("context")
  public context!: string;

  @Output("copied")
  public copied: EventEmitter<string> = new EventEmitter<string>();

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.payload) return;

    const listener = (e: ClipboardEvent) => {
      const clipboard: any = e.clipboardData /*|| window["clipboardData"]*/;
      clipboard.setData("text", this.payload.toString());
      e.preventDefault();
      this.copied.emit(this.payload);
      this.toastService.showStandardToast({
        header: 'Atention',
        content: 'Successfully copied to Clipboard',
        type: 'success',
        time: 1000
      });
    };

    document.addEventListener("copy", listener, false)
    document.execCommand("copy");
    document.removeEventListener("copy", listener, false);
  }

}
