

class HomeBannerController {
  static $inject = ['$state'];
  slideData = [];

  constructor($state) {

    [ this.$state = $state
    ] = [...arguments];

    this._renderSlide();

  }

  _renderSlide() {
    this.slideData = [
      { color: '#ff0000', text: 'One' },
      { color: '#00ff00', text: 'Two' },
      { color: '#0000ff', text: 'Three' }
    ];
  }

  slideHasChanged(index) {
    console.log(index);
  }

  $onInit() {
    console.log('onInit');
  }

  $doCheck() {
    console.log('doCheck');
  }

  $onDestroy() {
    console.log('onDestroy');
  }

  $postLink() {
    console.log('postLink');
  }

}

let linkFn = (scope, element, attr) => {
  // console.log(scope, element, attr);
}

export default class HomeBannerComponent {
  constructor() {
    this.restrict = 'E';
    this.link = linkFn;
    this.scope = {};
    this.controller = HomeBannerController;
    this.bindToController = true;
    this.controllerAs = 'vm';
    this.template = `
    <ion-slide-box on-slide-changed="vm.slideHasChanged($index)">
      <ion-slide ng-repeat="item in vm.slideData track by $index">
        <div style="height: 200px" class="box" ng-style="{background: item.color}">
          <h1 ng-bind="item.text"></h1>
        </div>
      </ion-slide>
    </ion-slide-box>
    `;
  }
}