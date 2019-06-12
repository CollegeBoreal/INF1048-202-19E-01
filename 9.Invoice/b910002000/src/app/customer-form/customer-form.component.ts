import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../Customer';
import {CustomersService} from '../services';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customer: Customer;

  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.customerId)
    ).subscribe(customerId => {
      if (customerId) {
        this.customersService.get<Customer>(customerId)
          .subscribe(customer => {
            this.customer = customer;
          });
      } else {
        this.customer = new Customer();
      }
    });
  }


  save() {
    if (this.customer.id) {
      this.customersService.update<Customer>(this.customer.id, this.customer).subscribe(response => {
        this.viewCustomer(response.id);
      });
    } else {
      this.customersService.create<Customer>(this.customer).subscribe(response => {
        this.viewCustomer(response.id);
      });
    }
  }

  delete() {
    /*
      this.dialogService.openConfirm({
        message: 'Are you sure you want to delete this customer?',
        title: 'Confirm',
        acceptButton: 'Delete'
      }).afterClosed().subscribe((accept: boolean) => {
        if (accept) {
          this.loadingService.register('customer');
          this.customersService.delete(this.customer.id).subscribe(response => {
            this.loadingService.resolve('customer');
            this.customer.id = null;
            this.cancel();
          });
        }
      });
      */
  }

  cancel() {
    if (this.customer.id) {
      this.router.navigate(['/customers', this.customer.id]);
    } else {
      this.router.navigateByUrl('/customers');
    }
  }

  private viewCustomer(id: number) {
    this.router.navigate(['/customers', id]);
  }

}
