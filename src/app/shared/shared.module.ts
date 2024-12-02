import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutsModule } from './components/layouts/layouts.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './Pipes/search.pipe';
import { errorComponent } from './components/error/error.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, SearchPipe, errorComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
  ],
  exports: [NavBarComponent, FooterComponent, SearchPipe],
})
export class SharedModule {}
