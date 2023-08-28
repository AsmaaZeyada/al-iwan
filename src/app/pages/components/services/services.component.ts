import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageContentComponent } from 'src/app/shared/components/image-content/image-content.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ImageContentComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  items: { iamge: string; title: string,desc:string; direc: string; first: boolean ,class:string}[] = [
    {
      iamge: '/assets/images/services/one.png',
      title:"التصميم المعمارى",
      desc:
        `-هذا النص هو مثال لنص يمكن ان يوضع هنا

        -هذا النص هو مثال لنص يمكن ان يوضع هنا  .`,
      direc: 'flex',
      first: true,
      class:"mt-3"

    },
    {
      iamge: '/assets/images/services/two.png',
      title:"التصميم المعمارى",
      desc:
      `-هذا النص هو مثال لنص يمكن ان يوضع هنا

        -هذا النص هو مثال لنص يمكن ان يوضع هنا  .`,
        direc: 'flex-row-reverse ',
      first: false,
      class:"mt-3"
    },
    {
      iamge: '/assets/images/services/three.png',
      title:"التصميم المعمارى",
      desc:
      `-هذا النص هو مثال لنص يمكن ان يوضع هنا

        -هذا النص هو مثال لنص يمكن ان يوضع هنا  .`,
      direc:'',
      first: true,
      class:"mt-3"
    },
    {
      iamge: '/assets/images/services/one.png',
      title:"التصميم المعمارى",
      desc:
      `-هذا النص هو مثال لنص يمكن ان يوضع هنا

        -هذا النص هو مثال لنص يمكن ان يوضع هنا  .`,
      direc: '',
      first: false,
      class:"mt-3"
    },
  ];
}
