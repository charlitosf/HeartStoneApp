import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelloToastComponent } from './hello-toast.component';

describe('HelloToastComponent', () => {
  let component: HelloToastComponent;
  let fixture: ComponentFixture<HelloToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloToastComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelloToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
