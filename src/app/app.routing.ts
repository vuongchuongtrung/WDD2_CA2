import { HomeComponent } from './home/home.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

export const AppRoutes: any = [
    { path: "home", component: HomeComponent },
    { path: "partA", component: TempUnitConvertorComponent },
    { path: "partB" , component: BmiCalculatorComponent}
];
 
export const AppComponents: any = [
    HomeComponent,
    TempUnitConvertorComponent,
    BmiCalculatorComponent
];