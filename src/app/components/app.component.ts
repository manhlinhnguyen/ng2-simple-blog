import { Component, ComponentRef, ViewContainerRef, ComponentFactoryResolver, 
  ViewChild, OnChanges, OnInit, ComponentFactory } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UnauthMenuComponent } from './unauth-menu.component';

@Component({
  selector: 'nb-root',
  templateUrl: '../views/app.component.html'
})
export class AppComponent implements OnInit {
  private login = false;
  private componentReference: ComponentRef<Component>;
  // Component input
  @ViewChild("menuTarget", {read: ViewContainerRef})
  private menuTarget: ViewContainerRef;

  subscription: Subscription;

  constructor(private router: Router,
              private resolver: ComponentFactoryResolver) {
  }

  //
  // Called after the view has been initialised
  //
  ngOnInit() {
    this.subscription = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
            if(this.router.routerState.snapshot.root.children[0].component['name'] == "EntryComponent"){
                this.updateMenu(this.router.routerState.snapshot.root.children[0].children[0]);
            } else {
                this.updateMenu(this.router.routerState.snapshot.root.children[0]);
            }
        }
      }
    );
  }

  //
  // Updates the view with the dynamically loaded component
  //
  private updateMenu(snapshot: ActivatedRouteSnapshot) {
    this.clearMenu();
    let data = snapshot.data;
    let componentFactory: ComponentFactory<Component>;

    if(this.login == true){
      componentFactory = this.resolver.resolveComponentFactory(data['menu']);
    } else {
      componentFactory = this.resolver.resolveComponentFactory(UnauthMenuComponent);
    }
    this.componentReference = this.menuTarget.createComponent(componentFactory);
  }

  private clearMenu() {
      this.menuTarget.clear();
      if(this.componentReference){
        this.componentReference.destroy();
      }
  }
}
