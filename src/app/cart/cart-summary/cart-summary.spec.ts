import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummary } from './cart-summary';
import { CartService } from '../cart.service';

describe('CartSummary', () => {
  let component: CartSummary;
  let fixture: ComponentFixture<CartSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('does not show the order total when the cart is empty', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain('Order Total');
  });

  it('hides the order total after the last cart item is removed', () => {
    const cartService = TestBed.inject(CartService);
    cartService.items.set([
      {
        productId: 1,
        name: 'Test product',
        individualPrice: 1,
        quantity: 1,
        totalPrice: 1,
      },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Order Total');

    component.removeItemFromCart(1);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain('Order Total');
  });
});
