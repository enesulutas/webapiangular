import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Ozellik } from '../../classes/Ozellik';
import { OzellikService } from '../../shared/ozellik.service';

@Component({
	selector: 'cdk-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
	
	public ozellik: Ozellik = new Ozellik(0,'',0);
	public ozelliklerim:string='';
	public ozellikler:Ozellik[]=[];

	constructor(private ozellikService:OzellikService){
	}
	
	ngOnInit() {
	    this.getAllOzellik();
	}
	onOzellikSubmit(){
		this.ozellikService.addOzellik(this.ozellik);
	}
	getAllOzellik(){
		this.ozellikService.getAll().subscribe(
			data=>{
				this.ozellikler=data as Ozellik[];
			},
			err=>console.log(err)

		);
	}
}

