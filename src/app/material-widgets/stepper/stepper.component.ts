import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ozellik } from '../../classes/Ozellik';

@Component({
	selector: 'cdk-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
	constructor(private formBuilder: FormBuilder) { }
	
	public ozellik:Ozellik=new Ozellik();
	ngOnInit() {

	}
	onSubmit(){
		console.log(this.ozellik);
	}
}

