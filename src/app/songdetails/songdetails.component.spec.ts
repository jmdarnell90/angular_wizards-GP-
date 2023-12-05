import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsComponent } from './songdetails.component';

describe('SongdetailsComponent', () => {
  let component: SongDetailsComponent;
  let fixture: ComponentFixture<SongDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongDetailsComponent],
    });
    fixture = TestBed.createComponent(SongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
