import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrandCost } from './entities/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';
  /*
  Senaryo:
  Apple firması her sene ettiği kar marjını diğer firmalarla kıyaslamak için 
  bir platform hazırlamak istiyor elinde diğer firmalara ait yapılan;
  satış bedeli,harcanan ham madde tutarı,işçilik maliyeti
  bulunduğu bir liste var bu listeyi sisteme ekleyip diğer firmalarla karşılaştırma
  yapılmasını istiyor
  */
  brandList:BrandCost[]=[
    {
      brandId: 1,
      brandName: "Apple",
      income: 1000000,
      personalCost: 500000,
      rawMaterialCost: 200000
    },
    {
      brandId: 2,
      brandName: "Xiaomi",
      income: 800000,
      personalCost: 400000,
      rawMaterialCost: 150000
    },
    {
      brandId: 3,
      brandName: "Samsung",
      income: 900000,
      personalCost: 450000,
      rawMaterialCost: 180000
    },
    {
      brandId: 4,
      brandName: "Huawei",
      income: 850000,
      personalCost: 420000,
      rawMaterialCost: 160000
    },
    {
      brandId: 5,
      brandName: "Sony",
      income: 750000,
      personalCost: 380000,
      rawMaterialCost: 140000
    }
  ]
}
