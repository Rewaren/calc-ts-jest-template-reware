export class BaseContract {
    contractId: string;
    clientName: string;
    isActive: boolean;

    constructor(contractId: string, clientName: string, isActive: boolean) {
        this.contractId = contractId;
        this.clientName = clientName;
        this.isActive = isActive;
    }

    activate(): void {
        this.isActive = true;
    }
    deactivate(): void {
        this.isActive = false;
    }
}

export class DepositContract extends BaseContract {
    amount: number;
    interestRate: number;

    constructor(contractid: string, clientName: string, isActive: boolean, amount: number, interestRate: number) {
        super(contractid, clientName, isActive);
        this.amount = amount;
        this.interestRate = interestRate;
    }

    calculateInterest(): number{
        return this.amount * this.interestRate;
    }
}

export class InsuranceContract extends BaseContract {
    insuranceType: string;
    premium: number;
    termYears: number;

    constructor(contractid: string, clientName: string, isActive: boolean, insuranceType: string, premium: number, termYears: number) {
        super(contractid, clientName, isActive);
        this.insuranceType = insuranceType;
        this.premium = premium;
        this.termYears = termYears;
    }

    calculateTotalPremium(): number {
        return this.premium * this.termYears;
    }
}