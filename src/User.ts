export class User {
    username: string;
    surname: string;
    isConsentGiven: boolean;
    age: number;

    constructor(username: string, surname: string, isConsentGiven: boolean, age: number) {
        this.username = username;
        this.surname = surname;
        this.isConsentGiven = false;
        if (age < 0){
            this.age = 0;
        }
        else {this.age = age;}
    }

    verifyConsent(): boolean{
        return this.isConsentGiven;
    }

    giveConsent(): boolean {
        if(this.age > 18){
            return this.isConsentGiven = true;
        }
        return false;
    }

    revokeConsent(): boolean {
        if (this.isConsentGiven) {
            return this.isConsentGiven = false;
        }
        return true;
    }
}