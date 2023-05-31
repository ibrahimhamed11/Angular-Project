"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FoodService = void 0;
var core_1 = require("@angular/core");
var data_1 = require("src/data");
var FoodService = /** @class */ (function () {
    function FoodService() {
    }
    FoodService.prototype.getFoodById = function (id) {
        return this.getAll().find(function (food) { return food.id == id; });
    };
    FoodService.prototype.getAll = function () {
        return data_1.sample_foods;
    };
    FoodService.prototype.getAllFoodsBySearchTerm = function (searchTerm) {
        return this.getAll().filter(function (food) { return food.name.toLowerCase().includes(searchTerm.toLowerCase()); });
    };
    FoodService.prototype.getAllTags = function () {
        return [
            { name: "All", count: 14 },
            { name: "FastFood", count: 4 },
            { name: "Pizaa", count: 2 },
            { name: "SlowFood", count: 2 },
            { name: "Hamburger", count: 1 },
        ];
    };
    FoodService.prototype.getAllFoodsByTag = function (tag) {
        return tag == 'All' ?
            this.getAll() :
            this.getAll().filter(function (food) { var _a; return (_a = food.tags) === null || _a === void 0 ? void 0 : _a.includes(tag); });
    };
    FoodService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FoodService);
    return FoodService;
}());
exports.FoodService = FoodService;
