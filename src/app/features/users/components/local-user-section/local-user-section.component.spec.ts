import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUserSectionComponent } from './local-user-section.component';

describe('LocalUserSectionComponent', () => {
  let component: LocalUserSectionComponent;
  let fixture: ComponentFixture<LocalUserSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalUserSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
