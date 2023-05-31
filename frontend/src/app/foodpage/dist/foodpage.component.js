"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FoodpageComponent = void 0;
var core_1 = require("@angular/core");
var FoodpageComponent = /** @class */ (function () {
    function FoodpageComponent(ActivatedRoute, FoodService) {
        var _this = this;
        this.ActivatedRoute = ActivatedRoute;
        this.FoodService = FoodService;
        ActivatedRoute.params.subscribe(function (params) {
            if (params.id)
                _this.food = FoodService.getFoodById(params.id);
        });
    }
    FoodpageComponent = __decorate([
        core_1.Component({
            selector: 'app-foodpage',
            templateUrl: './foodpage.component.html',
            styleUrls: ['./foodpage.component.css']
        })
    ], FoodpageComponent);
    return FoodpageComponent;
}());
exports.FoodpageComponent = FoodpageComponent;
