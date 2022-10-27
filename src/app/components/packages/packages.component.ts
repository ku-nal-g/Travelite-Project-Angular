import { Component, OnInit } from '@angular/core';
import { PackagesDataService } from 'src/app/services/packages-data.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  packagesList1:any = [];
  packagesList2:any = [];
  showMorePackages:boolean = false;
  showLoader:boolean = false;
  showMoreButton:boolean = true;

  constructor(private packagesData:PackagesDataService) { }

  ngOnInit(): void {
    this.packagesData.getPackagesInfo().subscribe((res)=>{
      for(let i=0;i<6;i++){
        this.packagesList1.push(res[i]);
      }
      for(let i=6;i<res.length;i++){
        this.packagesList2.push(res[i]);
      }
    })
  }

  loadMorePackages(){
    this.showMoreButton = false;
    this.showLoader = true;
    setTimeout(()=>{
      this.showMorePackages = true;
      this.showLoader = false;
    },5000)
  }

}
