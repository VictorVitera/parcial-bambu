import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextComponent } from './input-text.component';
import { IonicModule } from '@ionic/angular';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextComponent ],
      imports: [ IonicModule.forRoot() ]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
