import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.value != '' && matchingControl.value != null) {
            if (control.value == matchingControl.value) {
                matchingControl.setErrors(null);
            } else {
                matchingControl.setErrors({
                    MustMatch: true
                });
            }
        }
    }
}
