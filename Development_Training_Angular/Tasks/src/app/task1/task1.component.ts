import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  leaveData: any = {
    name: '',
    startdate: '',
    enddate: '',
    reason: ''
  }
  savedata: any[] = [];
  data: any

  submit() {
    {
      if (this.data) {
        this.data.name = this.leaveData.name
        this.data.startdate = this.leaveData.startdate
        this.data.enddate = this.leaveData.enddate
        this.data.reason = this.leaveData.reason
        this.data = null
      }
      else {
        this.savedata.push({
          name: this.leaveData.name,
          satrtdate: this.leaveData.satrtdate,
          enddate: this.leaveData.enddate,
          reason: this.leaveData.reason
        })
      }

      this.leaveData.name = ''
      this.leaveData.startdate = ''
      this.leaveData.enddate = ''
      this.leaveData.reason = ''
    }
  }

  edit(i: any) {


    this.leaveData = i
    this.leaveData.name = i.name
    this.leaveData.satrtdate = i.satrtdate
    this.leaveData.enddate = i.enddate
    this.leaveData.reason = i.reason

  }
}
