import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCardComponent} from './image-card/image-card.component';
import {ImageGalleryComponent} from './image-gallery.component';
import {GalleryConfig} from './token';

@NgModule({
  declarations: [ImageGalleryComponent, ImageCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule {
}
