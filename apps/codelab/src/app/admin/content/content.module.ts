import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { SlidePreviewComponent } from './slide-preview/slide-preview.component';
import { FullSlideModule } from './full-slide/full-slide.module';
import { SlideEditorModule } from './slide-editor/slide-editor.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [ContentComponent, SlidePreviewComponent],
  exports: [ContentComponent],
  entryComponents: [ContentComponent],
  imports: [
    CommonModule,
    FullSlideModule,
    SlideEditorModule,
    AngularFirestoreModule
  ]
})
export class ContentModule {}