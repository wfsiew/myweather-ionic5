import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HourlyPage } from './hourly.page';

describe('HourlyPage', () => {
  let component: HourlyPage;
  let fixture: ComponentFixture<HourlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
