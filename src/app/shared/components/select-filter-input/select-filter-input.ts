import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectInputDataSource } from './select-models';
import { NgClass } from '@angular/common';
import { PText } from "../../../blog/components/p-text/p-text";

/**
 * Select component, similar to a selectElement from html, but with support for filtering.
 */
@Component({
    selector: 'app-select-filter-input',
    imports: [NgClass, FormsModule],
    templateUrl: './select-filter-input.html',
    styleUrl: './select-filter-input.css',
    providers: [
        {   // this config makes it so this input can be used by angular's forms modules
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SelectFilterInput
        }
    ]
})
export class SelectFilterInput implements ControlValueAccessor {

    // @Input() resetOnSelection: boolean = false;
    @Input() placeholder: string = "";
    @Input() bootstrapIcon: string = "";
    @Input() iconPosition: "right" | "left" = "right";
    @Input() set setDataSource(value: SelectInputDataSource[]) {
        this.dataSourceArray = value;
        this.renderedItems = value;
    }

    inputForm: string = "";
    dataSourceArray: SelectInputDataSource[] = [];
    renderedItems: SelectInputDataSource[] = [];
    isListCollapsed: boolean = false;
    isInputDisabled: boolean = false;
    wasInputTouched: boolean = false;
    onChange = (value: any) => { };
    onTouched = () => { };


    handleOnFocusEvent(): void {
        this.isListCollapsed = true;
    }

    handleOnBlurEvent(): void {
        this.isListCollapsed = false;
    }

    handleOnInput(): void {

        let newRendered = [];

        if (this.inputForm !== "") {

            for (const item of this.dataSourceArray) {
                if (item.getLabel().includes(this.inputForm)) {
                    newRendered.push(item);
                }
            }

            this.renderedItems = newRendered;

        } else {
            this.renderedItems = this.dataSourceArray;
        }

    }

    handleOnMouseDownAtListItem(value: SelectInputDataSource): void {

        this.inputForm = value.getLabel();
        this.onChange(value.getValue());

    }

    get dataSource(): SelectInputDataSource[] {
        return this.dataSourceArray;
    }

    writeValue(value: string): void {
        this.inputForm = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isInputDisabled = isDisabled;
        this.isListCollapsed = false;
    }


}
