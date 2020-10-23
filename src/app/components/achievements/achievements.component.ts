import { Component, OnInit } from '@angular/core';
import {ConfigService} from "src/app/config.service"
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievement: {
    skillTitle:String,
    datapercent:any

}
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.achievement=this.getSkill(),
    console.log(this.achievement)
  }

  getSkill(){
    return this.config.getConfig().achievement
  }

}
