import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBarCardComponent } from './collection-bar-card.component';

describe('CollectionBarCardComponent', () => {
  let component: CollectionBarCardComponent;
  let fixture: ComponentFixture<CollectionBarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionBarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionBarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
