import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../../../classes/DialogData";



@Component({
  selector: "app-choose-price-dialog",
  templateUrl: "./choose-price-dialog.component.html"
})
export class ChoosePriceDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ChoosePriceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
