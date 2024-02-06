import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive(
    {
        // Unique selector
        // Different way tp declare a selector
        // selector : 'appBasicHighlightDirective'   => <            appBasicHighlightDirective>
        // selector : '[appBasicHighlightDirective]' => <div         appBasicHighlightDirective>
        // selector : '.appBasicHighlightDirective'  => <div class ='appBasicHighlightDirective'>
        selector : '[appBasicHighlightDirective]'
    }
)
export class BasicHighlightDirective implements OnInit{

    // Uses demendency injecttion
    constructor(private elementRef : ElementRef) {
    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}