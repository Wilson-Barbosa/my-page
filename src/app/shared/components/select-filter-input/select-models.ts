/**
 * Interface that should be implemented for any class that wants use the SelectInputComponent.
 */
export interface SelectInputDataSource {
    /** Returns the value of this data source  */
    getValue(): string;

    /** Returns the name/label rendered inside the select's option */
    getLabel(): string;
}
