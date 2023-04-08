import { Component, Input } from "@angular/core";
import { Idata } from "../../Interfaces/y";

@Component(
{
    selector : 'Ans',
    templateUrl : './example.component.html',
    styleUrls : [
    ] 
})
export class C{
    @Input("al") inputValue: Idata;
    bool = true;
}