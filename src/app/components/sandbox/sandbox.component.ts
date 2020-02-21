import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
    <div class="container">
        <div class="row">
            <div class="col col-sm-8">
                <table class="table table-striped col">
                    <thead class="thead-inverse">
                        <tr>
                        <th>Name</th><th>Cost</th><th>Advantage</th><th>Net</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let card of cards; let i = index">
                            <td>{{ card.name }}</td>
                            <td>{{ card.cost }}</td>
                            <td>{{ card.advantage }}</td>
                            <td>{{ (card.cost * (-1) ) + card.advantage }}</td>
                            <td><button class="btn btn-primary" (click)="removeCard(i)">Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4">
                <form (submit)="addCard(f); cardForm.reset()" novalidate #f="ngForm" #cardForm>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" [(ngModel)]="card.name" name="name" #cardName="ngModel" required>
                        <div *ngIf="cardName.errors?.required && cardName.touched" class="alert alert-danger">Card name is required</div>
                    </div>
                    <div class="form-group">
                        <label>Cost</label>
                        <input type="number" class="form-control" [(ngModel)]="card.cost" name="cost">
                    </div>
                    <div class="form-group">
                        <label>Advantage</label>
                        <input type="number" class="form-control" [(ngModel)]="card.advantage" name="advantage">
                    </div>
                    <input type="submit" class="btn btn-success" value="Add Card">
                </form>
            </div>
        </div>
    </div>
    `
})

export class SandboxComponent {
    card:{name: string, cost: number, advantage: number};
    constructor(){
        this.card = {
            name: '',
            cost: 0,
            advantage: 0
        }
    }
    cards: object[] = [];
    

    addCard({ value, valid }) {
        if (valid) {
            this.cards.push(value);
            console.log(value);
        } else {
            console.log('Form is invalid');
        }
    }

removeCard(index) {
    this.cards.splice(index, 1);
}

}