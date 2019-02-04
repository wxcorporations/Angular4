import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  private newServerName: string;
  private newServerContent: string;

  @Output()
  private sentData = new EventEmitter();

  private dataServer(_name: string, _type: string, _content: string) {
    return {name: _name, type: _type, content: _content}
  }

  constructor() {
  }

  ngOnInit() {
  }

  private clearInputs() {
    this.newServerContent = '';
    this.newServerName = '';
  }

  onAddServer() {
    if (this.newServerName && this.newServerContent) {
      this.sentData.emit(
        this.dataServer(this.newServerName, 'server', this.newServerContent)
      );
      this.clearInputs();
    }
  }

  onAddBlueprint() {
    if (this.newServerName && this.newServerContent) {
      this.sentData.emit(
        this.dataServer(this.newServerName, 'blueprint', this.newServerContent)
      );
      this.clearInputs();
    }
  }


}
